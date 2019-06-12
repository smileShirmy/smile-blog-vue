<template>
  <ul class="recommend-container">
    <li class="recommend-item" v-for="article in articleList" :key="article.id">
      <time class="time" datetime="2018-5-17">{{article.time}}</time>
      <h4 class="title">{{article.title}}</h4>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      articleList: [
        {
          id: 1,
          title: '文章标题',
          time: '2019-06-10'
        },
        {
          id: 2,
          title: '文章标题',
          time: '2019-06-10'
        },
        {
          id: 3,
          title: '文章标题',
          time: '2019-06-10'
        },
        {
          id: 4,
          title: '文章标题',
          time: '2019-06-10'
        },
        {
          id: 5,
          title: '文章标题',
          time: '2019-06-10'
        },
      ]
    }
  } 
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';

.recommend-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 6px 0;

  .time {
    margin-right: 30px;
    font-size: $--font-size-medium;
  }

  .title {
    font-size: $--font-size-large;
  }
}
</style>
