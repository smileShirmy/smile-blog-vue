<template>
  <div class="about-container">
    <split-line :icon="'about'" :desc="'我们'"></split-line>
    <ul class="author-list">
      <li class="author-item" v-for="author in authorList" :key="author.id">
        <div class="author-avatar"></div>
        <div class="author-info-wrapper">
          <h2 class="author-name">{{author.name}}</h2>
          <div v-if="author.social" class="social-wrapper">
            <a v-for="social in author.social" :key="social.type" :class="'social-item icon icon-' + social.type"></a>
          </div>
          <div class="author-social"></div>
          <p class="author-desc">{{author.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import SplitLine from '@/components/split-line/split-line'

const authorList = [
  {
    id: 1,
    name: 'name1',
    desc: 'Non dolere, inquam, istud quam vim habeat postea viderouid ei reliquisti, nisi te, quoquo modo loqueretur, intellegere, quid diceret.',
    social: [
      {
        type: 'site',
        content: '',
      },
      {
        type: 'mail',
        content: '',
      },
      {
        type: 'wechat',
        content: '',
      },
      {
        type: 'qq',
        content: '',
      },
      {
        type: 'weibo',
        content: '',
      },
      {
        type: 'facebook',
        content: '',
      },
      {
        type: 'github',
        content: '',
      }
    ]
  },
  {
    id: 2,
    name: 'name1',
    desc: 'Non dolere, inquam, istud quam vim habeat postea viderouid ei reliquisti, nisi te, quoquo modo loqueretur, intellegere, quid diceret.',
  },
  {
    id: 3,
    name: 'name1',
    desc: 'Non dolere, inquam, istud quam vim habeat postea viderouid ei reliquisti, nisi te, quoquo modo loqueretur, intellegere, quid diceret.',
  },
  {
    id: 4,
    name: 'name1',
    desc: 'Non dolere, inquam, istud quam vim habeat postea viderouid ei reliquisti, nisi te, quoquo modo loqueretur, intellegere, quid diceret.',
  },
  {
    id: 5,
    name: 'name1',
    desc: 'Non dolere, inquam, istud quam vim habeat postea viderouid ei reliquisti, nisi te, quoquo modo loqueretur, intellegere, quid diceret.',
  },
]

export default {
  components: {
    SplitLine
  },

  data() {
    return {
      authorList
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/common/scss/variable.scss';
@import '@/common/scss/mixin.scss';
@import "@/common/scss/animation.scss";

.about-container {
  @include container;
  animation: slideTop .6s ease-in-out;
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
      background: url(../../common/image/lighthouse.jpeg) no-repeat center center;
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
          font-size: $--title-font-size-base;
          margin-right: 20px;

          &:last-child {
            margin-right: 0;
          }

          &:hover {
            color: $--theme-active;
          }

          @media (max-width: 479px) {
            font-size: $--title-font-size-small;
          }
        }
      }

      .author-name {
        font-size: $--title-font-size-medium;
        font-weight: $--font-weight-bold;
        margin: 15px 0;

        @media (max-width: 479px) {
          font-size: $--title-font-size-base;
        }
      }

      .author-desc {
        padding: 15px 0;

        @media (max-width: 479px) {
          font-size: $--font-size-base;
        }
      }
    }
  }
}



</style>
