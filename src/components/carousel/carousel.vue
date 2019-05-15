<template>
  <div
    class="carousel-container"
    @mouseenter.stop="handleMouseEnter"
    @mouseleave.stop="handleMouseLeave"
  >
    <div :style="{ height: height }" class="carousel-wrapper">
      <button
        class="carousel-btn left-btn"
        @click="throttledArrowClick(activeIndex - 1)"
      >left</button>
      <button
        class="carousel-btn right-btn"
        @click="throttledArrowClick(activeIndex + 1)"
      >right</button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { throttle } from "throttle-debounce";
import { on, off } from "@/common/js/dom";

export default {
  name: "Carousel",

  props: {
    initialIndex: {
      type: Number,
      default: 0
    },
    height: String,
    autoplay: {
      type: Boolean,
      defualt: false
    },
    autoplaySpeed: {
      type: Number,
      default: 3000
    },
    loop: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      timer: null,
      items: [],
      activeIndex: -1
    };
  },

  computed: {},

  watch: {
    items(val) {
      if (val.length > 0) this.setActiveItem(this.initialIndex);
    },

    activeIndex(val, oldVal) {
      this.resetItemPosition(oldVal);
      this.$emit("change", val, oldVal);
    },

    autoplay(val) {
      val ? this.startTimer() : this.pauseTimer();
    },

    loop() {
      this.setActiveItem(this.activeIndex);
    }
  },

  methods: {
    handleMouseEnter() {
      this.pauseTimer();
    },

    handleMouseLeave() {
      this.startTimer();
    },

    updateItems() {
      this.items = this.$children.filter(
        child => child.$options.name === "CarouselItem"
      );
    },

    playSlides() {
      if (this.activeIndex < this.items.length - 1) {
        this.activeIndex++;
      } else if (this.loop) {
        this.activeIndex = 0;
      }
    },

    startTimer() {
      if (this.interval <= 0 || !this.autoplay || this.timer) return;
      this.timer = setInterval(this.playSlides, this.autoplaySpeed);
    },

    pauseTimer() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    },

    handleResize() {},

    setActiveItem(index) {
      let length = this.items.length;
      const oldIndex = this.activeIndex;
      if (index < 0) {
        this.activeIndex = this.loop ? length - 1 : 0;
      } else if (index >= length) {
        this.activeIndex = this.loop ? 0 : length - 1;
      } else {
        this.activeIndex = index;
      }
      if (oldIndex === this.activeIndex) {
        this.resetItemPosition(oldIndex);
      }
    },

    resetItemPosition(oldIndex) {
      this.items.forEach((item, index) => {
        item.translateItem(index, this.activeIndex, oldIndex);
      });
    }
  },

  created() {
    this.throttledArrowClick = throttle(300, true, index => {
      this.setActiveItem(index);
    });
  },

  mounted() {
    this.updateItems();
    this.$nextTick(() => {
      on(window, "resize", this.handleResize);
      if (this.initialIndex < this.items.length && this.initialIndex >= 0) {
        this.activeIndex = this.initialIndex;
      }
      this.startTimer();
    });
  },

  beforeDestroy() {
    off(window, "resize", this.handleResize);
    this.pauseTimer();
  }
};
</script>

<style lang="scss" scoped>
@import "@/common/scss/variable.scss";

.caoursel-container {
  position: relative;
  width: 100%;
  position: relative;
}

.carousel-wrapper {
  position: relative;
  display: block;
  height: 300px;
  overflow: hidden;
}

.carousel-btn {
  position: absolute;
  z-index: $--index-normal;
}

.left-btn {
  left: 0;
}

.right-btn {
  right: 0;
}
</style>
