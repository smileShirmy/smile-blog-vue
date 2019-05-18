<template>
  <section class="section-tag">
    <h5 class="tag-title">{{title}}</h5>
    <ul class="tag-list">
      <li class="tag-item" v-for="(tag, index) in tagList" :key="index">{{tag.name}}</li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    title: String,
    tagList: Array
  }
}
</script>

<style lang="scss" scoped>
@import "@/common/scss/variable.scss";

.section-tag {
  font-weight: $--font-weight-bold;
}

.tag-title {
  font-size: $--title-font-size-medium;
  margin-bottom: 20px;

  @media (max-width: 767px) {
    font-size: $--title-font-size-base;
  }
}

.tag-list {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;

  .tag-item {
    display: inline-block;
    padding: 5px 12px;
    margin: 10px 10px 0 0;
    font-size: $--font-size-minimum;
    font-weight: $--font-weight-bold;
    letter-spacing: 1.5px;
    border-radius: 20px;
    background: $--tag-color;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      color: #fff;
      background: $--theme-active;
      transition: all .25s ease-in-out;
    }
  }
}
</style>
