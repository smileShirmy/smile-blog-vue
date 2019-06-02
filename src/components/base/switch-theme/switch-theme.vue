<template>
  <i
    class="icon"
    :class="theme === 'light' ? 'icon-dark' : 'icon-light'"
    :style="{fontSize: size}"
    @click="switchTheme"
  ></i>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  props: {
    size: {
      type: String,
      default: "30px"
    }
  },

  computed: {
    ...mapGetters([
      'theme'
    ])
  },

  methods: {
    switchTheme() {
      if (this.theme === 'light') {
        this.setTheme('dark')
      } else {
        this.setTheme('light')
      }

      document.body.id = this.theme;
    },

    ...mapMutations({
      setTheme: 'SET_THEME'
    }),
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variable.scss";

.icon {
  cursor: pointer;
  transition: $--theme-transition;
}
</style>
