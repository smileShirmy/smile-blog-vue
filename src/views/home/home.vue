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
import Carousel from '@/components/carousel/carousel'
import CarouselItem from '@/components/carousel/carousel-item'
import CarouselCard from '@/components/carousel-card/carousel-card'
import ArticleList from '@/components/article-list/article-list'

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
@import "@/common/scss/variable.scss";

.carousel-container {
  height: calc(100vh - 245px);
  
  @media (max-width: 1023px) {
    height: 100vh;
  }
}

.article-wrapper {
  position: relative;
  width: 100%;
  margin-top: -10vh;
}
</style>
