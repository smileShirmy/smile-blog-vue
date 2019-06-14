<template>
  <div class="article-list-container">
    <ul class="article-list-wrapper">
      <li class="article-item" v-for="article in articleList" :key="article.id">
        <article class="article-wrapper">
          <a class="tag">{{article.tag}}</a>
          <h2 class="title">
            <router-link :to="'/article/' + article.id" class="article-link">
              {{article.title}}<span class="hover-dot"></span>
            </router-link>
          </h2>
          <p class="content">{{article.content}}</p>
          <footer class="footer">
            <div class="author-wrapper">
              <i class="avatar"></i>
              <span class="name">{{article.author}}</span>
            </div>
            <div class="info-wrapper">
              <i class="icon icon-eye"></i>
              <span class="count">1</span>
              <i class="icon icon-reply"></i>
              <span class="count">1</span>
              <i class="icon icon-heart"></i>
              <span class="count">1</span>
              <time datetime="2018-5-16">{{article.time}}</time>
            </div>
          </footer>
        </article>
        <div class="split"></div>
        <img class="article-image" src="https://resource.shirmy.me/lighthouse.jpeg"/>
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
    title: '标题',
    content: `这些是内容这些是内容这些是内容这些是内容这些是内容这些是内容这些是内容这些是内容这些是内容这些是内容这些是内容这些是内容这些是内容这些是内容这些是内容这些是内容这些是内容`,
    author: 'smile',
    time: '2018-5-16'
  },
  {
    id: 2,
    tag: 'tag2',
    title: '标题',
    content: `这些是内容这些是内容这些是内容这些是内容这些是内容这些是内容这些是内容这些是内容这些是内容这些是内容这些是内容这些是内容这些是内容这些是内容这些是内容这些是内容这些是内容`,
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
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/mixin.scss";

.article-list-container {
  @include container;
  box-sizing: border-box;
  margin: 0 auto;
}

.article-list-wrapper {
  box-sizing: border-box;
  padding: 60px;
  background-color: #fff;
  border-radius: 5px;
  background-color: var(--app-background-color-light);
  box-shadow: 0 2px 24px 5px rgba(0, 0, 0, .05);
  transition: $--theme-transition;

  @media (max-width: 1023px) {
    padding: 30px;
  }

  @media (max-width: 479px) {
    padding: 0;
    box-shadow: none;
    background: var(--app-background-color);
  }

  .article-item {
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    margin-bottom: 60px;
    text-align: left;

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
  color: var(--font-color-article);

  .tag {
    cursor: pointer;
    color: var(--font-color-light);
  }

  .title {
    margin: 10px 0 0;
    font-weight: $--font-weight-bold;
    color: var(--font-color-dark);

    @media (max-width: 1399px) {
      font-size: $--title-font-size-medium;
    }

    @media (max-width: 1023px) {
      font-size: $--title-font-size-base;
    }

    @media (max-width: 767px) {
      font-size: $--title-font-size-small;
    }

    .article-link {
      position: relative;
      cursor: pointer;

      &:hover .hover-dot {
        background-color: var(--theme-active);
      }

      .hover-dot {
        position: absolute;
        top: 0;
        right: -10px;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        transition: all 0.25s ease;
      }
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

    .info-wrapper {
      display: flex;
      align-items: center;
      font-size: $--font-size-small;

      >i {
        display: inline-block;
        margin-right: 2px;
      }

      >span {
        margin-right: 10px;
        line-height: 1;
      }

      >time {
        line-height: 1;
      }
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
  border-radius: 2px;
  background-size: cover;
  box-shadow: 0 5px 26px -3px rgba(0, 0, 0, .12);
  cursor: pointer;

  @media (min-width: 1024px) and (max-width: 1399px) {
    width: 360px;
    min-width: 360px;
  }

  @media (max-width: 1023px) {
    width: 100%;
    min-width: auto;
    margin-bottom: 30px;
    box-shadow: none;
  }
  
  @media (max-width: 767px) {
    margin-bottom: 20px;
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
    border-color: var(--theme-active);
    background-color: var(--theme-active);
    transform: scale(.65);
  }
}
</style>
