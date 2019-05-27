<template>
  <div class="profile-container">
    <detail-header :name="author.name" :desc="author.desc">
      <template v-slot:header>
        <div class="avatar"></div>
      </template>
      <template v-slot:info>
        <div v-if="author.social" class="social-wrapper">
          <a
            v-for="social in author.social"
            :key="social.type"
            :class="'social-item icon icon-' + social.type"
            @click.stop="showSocial(social.type)"
          ></a>
        </div>
      </template>
    </detail-header>
    <article class="article-list">
      <article-list></article-list>
    </article>
  </div>
</template>

<script>
import DetailHeader from "@/components/layout/detail-header/detail-header";
import ArticleList from "@/components/layout/article-list/article-list";

export default {
  components: {
    DetailHeader,
    ArticleList
  },

  data() {
    return {
      author: {
        id: 1,
        name: "Smile",
        desc:
          "Non dolere, inquam, istud quam vim habeat postea viderouid ei reliquisti, nisi te, quoquo modo loqueretur, intellegere, quid diceret.",
        social: [
          {
            type: "site",
            content: ""
          },
          {
            type: "mail",
            content: ""
          },
          {
            type: "wechat",
            content: ""
          },
          {
            type: "qq",
            content: ""
          },
          {
            type: "weibo",
            content: ""
          },
          {
            type: "facebook",
            content: ""
          },
          {
            type: "github",
            content: ""
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import '@/common/scss/variable.scss';

.avatar {
  width: 120px;
  height: 120px;
  margin: 0 auto 20px;
  border-radius: 26px;
  background: url(../../common/image/lighthouse.jpeg) no-repeat center center;
  background-size: cover;
}

.social-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .social-item {
    font-size: $--title-font-size-base;
    margin-right: 20px;
    transition: color 0.25s ease-in-out;
    cursor: pointer;

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

.article-list {
  position: relative;
  margin-top: -10vh;
}
</style>
