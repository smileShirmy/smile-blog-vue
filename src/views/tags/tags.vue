<template>
  <div class="tag-container">
    <ul class="tag-list">
      <li class="tag-item" v-for="tag in tagList" :key="tag.id">
        <div class="tag-wrapper">
          <div class="tag-image"></div>
          <h2 class="title" :class="{center: !tag.desc}">{{tag.name}}</h2>
          <p v-if="tag.desc" class="desc">{{tag.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
const tagList = [
  {
    id: 1,
    name: 'Peotry',
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

export default {
  data() {
    return {
      tagList
    }
  }  
}
</script>

<style lang="scss" scoped>
@import '@/common/scss/variable.scss';

.tag-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  z-index: $--index-normal;
  box-sizing: border-box;

  @media (min-width: 480px) {
    padding: 0 85px;
  }

  @media (max-width: 1023px) {
  }

  @media (max-width: 479px) {
    padding: 0 15px;
  }
}

.tag-list {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 0 -15px;

  .tag-item {
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

.tag-wrapper {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: rgba(0, 0, 0, .3);

  .tag-image {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(../../common/image/lighthouse.jpeg) no-repeat center center;
    background-size: cover;
    z-index: -1;

    &::before {
      display: block;
      width: 100%;
      height: 100%;
      content: '';
      opacity: .3;
      background-color: #394245;
      background-image: linear-gradient(234deg, #394245 0%,#000 100%);
    }
  }

  .title {
    padding: 15px 30px;
    font-size: $--title-font-size-medium;
    font-weight: $--font-weight-bold;
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
