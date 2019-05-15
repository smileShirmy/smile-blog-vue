<template>
  <div class="card-container">
    <div class="card-image"></div>
    <article class="feature-wrapper">
      <div class="feature-tag">JavaScript</div>
      <h2 class="feature-text">
        <a>I think it's the responsibility of a designer to try to break rules and barriers<span
            class="feature-dot"></span></a>
      </h2>
      <span class="feature-author">by&nbsp;<a href>西麦</a>、<a href>qiushiming</a><time datetime="2018-5-14">&nbsp;a year
          ago</time></span>
    </article>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '@/common/scss/variable.scss';

.card-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 85px;
  box-sizing: border-box;

  @media (min-width: 1024px) and (max-width:1399px) {
    padding: 0;
  }

  @media (max-width: 1023px) {
    padding: 0;
  }

  .card-image {
    width: calc(50% - 45px);
    height: 100%;
    border-radius: 5px;
    background: #2d9fff no-repeat center center;
    background-size: cover;
  }

  .feature-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    padding: 10vh 8% 10vh 45px;
    box-sizing: border-box;

    .feature-text {
      margin: 20px 0 25px 0;
      font-size: 54px;
      font-weight: $--font-weight-bold;
      line-height: 1.2;

      a {
        position: relative;
        cursor: pointer;

        &:hover {
          .feature-dot {
            background-color: #2821fc!important;
          }
        }
      }

      .feature-dot {
        display: inline-block;
        position: absolute;
        right: -14px;
        width: 12px;
        height: 12px;
        margin-top: 8px;
        border-radius: 50%;
        transition: all .25s ease;
        
        @media (min-width: 1024px) and (max-width:1199px) {
          right: -14px;
          width: 10px;
          height: 10px;
          margin-top: 10px;
        }
      }
    }

    .feature-author {
      font-family: sans-serif;
      font-weight: $--font-weight-primary;

      a {
        font-family: 'noto-sans';
        font-weight: $--font-weight-bold;
        cursor: pointer;
      }
    }
  }
}
</style>
