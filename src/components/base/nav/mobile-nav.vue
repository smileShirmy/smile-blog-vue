<template>
  <nav class="mobile-nav-container" v-click-outside="hide">
    <div class="search-wrapper" @click="showSearch">
      <i class="icon icon-search"></i>
    </div>
    <div
      class="mobile-nav-btn"
      :class="{'is-active': isShowMobileNav}"
      @click="isShowMobileNav = !isShowMobileNav"
    >
      <span class="mobile-nav-inner"></span>
    </div>
    <transition name="slide-right">
      <div class="nav-list-wrapper" v-if="isShowMobileNav">
        <div class="close-btn" @click="isShowMobileNav = false">
          <i class="icon icon-close"></i>
        </div>
        <ul class="nav-list">
          <li class="nav-list-item" v-for="(item, index) in navList" :key="index">
            <router-link
              active-class="nav-active"
              class="nav-link"
              tag="a"
              :to="item.link"
              @click.native="isShowMobileNav = false"
            >
              {{item.name}}
              <span class="nav-dot"></span>
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script>
import { mapMutations } from "vuex";
import ClickOutside from "@/common/js/click-outside";

export default {
  props: {
    navList: Array
  },

  data() {
    return {
      isShowMobileNav: false
    };
  },

  methods: {
    showSearch() {
      this.setShowSearch(true);
    },

    hide() {
      this.isShowMobileNav = false
    },

    ...mapMutations({
      setShowSearch: "SET_SHOW_SEARCH"
    })
  },

  mounted() {},

  directives: {
    ClickOutside
  }
};
</script>

<style lang="scss" scoped>
@import "@/common/scss/variable.scss";
@import "@/common/scss/mixin.scss";
@import "@/common/scss/animation.scss";

.mobile-nav-container {
  display: none;
  margin-top: 14px;

  @media (max-width: 1023px) {
    display: inline-block;
  }
}

.search-wrapper {
  @include extend-click;
  float: left;
  margin-right: 20px;
  cursor: pointer;

  .icon-search {
    font-size: $--font-size-extra-large;
    transition: $--theme-transition;
  }
}

.mobile-nav-btn {
  float: left;
  @include extend-click;
  position: relative;
  width: 30px;
  height: 24px;
  cursor: pointer;

  .mobile-nav-inner {
    position: absolute;
    top: 10px;
    width: 30px;
    height: 4px;
    background-color: $--font-color-primary;
    transition: bottom 0.08s 0s ease-out, top 0.08s 0s ease-out,
      opacity 0s linear, color 0.1s linear;

    &::before {
      content: "";
      display: block;
      position: absolute;
      top: -10px;
      width: 30px;
      height: 4px;
      background-color: $--font-color-primary;
      transition: bottom 0.08s 0s ease-out, top 0.08s 0s ease-out,
        opacity 0s linear, color 0.1s linear;
    }

    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 10px;
      width: 30px;
      height: 4px;
      background-color: $--font-color-primary;
      transition: bottom 0.08s 0s ease-out, top 0.08s 0s ease-out,
        opacity 0s linear;
    }
  }

  @media (max-width: 1023px) {
    .mobile-nav-inner {
      background-color: $--font-color-primary;

      &::before,
      &::after {
        background-color: $--font-color-primary;
      }
    }
  }
}

.is-active {
  .mobile-nav-inner {
    &::before {
      top: 0;
    }

    &::after {
      top: 0;
    }
  }
}

.nav-list-wrapper {
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  padding: 40px 30px 20px;
  border-bottom-left-radius: 5px;
  background: $--app-background-color-light;
  box-shadow: 0 2px 24px 5px rgba(0, 0, 0, 0.1);
  z-index: $--index-top;
}

.close-btn {
  position: absolute;
  top: 16px;
  right: 20px;

  .icon-close {
    font-size: $--font-size-large;
    cursor: pointer;

    &:hover {
      color: $--theme-active;
    }
  }
}

.nav-list {
  .nav-list-item {
    display: flex;
    justify-content: flex-start;
    margin-top: 16px;
    font-weight: $--font-weight-bold;

    &:first-child {
      margin-top: 0;
    }

    .nav-link {
      position: relative;

      &:hover .nav-dot {
        background-color: $--nav-dot-color;
      }
    }

    .nav-active {
      & .nav-dot {
        background-color: $--theme-active;
      }

      &:hover .nav-dot {
        background-color: $--theme-active;
      }
    }

    .nav-dot {
      position: absolute;
      top: -4px;
      right: -10px;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      transition: all 0.25s ease;
    }
  }
}

@media (max-width: 1023px) {
  .home-mobile-class {
    .search-wrapper {
      .icon-search {
        color: #fff;
      }
    }

    .mobile-nav-inner {
      background-color: #fff;

      &::before,
      &::after {
        background-color: #fff;
      }
    }
  }
}
</style>
