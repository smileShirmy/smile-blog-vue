<template>
  <div>
    <header class="article-header" :style="coverImage">
      <div class="header-wrapper">
        <div class="content">
          <h1 class="title">{{title}}</h1>
          <div class="author-wrapper">
            by&nbsp;<span class="author-name">Shirmy</span>&nbsp;<time datetime="2019-01-01">&nbsp;a year ago</time>
          </div>
        </div>
      </div>
    </header>
    <div class="article-container">
      <div class="content">
        <div class="article-wrapper">
          <article class="article-markdown" v-html="marked(content)"></article>
        </div>
        <split-line class="split-line" :icon="'recommend'" :desc="'相关推荐'"></split-line>
        <div class="recommend-wrapper">
          <recommend></recommend>
        </div>
        <split-line class="split-line" :icon="'message'" :desc="'评论'"></split-line>
        <div class="comment-wrapper">
          <comment></comment>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import markdown from '@/services/markdown/marked'
import Recommend from '@/components/layout/recommend/recommend'
import Comment from '@/components/layout/comment/comment'
import SplitLine from '@/components/base/split-line/split-line'

export default {
  components: {
    Recommend,
    Comment,
    SplitLine
  },

  data() {
    return {
      title: '这是文章题目',
      coverUrl: 'https://resource.shirmy.me/lighthouse.jpeg',
      content: ''
    }
  },

  computed: {
    coverImage() {
      return {
        backgroundImage: `url(${this.coverUrl})`
      }
    }
  },

  methods: {
    marked(content) {
      return markdown(content)
    }
  },

  // 测试
  mounted() {
    this.content = "# 标题\n# 内容\n```javascript\nfunction abc() {console.log(abc)}\n```"
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/mixin.scss';

@mixin contentPadding {
  padding: 50px 60px;

  @media (max-width: 1399px) {
    padding: 35px 45px;
  }

  @media (max-width: 1023px) {
    padding: 20px 30px;
  }

  @media (max-width: 479px) {
    padding: 10px 0;
  }
}

.article-header {
  @include cover;
  width: calc(100% - 85px - 85px);
  height: 100%;
  margin: 0 auto;
  padding: 15vh 0 25vh;
  color: #fff;
  border-radius: 5px;
  background: no-repeat center center;
  background-size: cover;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 1399px) {
    width: 100%;
    border-radius: 0;
  }

  @media (max-width: 479px) {
    padding: 15vh 0 15vh;
  }

  .header-wrapper {
    @include container;
    position: relative;
    margin: 0 auto;
  }

  .content {
    @include contentPadding;
  }

  .title {
    margin: 0;
    line-height: 1;
    font-size: $--title-font-size-large;
    font-weight: $--font-weight-bold;
  
    @media (max-width: 479px) {
      font-size: $--title-font-size-base;
    }
  }
  
  .author-wrapper {
    margin-top: 15px;
    font-size: $--font-size-small;
  
    @media (max-width: 479px) {
      font-size: $--font-size-minimum
    }
  
    .author-name {
      font-size: $--font-size-medium;
      font-weight: $--font-weight-bold;
  
      @media (max-width: 479px) {
        font-size: $--font-size-small;
      }
    }
  }
}

.article-container {
  @include container;
  position: relative;
  margin-top: -10vh;
  border-radius: 5px;

  @media (max-width: 479px) {
    margin-top: 0;
  }

  .content {
    @include contentPadding;
    border-radius: 5px;
    background-color: var(--app-background-color-light);
    box-shadow: 0 2px 24px 5px rgba(0, 0, 0, .05);
    transition: $--theme-transition;

    @media (max-width: 479px) {
    box-shadow: none;
    background-color: var(--app-background-color);
  }
  }

  .split-line {
    margin: 20px 0;
  }
}
</style>