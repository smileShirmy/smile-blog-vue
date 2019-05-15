<template>
  <div id="app">
    <div class="blog-description">Thoughts, stories and ideas</div>
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/header/header'

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
@import '@/common/scss/variable.scss';

.blog-description {
  position: fixed;
  z-index: 999;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 86px;
  max-width: 90vh;
  margin: auto;
  font-size: 13px;
  font-weight: $--font-weight-bold;
  text-align: center;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  transform: rotate(-90deg) translate(-50%, 50%);
  transform-origin: 0 50%;
}
</style>
