<template lang="html">
  <div class="simple-title">
    <p :style="subtitleStyle" class="subtitle">{{ subtitle }}</p>
    <h2 :style="titleStyle" class="title">{{ title }}</h2>
    <p :style="copyStyle" class="copy" v-html="copy" />
  </div>
</template>

<script>
export default {
  props: ['subtitle', 'title', 'copy', 'theme'],
  computed: {
    titleStyle() {
      if (this.theme == 'dark') {
        return 'color:#fff;'
      } else {
        return 'color: #272b2d;'
      }
    },
    subtitleStyle() {
      if (this.theme == 'dark') {
        return 'color:#3eec82;'
      } else {
        return 'color: #23c286;'
      }
    },
    copyStyle() {
      if (this.theme == 'dark') {
        return 'color:#adc7db;'
      } else {
        return 'color: #85949e;'
      }
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/css/helpers/_variables.scss';
@import '~/assets/css/helpers/_extensions.scss';

.simple-title {
  display: block;
  max-width: 500px;
  margin: auto;
  .subtitle {
    color: $color-green-light;
    margin-bottom: 5px;
  }
  .title {
    font-family: $gotham-rounded-medium;
    color: #fff;
    margin: 0;
  }
  .copy {
    color: $color-gray;
    a {
      color: $color-green;
      &:hover {
        color: $color-green-heavy;
      }
    }
  }
}
</style>
