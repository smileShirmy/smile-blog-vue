<template>
  <nav class="mobile-nav-container">
    <div
      class="mobile-nav-btn"
      :class="{'is-active': isShowMobileNav, homeMobileClass}"
      @click="isShowMobileNav = !isShowMobileNav"
    >
      <span class="mobile-nav-inner"></span>
    </div>
    <ul class="nav-list" v-if="isShowMobileNav">
      <li class="nav-list-item" v-for="(item, index) in navList" :key="index">
        <router-link
          active-class="nav-active"
          class="nav-link"
          tag="a"
          :to="item.link"
        >{{item.name}}</router-link>
        <span class="nav-dot"></span>
      </li>
      <li class="nav-list-item">
        <i class="icon icon-search"></i>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    navList: Array,
    homeMobileClass: String
  },

  data() {
    return {
      isShowMobileNav: false
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/common/scss/variable.scss";
@import "@/common/scss/mixin.scss";

.mobile-nav-container {
  position: relative;
  display: none;

  @media (max-width: 1023px) {
    display: inline-block;
  }
}

.mobile-nav-btn {
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
      opacity 0s linear, color .1s linear;

    &::before {
      content: "";
      display: block;
      position: absolute;
      top: -10px;
      width: 30px;
      height: 4px;
      background-color: $--font-color-primary;
      transition: bottom 0.08s 0s ease-out, top 0.08s 0s ease-out,
        opacity 0s linear, color .1s linear;
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

.nav-list {
  box-sizing: border-box;
  position: absolute;
  top: 40px;
  right: -10px;
  width: 160px;
  padding: 20px 28px 20px 0;
  border-radius: 4px;
  background: rgba(0, 0, 0, .1);

  .nav-list-item {
    position: relative;
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    font-weight: $--font-weight-bold;

    &:first-child {
      margin-top: 0;
    }

    a {
      cursor: pointer;
    }

    .nav-link {
      cursor: pointer;

      &:hover ~ .nav-dot {
        background-color: $--nav-dot-color;
      }
    }

    .nav-active {
      & ~ .nav-dot {
        background-color: $--nav-active;
      }

      &:hover ~ .nav-dot {
        background-color: $--nav-active;
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

    .icon-search {
      font-size: $--font-size-large;
      cursor: pointer;
      transition: $--theme-transition;

      &:hover {
        color: $--nav-active;
      }
    }
  }
}

@media (max-width: 1023px) {
  .home-mobile-class {
    .mobile-nav-inner {
      background-color: #fff;

      &::before,
      &::after {
        background-color: #fff;
      }
    }

    .nav-list {
      color: #fff;

      .nav-link {
        color: #fff;
        transition: $--theme-transition;
      }
    }
  }
}
</style>
