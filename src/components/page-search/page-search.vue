<template>
  <div class="container">
    <section class="section-search">
      <div class="search-close" @click="closeSearch">
        <i class="icon icon-close"></i>
      </div>
    </section>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    closeSearch() {
      this.setShowSearch(false)
    },

    ...mapMutations({
      setShowSearch: 'SET_SHOW_SEARCH'
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/common/scss/variable.scss";

.container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: $--app-background-color;
  z-index: $--index-top;
}

.section-search {
  position: relative;
}

.search-close {
  position: absolute;
  top: 40px;
  right: 40px;

  .icon-close {
    font-size: $--title-font-size-large;
    transition: $--theme-transition;
    cursor: pointer;
    
    &:hover {
      color: $--theme-active;
    }
  }
}
</style>
