<template>
  <div class="article-list-container">
    <ul class="article-list-wrapper">
      <li class="article-item" v-for="article in articleList" :key="article.id">
        <article class="article-wrapper">
          <a class="tag">{{article.tag}}</a>
          <h1 class="title">{{article.title}}</h1>
          <p class="content">{{article.content}}</p>
          <footer class="footer">
            <div class="author-wrapper">
              <i class="avatar"></i>
              <span class="name">{{article.author}}</span>
            </div>
            <div class="time-wrapper">
              <time datetime="2018-5-16">{{article.time}}</time>
            </div>
          </footer>
        </article>
        <div class="split"></div>
        <div class="article-image"></div>
      </li>
      <div class="load-more" @click="loadMore"></div>
    </ul>
  </div>
</template>

<script>
const articleList = [
  {
    id: 1,
    tag: 'JavaScript',
    title: '前端性能优化 —— 项目瘦身',
    content: `在我们的日常开发中，我们经常需要引入各种各样的第三方模块来帮助我们提升开发速度。但是有时候这些模块里面又包含了许多我们用不到的模块，在打包的时候又一并打包进去了，这就造成了没必要的带宽浪费。这里以Vue项目为例。`,
    author: 'smile',
    time: '2018-5-16'
  },
  {
    id: 2,
    tag: 'tag2',
    title: '前端性能优化 —— 项目瘦身',
    content: `在我们的日常开发中，我们经常需要引入各种各样的第三方模块来帮助我们提升开发速度。但是有时候这些模块里面又包含了许多我们用不到的模块，在打包的时候又一并打包进去了，这就造成了没必要的带宽浪费。这里以Vue项目为例。`,
    author: 'qiushiming',
    time: '2018-5-16'
  },
  {
    id: 3,
    tag: 'tag3',
    title: 'title3',
    content: 'content3',
    author: 'author3',
    time: '2018-5-16'
  },
  {
    id: 4,
    tag: 'tag4',
    title: 'title4',
    content: 'content4',
    author: 'author4',
    time: '2018-5-16'
  },
  {
    id: 5,
    tag: 'tag4',
    title: 'title4',
    content: 'content4',
    author: 'author4',
    time: '2018-5-16'
  },
]

export default {
  data() {
    return {
      articleList,
    }
  },

  methods: {
    loadMore() {
      
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/common/scss/variable.scss";
@import "@/common/scss/animation.scss";

.article-list-container {
  box-sizing: border-box;
  max-width: 1120px;
  margin: 0 auto;
  animation: slideTop .7s ease-in-out both;

  @media (max-width: 1399px) {
    padding: 0 85px;
  }

  @media (max-width: 1023px) {
    padding: 0 45px;
  }

  @media (max-width: 767px) {
    padding: 0 35px;
  }

  @media (max-width: 479px) {
    padding: 0 15px;
  }
}

.article-list-wrapper {
  box-sizing: border-box;
  padding: 75px;
  background-color: #fff;
  border-radius: 5px;
  background-color: $--app-background-color-light;
  box-shadow: 0 2px 24px 5px rgba(0, 0, 0, .05);
  transition: $--theme-transition;

  @media (max-width: 1023px) {
    padding: 30px;
  }

  @media (max-width: 479px) {
    padding: 0;
    box-shadow: none;
    background: $--app-background-color;
  }

  .article-item {
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    right: -110px;
    margin-bottom: 60px;
    text-align: right;

    &:nth-child(2n) {
      flex-direction: row-reverse;
      right: auto;
      left: -110px;
      text-align: left;
    }

    @media (max-width: 1399px) {
      right: -50px;
      width: calc(100% + 60px);
    }

    @media (max-width: 1023px) {
      flex-direction: column-reverse;
      right: auto;
      width: 100%;
      margin-bottom: 40px;
      text-align: left;

      &:nth-child(2n) {
        flex-direction: column-reverse;
        left: auto;
        text-align: left;
      }
    }

    @media (max-width: 767px) {
      margin-bottom: 20px;
    }
  }
}

.article-wrapper {
  width: 100%;
  color: $--font-color-article;

  .tag {
    cursor: pointer;
    color: $--font-color-light;
  }

  .title {
    margin: 0;
    font-weight: $--font-weight-bold;
    color: $--font-color-dark;

    @media (max-width: 1399px) {
      font-size: $--title-font-size-medium;
    }

    @media (max-width: 1023px) {
      font-size: $--title-font-size-base;
    }

    @media (max-width: 767px) {
      font-size: $--title-font-size-small;
    }
  }

  .content {
    margin: 1em 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;

    @media (max-width: 479px) {
      font-size: $--font-size-base;
    }
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: $--font-size-small;

    .author-wrapper {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .avatar {
        display: inline-block;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        background-color: #ccc;

        @media (max-width: 479px) {
          width: 26px;
          height: 26px;
        }
      }

      .name {
        margin-left: 12px;
      }
    }

    .time-wrapper {
      font-weight: $--font-weight-bold;
    }
  }
}

.split {
  width: 4vw;
  min-width: 4vw;
}

.article-image {
  width: 420px;
  min-width: 420px;
  height: 430px;
  border-radius: 2px;
  background: url(../../../common/image/lighthouse.jpeg) no-repeat center center;
  background-size: cover;
  // box-shadow: 0 5px 26px -3px rgba(0, 0, 0, .12);
  animation: slideTop .7s ease-in-out both;

  @media (min-width: 1024px) and (max-width: 1399px) {
    width: 360px;
    min-width: 360px;
  }

  @media (max-width: 1023px) {
    width: 100%;
    min-width: auto;
    height: 400px;
    margin-bottom: 30px;
    box-shadow: none;
  }
  
  @media (max-width: 767px) {
    height: 300px;
    margin-bottom: 20px;
  }

  @media (max-width: 479px) {
    height: 250px;
  }
}

.load-more {
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  margin: 0 auto;
  border: 8px solid #dcdfe7;
  border-radius: 50%;
  transition: all .25s ease-in-out;
  cursor: pointer;

  &:hover {
    border-color: $--theme-active;
    background-color: $--theme-active;
    transform: scale(.65);
  }
}
</style>
