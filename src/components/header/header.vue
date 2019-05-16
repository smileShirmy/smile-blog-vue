<template>
  <header class="container">
    <div class="header-logo">
      <i class="icon" :class="isLight ? 'icon-dark' : 'icon-light'" @click="switchTheme"></i>
      <i class="logo">smile</i>
    </div>
    <nav class="nav-wrapper">
      <ul class="nav-list">
        <li class="nav-list-item" v-for="(item, index) in navList" :key="index">
          <router-link active-class="nav-active" class="nav-link" tag="a" :to="item.link">{{item.name}}</router-link>
          <span class="nav-dot"></span>
        </li>
        <li class="nav-list-item nav-search"></li>
      </ul>
      <div class="mobile-nav-btn" :class="{'is-active': isShowMobileNav}" @click="isShowMobileNav = !isShowMobileNav">
        <span class="mobile-nav-inner"></span>
      </div>
    </nav>
  </header>
</template>

<script>
const navList = [
  {
    link: "home",
    name: "首页"
  },
  {
    link: "archive",
    name: "归档"
  },
  {
    link: "tags",
    name: "标签"
  },
  {
    link: "about",
    name: "关于"
  }
];

export default {
  data() {
    return {
      navList,
      isShowMobileNav: false,
      isLight: true
    };
  },

  methods: {
    switchTheme() {
      this.isLight = !this.isLight

      const theme = this.isLight ? 'light' : 'dark'
      document.body.id = theme
    }
  },

  created() {
    document.body.id = 'light'
  }
};
</script>

<style lang="scss" scoped>
@import "@/common/scss/variable.scss";

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 160px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  z-index: $--index-normal;
  box-sizing: border-box;

  @media (max-width: 1399px) and (min-width: 480px) {
    padding: 0 85px;
  }

  @media (max-width: 1023px) {
    position: fixed;
  }

  @media (max-width: 479px) {
    height: 100px;
    padding: 0 35px;
  }
}

.header-logo {
  .icon {
    margin-right: 10px;
    font-size: $--title-font-size-medium;
    cursor: pointer;
  }

  .logo {
    font-size: $--title-font-size-medium;
  }

  @media (max-width: 1024px) {
    color: #fff;
  }
}

.nav-list {
  display: flex;
  justify-content: flex-start;

  .nav-list-item {
    position: relative;
    margin-left: 24px;
    font-weight: bold;

    &:first-child {
      margin-left: 0;
    }

    .nav-link {
      cursor: pointer;

      &:hover ~ .nav-dot {
        background-color: #d3d5dc;
      }
    }

    .nav-active {
      & ~ .nav-dot {
        background-color: var(--nav-active);
      }

      &:hover ~ .nav-dot {
        background-color: var(--nav-active);
      }
    }

    .nav-dot {
      position: absolute;
      top: -4px;
      right: -10px;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      transition: all .25s ease;
    }
  }

  .nav-search {
    box-sizing: border-box;
    position: relative;
    width: 18px;
    height: 18px;
    border: 4px solid var(--font-color-primary);
    border-radius: 50%;
    transition: all .25s ease;
    cursor: pointer;

    &::after {
      content: "";
      position: absolute;
      width: 8px;
      height: 4px;
      background: var(--font-color-primary);
      top: 110%;
      right: -8px;
      transform: rotate(45deg);
      transition: all .25s ease;
    }

    &:hover {
      border-color: var(--nav-active);

      &::after {
        background: var(--nav-active);
      }
    }
  }
}

.mobile-nav-btn {
  position: relative;
  display: none;
  width: 30px;
  height: 24px;
  cursor: pointer;

  .mobile-nav-inner {
    position: absolute;
    top: 10px;
    width: 30px;
    height: 4px;
    background-color: var(--font-color-primary);
    transition: bottom .08s 0s ease-out, top .08s 0s ease-out, opacity 0s linear;

    &::before {
      content: "";
      display: block;
      position: absolute;
      top: -10px;
      width: 30px;
      height: 4px;
      background-color: var(--font-color-primary);
      transition: bottom .08s 0s ease-out, top .08s 0s ease-out, opacity 0s linear;
    }

    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 10px;
      width: 30px;
      height: 4px;
      background-color: var(--font-color-primary);
      transition: bottom .08s 0s ease-out, top .08s 0s ease-out, opacity 0s linear;
    }
  }

  @media (max-width: 1023px) {
    .mobile-nav-inner {
      background-color: #fff;
      
      &::before,
      &::after {
        background-color: #fff;
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

@media (max-width: 1023px) {
  .nav-list {
    display: none;
  }

  .mobile-nav-btn {
    display: inline-block;
  }
}
</style>
