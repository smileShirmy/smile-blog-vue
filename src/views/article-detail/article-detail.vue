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
      <article class="article-content article-markdown" v-html="marked(content)"></article>
    </div>
  </div>
</template>

<script>
import markdown from '@/common/js/marked'

export default {
  data() {
    return {
      title: '这是文章题目',
      coverUrl: 'http://resource.shirmy.me/lighthouse.jpeg',
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
@import '@/common/scss/variable.scss';
@import '@/common/scss/mixin.scss';

@mixin contentPadding {
  padding: 50px 60px;

  @media (max-width: 1399px) {
    padding: 35px 45px;
  }

  @media (max-width: 1023px) {
    padding: 20px 30px;
  }

  @media (max-width: 479px) {
    padding: 10px 5px;
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

  .article-content {
    @include contentPadding;
    border-radius: 5px;
    background-color: $--app-background-color-light;
    box-shadow: 0 2px 24px 5px rgba(0, 0, 0, .05);
    transition: $--theme-transition;

    @media (max-width: 479px) {
      box-shadow: none;
      background-color: $--app-background-color;
    }
  }
}
</style>