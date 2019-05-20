<template>
  <div class="about-container">
    <split-line :icon="'about'" :desc="'我们'"></split-line>
  </div>
</template>

<script>
import SplitLine from '@/components/split-line/split-line'

export default {
  components: {
    SplitLine
  }
}
</script>

<style lang="scss" scoped>
@import '@/common/scss/variable.scss';
@import '@/common/scss/mixin.scss';

.about-container {
  @include container;
}

</style>
