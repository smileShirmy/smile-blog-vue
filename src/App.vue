<template>
  <div id="app">
    <page-header></page-header>
    <router-view></router-view>
    <page-footer></page-footer>
  </div>
</template>

<script>
import PageHeader from '@/components/page-header/page-header'
import PageFooter from '@/components/page-footer/page-footer'

export default {
  components: {
    PageHeader,
    PageFooter
  }
}
</script>

<style lang="scss" scoped>
</style>
