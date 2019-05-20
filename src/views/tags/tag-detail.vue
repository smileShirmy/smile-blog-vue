<template>
  <div class="tags-detail-container">
    <header class="tag-header">
      <div class="tag-content">
        <h1 class="title">Peotry</h1>
        <div class="posts-number">
          <i class="icon icon-tag"></i>
          <span>10 posts</span>
        </div>
        <p class="desc">Enean malesuada imperdiet orci nec euismod. Vivamus posuere sapien ac congue posuere. Sed ut mattis massa. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
      </div>
    </header>
    <article class="article-list">
      <article-list></article-list>
    </article>
  </div>
</template>

<script>
import ArticleList from '@/components/article-list/article-list'

export default {
  components: {
    ArticleList
  }
}
</script>

<style lang="scss" scoped>
@import '@/common/scss/variable.scss';
@import '@/common/scss/mixin.scss';

.tag-header {
  @include cover;
  width: calc(100% - 85px - 85px);
  height: 100%;
  margin: 0 auto;
  padding: 10vh 5% 17vh;
  color: #fff;
  font-weight: $--font-weight-bold;
  border-radius: 5px;
  background: url(../../common/image/lighthouse.jpeg) no-repeat center center;
  background-size: cover;
  box-sizing: border-box;

  @media (max-width: 1399px) {
    width: 100%;
    border-radius: 0;
  }

  .tag-content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .title {
      margin: 5px 0 25px;
      font-size: $--title-font-size-maximum;
      text-align: center;

      @media (max-width: 1023px) {
        font-size: $--title-font-size-extra-large;
      }

      @media (max-width: 479px) {
        margin: 3px 0 15px;
        font-size: $--title-font-size-medium;
      }
    }

    .posts-number {
      display: flex;
      align-items: center;
      margin: 0 auto;

      .icon-tag {
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

    .desc {
      max-width: 750px;
      margin: 3vh auto 0;
      padding: 0 50px;
      font-size: $--title-font-size-base;
      text-align: center;

      @media (max-width: 479px) {
        padding: 0 15px;
        font-size: $--font-size-medium;
      }
    }
  }
}

.article-list {
  position: relative;
  margin-top: -10vh;
}
</style>
