<template>
  <div class="about-container">
    <split-line
      :icon="'about'"
      :desc="'我们'"
    ></split-line>
    <ul class="author-list">
      <li
        class="author-item"
        v-for="author in authorList"
        :key="author.id"
        @click="showProfile(author.id)"
      >
        <div class="author-avatar" :style="{backgroundImage: `url(${author.avatar}?${Date.now()})`}"></div>
        <div class="author-info-wrapper">
          <h2 class="author-name">{{author.name}}</h2>
          <div class="social-wrapper">
            <a class="social-item icon icon-mail" :href="'mailto:' + author.email" @click.stop></a>
          </div>
          <div class="author-social"></div>
          <p class="author-desc">{{author.description}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import SplitLine from '@/components/base/split-line/split-line'
import author from '@/services/models/author'

export default {
  components: {
    SplitLine
  },

  data() {
    return {
      authorList: []
    }
  },

  methods: {
    showProfile(id) {
      this.$router.push({
        path: `/about/${id}`
      })
    },

    async getAuthors() {
      try {
        const res = await author.getAuthors()
        this.authorList = res
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e)
      }
    }
  },

  created() {
    this.getAuthors()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/mixin.scss';

.about-container {
  @include container;
  min-height: 450px;
}

.author-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;

  .author-item {
    @include noCover;
    box-sizing: border-box;
    flex: 1 0 25%;
    min-width: 290px;
    margin: 15px;
    padding-bottom: 40px;
    border-radius: 20px;
    overflow: hidden;
    transition: all .25s ease-in-out;
    cursor: pointer;

    &:hover {
      transform: translateY(-4px);
    }

    .author-avatar {
      display: block;
      width: 100%;
      height: 250px;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
    }

    .author-info-wrapper {
      box-sizing: border-box;
      padding: 0 30px;

      .social-wrapper {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;

        .social-item {
          font-size: $title-font-size-base;
          margin-right: 20px;
          transition: color .25s ease-in-out;
          cursor: pointer;

          &:last-child {
            margin-right: 0;
          }

          &:hover {
            color: var(--theme-active);
          }

          @media (max-width: 479px) {
            font-size: $title-font-size-small;
          }
        }
      }

      .author-name {
        font-size: $title-font-size-medium;
        font-weight: $font-weight-bold;
        margin: 15px 0;

        @media (max-width: 479px) {
          font-size: $title-font-size-base;
        }
      }

      .author-desc {
        padding: 15px 0;

        @media (max-width: 479px) {
          font-size: $font-size-base;
        }
      }
    }
  }
}



</style>
