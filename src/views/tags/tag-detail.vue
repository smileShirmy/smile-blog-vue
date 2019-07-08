<template>
  <div class="tags-detail-container">
    <detail-header :name="name" :description="description" :cover="cover">
      <template v-slot:info>
        <div class="posts-number">
          <i class="icon icon-post"></i>
          <span>{{articles.length}}&nbsp;posts</span>
        </div>
      </template>
    </detail-header>
    <article class="article-list">
      <article-list :articles="articles"></article-list>
    </article>
  </div>
</template>

<script>
import ArticleList from '@/components/layout/article-list/article-list'
import DetailHeader from '@/components/layout/detail-header/detail-header'
import article from '@/services/models/article'
import category from '@/services/models/category'

export default {
  components: {
    ArticleList,
    DetailHeader
  },

  data() {
    return {
      categoryId: 0,
      name: '',
      description: '',
      cover: '',
      articles: [],
    }
  },

  methods: {
    async getCategoryArticles() {
      if (!this.categoryId) {
        return
      }
      try {
        const res = await article.getArticles({
          categoryId: this.categoryId
        })
        this.articles = res
      } catch (e) {
        console.log(e)
      }
    },

    async getTagArticles() {
      if (!this.tagId) {
        return
      }
      try {
        const res = await article.getArticles({
          tagId: this.tagId
        })
        this.articles = res
      } catch (e) {
        console.log(e)
      }
    },

    async getCategory() {
      if (!this.categoryId) {
        return
      }
      try {
        const res = await category.getCategory(this.categoryId)
        this.name = res.name
        this.description = res.description
        this.cover = res.cover
      } catch (e) {
        console.log(e)
      }
    }
  },

  created() {
    // 标签
    if (this.$route.params.name !== 'categoryFlag') {
      this.name = this.$route.params.name
      this.cover = 'https://resource.shirmy.me/lighthouse.jpeg'
      this.tagId = this.$route.params.id
      this.getTagArticles()
    } else {
      this.categoryId = this.$route.params.id
      this.getCategoryArticles()
      this.getCategory()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.posts-number {
  display: flex;
  align-items: center;
  margin: 0 auto;

  .icon-post {
    font-size: $title-font-size-base;
  }

  span {
    font-size: $font-size-small;
    font-weight: $font-weight-bold;
    padding-left: 5px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
}

.article-list {
  position: relative;
  margin-top: -10vh;
}
</style>
