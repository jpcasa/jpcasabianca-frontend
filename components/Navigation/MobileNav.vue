<template lang="html">
  <nav id="navigation-mobile">
    <nuxt-link
      v-for="(item, index) in menu"
      v-if="item.action=='scroll'"
      :key="index"
      :to="'#' + item.url"
      :class="getClasses(item.id)"
      @click.native="activateMenu(item.id)"
      v-scroll-to="'#' + item.url">
      <i :class="'icon-' + item.icon"></i>
      <span>{{ item.title }}</span>
    </nuxt-link>
    <nuxt-link
      v-for="(item, index) in menu"
      v-if="item.action=='push'"
      :key="index"
      :to="item.url"
      @click.native="activateMenu(item.id)"
      :class="getClasses(item.id)">
      <i :class="'icon-' + item.icon"></i>
      <span>{{ item.title }}</span>
    </nuxt-link>
  </nav>
</template>

<script>
export default {
  props: ['menu'],
  methods: {
    getClasses(id) {
      if (id == this.$store.state.menus.subMenuActive) {
        return 'is-active'
      }
    },
    activateMenu(id) {
      this.$store.dispatch('menus/getSubMenuActive', id)
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/css/helpers/_variables.scss';

#navigation-mobile {
  display: flex;
  position: fixed;
  z-index: 190;
  width: 100%;
  bottom: 0;
  left: 0;
  background-color: $color-blue-black;
  text-align: center;
  padding: 0;
  margin: 0;
  a {
    text-decoration: none;
    color: $color-gray;
    flex: 1;
    color: $color-gray;
    padding: 0;
    margin: 0;
    padding: 5px 0;
    cursor: pointer;
    i,
    span {
      display: block;
    }
    i {
      margin-bottom: 6px;
    }
    span {
      font-size: 10px;
      font-family: $gotham-rounded-book;
    }
    &:hover {
      background-color: $color-green-light;
      color: $color-green-dark;
    }
  }
  .is-active {
    background-color: $color-green-light;
    color: $color-green-dark;
  }
}

@media (min-width: 600px) {
  #navigation-mobile {
    li {
      span {
        font-size: 13px;
      }
      i {
        font-size: 18px;
      }
    }
  }
}

@media (min-width: 992px) {
  #navigation-mobile {
    display: none;
  }
}
</style>
