<template>
  <i
    class="icon"
    :class="isLight ? 'icon-dark' : 'icon-light'"
    :style="{fontSize: size}"
    @click="switchTheme"
  ></i>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "30px"
    }
  },

  data() {
    return {
      isLight: true
    };
  },

  methods: {
    switchTheme() {
      this.isLight = !this.isLight;

      const theme = this.isLight ? "light" : "dark";
      document.body.id = theme;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/common/scss/variable.scss";

.icon {
  cursor: pointer;
  transition: $--theme-transition;
}
</style>
