<template>
  <header class="profile-header" :style="{backgroundImage: coverUrl}" :class="coverUrl ? 'is-cover' : ''">
    <div class="profile-content">
      <slot name="header"></slot>
      <h1 class="title">{{name}}</h1>
      <slot name="info"></slot>
      <p v-if="desc" class="desc">{{desc}}</p>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    name: String,
    desc: String,
    coverUrl: String
  }
}
</script>

<style lang="scss" scoped>
@import '@/common/scss/variable.scss';
@import '@/common/scss/mixin.scss';

.is-cover {
  color: #fff;
  @include cover;
}

.profile-header {
  width: calc(100% - 85px - 85px);
  height: 100%;
  margin: 0 auto;
  padding: 5vh 5% 15vh;
  font-weight: $--font-weight-bold;
  border-radius: 5px;
  background: no-repeat center center;
  background-size: cover;
  box-sizing: border-box;

  @media (max-width: 1399px) {
    width: 100%;
    border-radius: 0;
  }

  .profile-content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .title {
      margin: 5px 0 25px;
      font-size: $--title-font-size-maximum;
      text-align: center;

      @media (max-width: 1023px) {
        font-size: $--title-font-size-extra-large;
      }

      @media (max-width: 479px) {
        margin: 3px 0 15px;
        font-size: $--title-font-size-medium;
      }
    }

    .desc {
      max-width: 750px;
      margin: 3vh auto 0;
      padding: 0 50px;
      font-size: $--title-font-size-base;
      text-align: center;

      @media (max-width: 479px) {
        padding: 0 15px;
        font-size: $--font-size-medium;
      }
    }
  }
}
</style>
