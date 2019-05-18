<template>
  <div class="container">
    <div class="search-image"></div>
    <aside class="section-search">
      <div class="search-close" @click="closeSearch">
        <i class="icon icon-close"></i>
      </div>
      <div class="search-wrapper">
        <input class="search-input" type="text" placeholder="search...">
        <div class="search-result">为你找到 0 项结果</div>
        <ul class="result-list" v-show="resultList.length">
          <li class="result-item" v-for="result in resultList" :key="result.id">
            <time class="time" datetime="2018-5-17">{{result.time}}</time>
            <h4 class="title">{{result.title}}</h4>
          </li>
        </ul>
        <dl class="suggestion-wrapper">
          <dd class="suggestion-item">
            <tag-list :title="'标签'" :tagList="tagList"></tag-list>
          </dd>
          <dd class="suggestion-item">
            <tag-list :title="'作者'" :tagList="authorList"></tag-list>
          </dd>
        </dl>
      </div>
      <footer class="footer">
        <switch-theme :size="'18px'"></switch-theme>
        <span class="logo">Smile.</span>
        <span class="desc">#&nbsp;惟有文字&nbsp;长情陪伴&nbsp;#</span>
      </footer>
    </aside>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import TagList from './tag-list'
import SwitchTheme from '@/components/switch-theme/switch-theme'

const resultList = [
  {
    id: 1,
    time: "Published — May 17, 2018",
    title: "I think it's the responsibility of a designer to try to break rules and barriers"
  },
  {
    id: 2,
    time: "Published — May 17, 2018",
    title: "I think it's the responsibility of a designer to try to break rules and barriers"
  },
  {
    id: 3,
    time: "Published — May 17, 2018",
    title: "I think it's the responsibility of a designer to try to break rules and barriers"
  },
]

const tagList = [
  {
    id: 1,
    name: 'JavaScript',
  },
  {
    id: 2,
    name: 'JavaScript',
  },
  {
    id: 3,
    name: 'JavaScript',
  },
  {
    id: 4,
    name: 'JavaScript',
  },
  {
    id: 5,
    name: 'JavaScript',
  }
]

const authorList = [
  {
    id: 1,
    name: 'Smile',
  },
  {
    id: 2,
    name: 'qiushiming',
  }
]

export default {
  components: {
    TagList,
    SwitchTheme
  },

  data() {
    return {
      resultList,
      tagList,
      authorList,
    }
  },

  methods: {
    closeSearch() {
      this.setShowSearch(false)
    },

    ...mapMutations({
      setShowSearch: 'SET_SHOW_SEARCH'
    })
  },

  mounted() {
    document.body.style.overflow = 'hidden'
  },

  beforeDestroy() {
    document.body.style.overflow = 'visible'
  }
}
</script>

<style lang="scss" scoped>
@import "@/common/scss/variable.scss";

.container {
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: $--app-background-color;
  z-index: $--index-top;
}

.search-image {
  width: 40%;
  height: 100%;
  background: url(../../common/image/lighthouse.jpeg) no-repeat center center;
  background-size: cover;

  @media (max-width: 767px) {
    width: 0;
  }
}

.section-search {
  width: 60%;
  padding: 140px 5% 30px;
  box-sizing: border-box;
  overflow: auto;

  @media (max-width: 767px) {
    width: 100%;
    padding: 85px 85px 30px;
  }

  @media (max-width: 474px) {
    padding: 85px 35px 30px;
  }
}

.search-close {
  position: fixed;
  top: 40px;
  right: 40px;

  @media (max-width: 1023px) {
    top: 22px;
    right: 35px;
  }

  .icon-close {
    font-size: $--title-font-size-large;
    transition: $--theme-transition;
    cursor: pointer;
    
    &:hover {
      color: $--theme-active;
    }

    @media (max-width: 1023px) {
      font-size: $--title-font-size-medium;
    }
  }
}

.search-wrapper {
  min-height: calc(100vh - 260px);

  .search-input {
    width: 100%;
    height: 62px;
    color: $--font-color-primary;
    font-size: $--title-font-size-medium;
    font-weight: $--font-weight-bold;
    outline: none;
    border-width: 0 0 7px 0;
    border-style: solid;
    border-color: $--border-color;
    background-color: $--app-background-color;
    transition: none;

    &:focus {
      border-bottom-color: $--theme-active;
    }

    &::-webkit-input-placeholder {
      color: $--border-color;
    }

    @media (max-width: 747px) {
      font-size: $--title-font-size-small;
    }
  }

  .search-result {
    margin-top: 10px;
    font-size: $--font-size-small;
    font-weight: $--font-weight-bold;
  }
}

.result-list {
  .result-item {
    margin-top: 30px;

    .time {
      font-size: $--font-size-base;

      @media (max-width: 767px) {
        font-size: $--font-size-small;
      }
    }

    .title {
      font-size: $--title-font-size-base;
      font-weight: $--font-weight-bold;

      @media (max-width: 767px) {
        font-size: $--title-font-size-small;
      }
    }
  }
}

.suggestion-wrapper {
  margin: 60px 0;
  overflow: hidden;

  .suggestion-item {
    float: left;
    width: 50%;

    &:first-child {
      margin-top: 0;
    }

    @media (max-width: 1199px) {
      margin-top: 30px;
      width: 100%;
    }
  }
}

.footer {
  .logo {
    margin-left: 8px;
    color: $--font-color-dark;
  }

  .desc {
    margin-left: 20px;
  }
}
</style>
