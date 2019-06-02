<template>
  <div class="tags-detail-container">
    <detail-header :name="name" :desc="desc" :coverUrl="coverUrl">
      <template v-slot:info>
        <div class="posts-number">
          <i class="icon icon-post"></i>
          <span>10 posts</span>
        </div>
      </template>
    </detail-header>
    <article class="article-list">
      <article-list></article-list>
    </article>
  </div>
</template>

<script>
import ArticleList from '@/components/layout/article-list/article-list'
import DetailHeader from '@/components/layout/detail-header/detail-header'

export default {
  components: {
    ArticleList,
    DetailHeader
  },

  data() {
    return {
      name: 'JavaScript',
      desc: 'Enean malesuada imperdiet orci nec euismod. Vivamus posuere sapien ac congue posuere. Sed ut mattis massa. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
      coverUrl: 'https://resource.shirmy.me/lighthouse.jpeg'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';

.posts-number {
  display: flex;
  align-items: center;
  margin: 0 auto;

  .icon-post {
    font-size: $--title-font-size-base;
  }

  span {
    font-size: $--font-size-small;
    font-weight: $--font-weight-bold;
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
