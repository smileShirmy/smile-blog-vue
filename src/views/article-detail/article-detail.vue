<template>
  <div>
    <header class="article-header" :style="{backgroundImage: `url(${article.cover})`}">
      <div class="header-wrapper">
        <div class="content">
          <h1 class="title">{{article.title}}</h1>
          <div class="author-wrapper">
            by&nbsp;
            <span v-for="author in article.authors" :key="author.id" class="author-name">{{author.name}}</span>
            &nbsp;<time :datetime="article.created_date | filterTime">&nbsp;{{article.created_date | filterTime}}</time>
          </div>
        </div>
      </div>
    </header>
    <!-- 文章区域 -->
    <div class="article-container">
      <div class="content">
        <!-- 文章内容 -->
        <div class="article-wrapper">
          <article class="article-markdown" v-html="markedCcontent"></article>
        </div>
        <!-- 相关推荐 -->
        <split-line class="split-line" :icon="'recommend'" :desc="'相关推荐'"></split-line>
        <div class="recommend-wrapper">
          <recommend :articles="article.categoryArticles" @showRecommendDetail="onShowRecommendDetail"></recommend>
        </div>
      </div>
    </div>
    <!-- 评论区域 -->
    <div ref="commentArea" class="article-container comment-container">
      <div class="content">
        <split-line class="split-line" :icon="'message'" :desc="'评论'"></split-line>
        <div class="comment-wrapper">
          <comment :comments="comments" @createCommentSuccess="getComments" :articleId="parseInt(id)"></comment>
        </div>
      </div>
    </div>
    <aside class="like-wrapper">
      <div class="item" @click="likeArticle">
        <span class="count">{{article.like}}</span>
        <i class="icon icon-heart-fill" :class="{'is-like': isLike}"></i>
      </div>
      <div class="item" @click="scrollToComment">
        <span class="count">{{comments.length}}</span>
        <i class="icon icon-message-fill"></i>
      </div>
    </aside>
  </div>
</template>

<script>
import markdown from '@/services/markdown/marked'
import Recommend from '@/components/layout/recommend/recommend'
import Comment from '@/components/layout/comment/comment'
import SplitLine from '@/components/base/split-line/split-line'
import article from '@/services/models/article'
import comment from '@/services/models/comment'

// TODO: 点赞文章功能

export default {
  components: {
    Recommend,
    Comment,
    SplitLine
  },

  data() {
    return {
      id: 0,
      article: {},
      comments: [],
      likeArticles: [],
      likeComments: [],
    }
  },

  computed: {
    isLike() {
      return this.likeArticles.includes(this.id)
    },

    coverImage() {
      return {
        backgroundImage: `url(${this.coverUrl})`
      }
    },

    markedCcontent() {
      if (this.article.content) {
        return markdown(this.article.content)
      } else {
        return ''
      }
    },
  },

  methods: {
    // markdown 解析
    marked(content) {
      return markdown(content)
    },

    // 点赞文章
    async likeArticle() {
      if (this.isLike) {
        return
      }
      try {
        const res = await article.likeArticle(this.id)
        if (res.errorCode === 0) {
          // 保存到 localStorage
          this.article.like++
          this.likeArticles.push(this.id)
          window.localStorage.setItem('LIKE_ARTICLES', JSON.stringify(this.likeArticles))
        }
      } catch (e) {
        console.log(e)
      }
    },

    // 滚动到评论区
    scrollToComment() {
      this.$refs.commentArea.scrollIntoView({
        behavior: 'smooth'
      })
    },

    onShowRecommendDetail(articleId) {
      this.id = articleId
      this.$router.push({
        path: `/article/${articleId}`
      })
      this.getArticleDetail()
      this.getComments()
    },

    async getComments() {
      try {
        const res = await comment.getComments({
          articleId: this.id
        })
        res.forEach(v => {
          v.is_like = this.likeComments.includes(v.id)
          v.content = this.marked(v.content)
          if (v.parent_id !== 0) {
            const reply = res.find(target => target.id === v.parent_id)
            if (reply) {
              v.replyName = reply.nickname
              v.replyContent = reply.content
            } else {
              v.replyName = ''
              v.replyContent = '该评论已被删除'
            }
          }
        })
        this.comments = res
      } catch (e) {
        console.log(e)
      }
    },

    async getArticleDetail() {
      try {
        const res = await article.getArticleDetail({
          id: this.id
        })
        this.article = res
      } catch (e) {
        console.log(e)
      }
    },

    getLikeArticles() {
      this.likeArticles = JSON.parse(window.localStorage.getItem('LIKE_ARTICLES') || '[]')
    },

    getLikeComments() {
      this.likeComments = JSON.parse(window.localStorage.getItem('LIKE_COMMENTS') || '[]')
    }
  },

  created() {
    this.id = this.$route.params.id
    this.getLikeArticles()
    this.getLikeComments()
    this.getArticleDetail()
    this.getComments()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
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
    font-size: $title-font-size-large;
    font-weight: $font-weight-bold;
  
    @media (max-width: 479px) {
      font-size: $title-font-size-base;
    }
  }
  
  .author-wrapper {
    margin-top: 15px;
    font-size: $font-size-small;
  
    @media (max-width: 479px) {
      font-size: $font-size-minimum
    }
  
    .author-name {
      font-size: $font-size-medium;
      font-weight: $font-weight-bold;
  
      @media (max-width: 479px) {
        font-size: $font-size-small;
      }

      &:not(:first-child)::before {
        content: '、'
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
    transition: $theme-transition;

    @media (max-width: 479px) {
    box-shadow: none;
    background-color: var(--app-background-color);
  }
  }

  .split-line {
    margin: 20px 0;

    @media (max-width: 479px) {
      margin: 10px 0;
    }
  }
}

.comment-container {
  margin-top: 20px;

  .content {
    padding-top: 5px;
  }

  @media (max-width: 479px) {
    margin-top: 0;

    .content {
      padding-top: 0;
    }
  }
}

.like-wrapper {
  position: fixed;
  right: 0;
  bottom: 16%;
  z-index: $index-popper;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .14);

  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 42px;
    height: 42px;
    border: 1px solid var(--tag-color);
    background-color: var(--app-background-color);
    cursor: pointer;

    &:not(:last-child) {
      border-bottom: none;
    }

    &:hover {
      >i {
        color: var(--theme-active);
      }
    }

    .count {
      position: absolute;
      top: 0;
      left: 0;
      padding: 0 5px;
      font-size: $font-size-small;
      border-radius: 8px;
      transform: translate(-50%, -50%);
      background-color: var(--tag-color);
    }

    >i {
      font-size: $font-size-extra-large;
      transition: all .15s linear;
    }

    .is-like {
      color: var(--theme-active);
    }
  }
}
</style>