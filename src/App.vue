<template>
  <div id="app" class="app-container">
    <page-header></page-header>
    <main class="view">
      <transition name="fade-transform"
                  mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
    <page-footer></page-footer>
    <transition name="search-slide">
      <page-search v-if="isShowSearch"></page-search>
    </transition>
    <scroll-top></scroll-top>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PageHeader from '@/components/layout/page-header/page-header'
import PageFooter from '@/components/layout/page-footer/page-footer'
import PageSearch from '@/components/layout/page-search/page-search'
import ScrollTop from '@/components/layout/scroll-top/scroll-top'

export default {
  components: {
    PageHeader,
    PageFooter,
    PageSearch,
    ScrollTop
  },

  computed: {
    ...mapGetters([
      'isShowSearch'
    ])
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/animation.scss";

.app-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}

.view {
  flex: 1;
}
</style>
