<template>
  <div>
    <div style="width: 100%;">
      <carousel>
        <carousel-item v-for="item in 4" :key="item">
          <div class="demo-carousel">{{item}}</div>
        </carousel-item>
      </Carousel>
    </div>
     <!-- <ul>
      <li>
        <div class="feature-image"></div>
        <article class="feature-wrapper">
          <h2>
            <a href>I think it's the responsibility of a designer to try to break rules and barriers</a>
          </h2>
          <span>
            by&nbsp;
            <a href>西麦</a>、&nbsp;
            <a href>qiushiming</a>
            <time datetime="2018-5-14">&nbsp;a year ago</time>
          </span>
        </article>
      </li>
    </ul> -->
  </div>
</template>

<script>
import Carousel from '@/components/carousel/carousel'
import CarouselItem from '@/components/carousel/carousel-item'

export default {
  components: {
    Carousel,
    CarouselItem
  }
}
</script>

<style lang="scss" scoped>
// remove:
.demo-carousel {
  height: 300px;
  line-height: 300px;
  text-align: center;
  color: #fff;
  font-size: 20px;
  background: #506b9e;
}
</style>
