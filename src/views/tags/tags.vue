<template>
  <div class="tag-container">
    <split-line :icon="'cloud'" :desc="'标签'"></split-line>
    <div class="tag-wrapper">
      <tag-list :tagList="tagList"></tag-list>
    </div>
    <split-line :icon="'tag'" :desc="'分类'"></split-line>
    <ul class="category-list">
      <router-link tag="li" class="category-item" v-for="category in categories" :key="category.id" :to="'/tags/' + category.id">
        <div class="category-wrapper">
          <div class="category-image"></div>
          <h2 class="title" :class="{center: !category.desc}">{{category.name}}</h2>
          <p v-if="category.desc" class="desc">{{category.desc}}</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import SplitLine from '@/components/base/split-line/split-line'
import TagList from '@/components/base/tag-list/tag-list'

const categories = [
  {
    id: 1,
    name: 'Poetry',
    desc: 'Donec elementum ligula eu sapien consequat eleifend. Donec nec dolor erat, condimentum sagittis sem. Praesent porttitor porttitor risus, dapibus rutrum ipsum gravida et. Integer lectus nisi, facilisis sit.'
  },
  {
    id: 2,
    name: 'Leterature',
    desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Donec elementum ligula eu sapien consequat eleifend.'
  },
  {
    id: 3,
    name: 'Creativity',
    desc: '',
  },
  {
    id: 4,
    name: 'Creativity',
    desc: '',
  },
  {
    id: 6,
    name: 'Creativity',
    desc: '',
  },
  {
    id: 7,
    name: 'Creativity',
    desc: '',
  },
  {
    id: 8,
    name: 'Creativity',
    desc: '',
  },
]

const tagList = [
  {
    id: 1,
    name: 'tag1'
  },
  {
    id: 2,
    name: 'tag1'
  },
  {
    id: 3,
    name: 'tag1'
  },
  {
    id: 4,
    name: 'tag1'
  },
  {
    id: 5,
    name: 'tag1'
  },
]

export default {
  components: {
    SplitLine,
    TagList
  },

  data() {
    return {
      categories,
      tagList
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/mixin.scss';

.tag-container {
  @include container;
}

.tag-wrapper {
  margin: 10px 0;
}

.category-list {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 0 -15px;

  .category-item {
    flex: 1 auto;
    position: relative;
    margin: 15px;
    border-radius: 20px;
    overflow: hidden;
    transition: all .25s ease-in-out;
    cursor: pointer;

    &:hover {
      transform: translateY(-4px);
    }

    @media (max-width: 470px) {
      margin: 15px 15px 0;
    }
  }
}

.category-wrapper {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  color: #fff;

  .category-image {
    @include cover;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(../../assets/image/lighthouse.jpeg) no-repeat center center;
    background-size: cover;
    z-index: -1;
  }

  .title {
    padding: 15px 30px;
    font-size: $title-font-size-medium;
    font-weight: $font-weight-bold;
  }

  .center {
    text-align: center;
  }

  .desc {
    box-sizing: border-box;
    max-width: 450px;
    padding: 0 60px 3vh 30px;
  }
}
</style>
