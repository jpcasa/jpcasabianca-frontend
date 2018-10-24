<template lang="html">
  <ul class="sidebar-menu">
    <li v-for="(item, index) in menu" :key="index">
      <nuxt-link
        :to="'/' + item.url"
        @click.native="activateMenu(item.id)"
        class="menu-item"
        :target="item.title == 'Blog' ? '_blank' : ''"
        v-if="item.title != 'Blog'"
        :id="getId(item.url)">
        {{ item.title }}
      </nuxt-link>
      <ul v-if="showSubMenu(item.url)">
        <li v-for="(subItem, index2) in item.sub_menu_items" :key="index2">
          <nuxt-link
            v-if="subItem.action == 'scroll'"
            :to="'#' + subItem.url"
            @click.native="activateMenuActive(subItem.id)"
            v-scroll-to="'#' + subItem.url"
            :class="getClasses(subItem.id)"
            :id="getSubId(item.url)">
            {{ subItem.title }}
          </nuxt-link>
          <nuxt-link
            v-if="subItem.action == 'push'"
            @click.native="activateMenuActive(subItem.id)"
            :to="subItem.url"
            :id="getSubId(item.url)"
            :class="getClassesPush(subItem.url)">
            {{ subItem.title }}
          </nuxt-link>
        </li>
      </ul>
    </li>
    <li>
      <a href="https://medium.com/@jpc_774" class="menu-item" target="_blank">Blog</a>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['menu'],
  methods: {
    getClasses(id) {
      if (id == this.$store.state.menus.subMenuActive) {
        return 'is-active menu-sub-item'
      } else {
        return 'menu-sub-item'
      }
    },
    showSubMenu(item) {
      let path = this.$nuxt.$route.path
      if (path != '/') {
        path = path.split("/")
        path = path[1]
      } else {
        path = ''
      }
      if (item == path) {
        return true
      } else {
        return false
      }
    },
    activateMenu(id) {
      this.$store.dispatch('menus/getSubMenu', id)
    },
    activateMenuActive(id) {
      this.$store.dispatch('menus/getSubMenuActive', id)
    },
    getId(url) {
      if(url == '') {
        const path = this.$nuxt.$route.path
        if (path != '/') {
          return 'not-home'
        }
      }
      return ''
    },
    getSubId(url) {
      const path = this.$nuxt.$route.path
      if (path != '/my-tech-stack') {
        if (url == '/my-tech-stack') {
          return 'not-tech-stack'
        }
      }
      return ''
    },
    getClassesPush(url) {
      const path = this.$nuxt.$route.path
      console.log(url)
      if (path == url) {
        return 'is-active menu-sub-item'
      } else {
        return 'menu-sub-item'
      }
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/css/helpers/_variables.scss';
@import '~/assets/css/helpers/_extensions.scss';

.sidebar-menu {
  padding: 0;
  margin: 0 0 30px 0;
  list-style: none;
  li {
    position: relative;
    .menu-item {
      font-family: $gotham-rounded-medium;
      font-size: 14px;
      display: block;
      padding: 10px 0 10px 30px;
      border-left: 8px solid #fff;
      cursor: pointer;
      color: $color-blue-dark;
      text-decoration: none;
      &:hover {
        background-color: $color-gray-light;
        border-left: 8px solid $color-green;
      }
    }
    .menu-item.is-active {
      background-color: $color-gray-light;
      border-left: 8px solid $color-green;
    }
    #not-home {
      background-color: #fff;
      border-left: 8px solid #fff;
    }
    ul {
      list-style: none;
      margin: 10px 0;
      li {
        .menu-sub-item {
          font-family: $proxima-nova;
          display: block;
          padding: 3px 0 3px 20px;
          cursor: pointer;
          border-left: 5px solid #fff;
          color: $color-gray-heavy;
          font-size: 13px;
          text-decoration: none;
          &:hover {
            color: $color-blue-black;
            font-family: $proxima-nova-bold;
            border-left: 5px solid $color-green;
          }
        }
        .menu-sub-item.is-active {
          color: $color-blue-black;
          font-family: $proxima-nova-bold;
          border-left: 5px solid $color-green;
        }
      }
    }
  }
}
</style>
