<template>
  <div>
    <div style="width: 100%;">
      <carousel>
        <carousel-item v-for="item in 4" :key="item">
          <carousel-card></carousel-card>
        </carousel-item>
      </Carousel>
    </div>
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
</style>
