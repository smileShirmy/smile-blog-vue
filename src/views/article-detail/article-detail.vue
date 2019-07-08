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
    <div class="article-container">
      <div class="content">
        <div class="article-wrapper">
          <article class="article-markdown" v-html="markedCcontent"></article>
        </div>
        <split-line class="split-line" :icon="'recommend'" :desc="'相关推荐'"></split-line>
        <div class="recommend-wrapper">
          <recommend :articles="article.categoryArticles" @showRecommendDetail="onShowRecommendDetail"></recommend>
        </div>
        <!-- <split-line class="split-line" :icon="'message'" :desc="'评论'"></split-line>
        <div class="comment-wrapper">
          <comment></comment>
        </div> -->
      </div>
    </div>
    <div class="article-container comment-container">
      <div class="content">
        <split-line class="split-line" :icon="'message'" :desc="'评论'"></split-line>
        <div class="comment-wrapper">
          <comment :comments="comments" @createCommentSuccess="getComments" :articleId="parseInt(id)"></comment>
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
      comments: []
    }
  },

  computed: {
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
        console.log(this.comments)
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
    }
  },

  created() {
    this.id = this.$route.params.id
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
</style>