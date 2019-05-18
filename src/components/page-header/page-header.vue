<template>
  <header class="container" :class="homeMobileClass">
    <div class="header-logo">
      <switch-theme :size="'30px'"></switch-theme>
      <i class="logo">smile</i>
    </div>
    <nav class="nav-wrapper">
      <ul class="nav-list">
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
      <mobile-nav :navList="navList"></mobile-nav>
    </nav>
  </header>
</template>

<script>
import MobileNav from "./mobile-nav";
import SwitchTheme from '@/components/switch-theme/switch-theme'

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
  },
  {
    link: "messages",
    name: "留言墙"
  }
];

export default {
  components: {
    MobileNav,
    SwitchTheme
  },

  data() {
    return {
      navList
    };
  },

  computed: {
    homeMobileClass() {
      return this.$route.path.includes("home") ? "home-mobile-class" : "";
    }
  },
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

  @media (max-width: 479px) {
    height: 100px;
    padding: 0 35px;
  }
}

.header-logo {
  .logo {
    margin-left: 10px;
    font-size: $--title-font-size-medium;
    transition: $--theme-transition;
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
      transition: $--theme-transition;

      &:hover ~ .nav-dot {
        background-color: $--nav-dot-color;
      }
    }

    .nav-active {
      & ~ .nav-dot {
        background-color: $--theme-active;
      }

      &:hover ~ .nav-dot {
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
      transition: all .25s ease;
    }

    .icon-search {
      font-size: $--font-size-large;
      cursor: pointer;
      transition: $--theme-transition;

      &:hover {
        color: $--theme-active;
      }
    }
  }
}

@media (max-width: 1023px) {
  .nav-list {
    display: none;
  }
}

@media (max-width: 1023px) {
  .home-mobile-class {
    position: absolute;

    .header-logo {
      color: #fff;
    }
  }
}
</style>
