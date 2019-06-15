<template>
  <ul class="recommend-container">
    <li class="recommend-item" v-for="article in articleList" :key="article.id">
      <time class="time" datetime="2018-5-17">{{article.time}}</time>
      <span class="title">{{article.title}}</span>
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
@import '@/assets/scss/variables.scss';

.recommend-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 6px 0;
  cursor: pointer;

  .time {
    margin-right: 20px;
    font-size: $font-size-medium;
  }

  .title {
    font-size: $font-size-large;
  }

  @media (max-width: 1023px) {
    .time {
      margin-right: 16px;
      font-size: $font-size-base;
    }

    .title {
      font-size: $font-size-medium;
    }
  }

  @media (max-width: 479px) {
    .time {
      display: none;
    }
  }
}
</style>
