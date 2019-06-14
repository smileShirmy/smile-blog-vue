<template>
  <div>
    <carousel class="carousel-container">
      <carousel-item v-for="item in 4" :key="item">
        <carousel-card></carousel-card>
      </carousel-item>
    </Carousel>
    <section class="article-wrapper">
      <article-list></article-list>
    </section>
  </div>
</template>

<script>
import Carousel from '@/components/base/carousel/carousel'
import CarouselItem from '@/components/base/carousel/carousel-item'
import CarouselCard from '@/components/layout/carousel-card/carousel-card'
import ArticleList from '@/components/layout/article-list/article-list'

export default {
  components: {
    Carousel,
    CarouselItem,
    CarouselCard,
    ArticleList,
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.carousel-container {
  height: calc(100vh - 245px);
  
  @media (max-width: 1023px) {
    margin-top: -160px;
    height: 100vh;
  }

  @media (max-width: 479px) {
    margin-top: -100px;
  }
}

.article-wrapper {
  position: relative;
  width: 100%;
  margin-top: -10vh;
}
</style>
