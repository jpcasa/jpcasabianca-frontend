<template lang="html">
  <ul class="list-menu">
    <li v-for="(item, index) in items" :key="index">
      <a target="_blank" v-if="action == 'blank'" :href="displayUrl(item.url)">{{ item.title }}</a>
      <nuxt-link v-if="action == 'push'" :to="item.url">{{ item.title }}</nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['items', 'action'],
  methods: {
    displayUrl(url) {
      if (!url) {
        return '/'
      }
      return url
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/css/helpers/_variables.scss';

.list-menu {
  list-style: none;
  padding: 0;
  margin: 0 20px;
  font-family: $proxima-nova;
  color: #fff;
  li {
    cursor: pointer;
    margin: 3px 0;
    a {
      color: #fff;
      text-decoration: none;
      &:hover {
        color: $color-green-light;
      }
    }
  }
}
</style>
