<template>
  <header class="container">
    <i class="header-logo">smile</i>
    <nav class="nav-wrapper">
      <ul class="nav-list">
        <li class="nav-list-item" v-for="(item, index) in navList" :key="index">
          <router-link active-class="nav-active" class="nav-link" tag="a" :to="item.link">{{item.name}}</router-link>
          <span class="nav-dot"></span>
        </li>
      </ul>
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
      navList
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  height: 160px;
  margin: 0 auto;

  @media (max-width: 1399px) and (min-width: 480px) {
    width: calc(100% - 85px - 85px);
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
        background-color: #2821fc;
      }

      &:hover ~ .nav-dot {
        background-color: #2821fc;
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
</style>
