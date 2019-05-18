<template>
  <div id="app">
    <page-header></page-header>
    <router-view></router-view>
    <page-footer></page-footer>
    <transition name="slide">
      <page-search v-if="isShowSearch"></page-search>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PageHeader from '@/components/page-header/page-header'
import PageFooter from '@/components/page-footer/page-footer'
import PageSearch from '@/components/page-search/page-search'

export default {
  components: {
    PageHeader,
    PageFooter,
    PageSearch
  },

  computed: {
    ...mapGetters([
      'isShowSearch'
    ])
  }
}
</script>

<style lang="scss" scoped>
@import "@/common/scss/variable.scss";

.slide-enter-active,
.slide-leave-active {
  transition: all .35s ease-in-out;

  @media (max-width: 1023px) {
    transition: all .25s ease-in-out;
  }
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}

</style>
