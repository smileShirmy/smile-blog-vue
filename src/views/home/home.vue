<template>
  <div>
    <carousel class="carousel-container">
      <carousel-item v-for="item in 4" :key="item">
        <carousel-card></carousel-card>
      </carousel-item>
    </Carousel>
  </div>
</template>

<script>
import Carousel from '@/components/carousel/carousel'
import CarouselItem from '@/components/carousel/carousel-item'
import CarouselCard from '@/components/carousel-card/carousel-card'

export default {
  components: {
    Carousel,
    CarouselItem,
    CarouselCard
  }
}
</script>

<style lang="scss" scoped>
.carousel-container {
  height: calc(100vh - 245px);
}
</style>
