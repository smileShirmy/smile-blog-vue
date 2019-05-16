<template>
  <div class="card-container">
    <div class="card-image"></div>
    <div class="feature-wrapper">
      <article class="feature-content">
        <div class="feature-tag">JavaScript</div>
        <h2 class="feature-text">
          <a>
            I think it's the responsibility of a designer to try to break rules and barriers
            <span
              class="feature-dot"
            ></span>
          </a>
        </h2>
        <span class="feature-author">
          by&nbsp;
          <a href>西麦</a>、
          <a href>qiushiming</a>
          <time datetime="2018-5-14">
            &nbsp;a year
            ago
          </time>
        </span>
      </article>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/common/scss/variable.scss";

.card-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 85px;
  box-sizing: border-box;

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
    padding: 0 12% 10vh 45px;
    box-sizing: border-box;
  }
}

.feature-text {
  margin: 20px 0 25px;
  font-size: $--title-font-size-extra-large;
  font-weight: $--font-weight-bold;
  line-height: 1.2;

  a {
    position: relative;
    cursor: pointer;

    &:hover {
      .feature-dot {
        background-color: #2821fc !important;
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
    transition: all 0.25s ease;
  }
}

.feature-author {
  font-family: sans-serif;
  font-size: $--font-size-base;
  font-weight: $--font-weight-primary;

  a {
    font-family: "noto-sans";
    font-size: $--font-size-large;
    font-weight: $--font-weight-bold;
    cursor: pointer;
  }
}

@media (min-width: 1024px) and (max-width: 1399px) {
  .card-container {
    padding: 0;

    .card-image {
      border-radius: 0 5px 5px 0;
    }
  }

  .feature-dot {
    right: -14px;
    width: 10px;
    height: 10px;
    margin-top: 10px;
  }
}

@media (max-width: 1199px) {
  .feature-text {
    font-size: $--title-font-size-large;
  }
}

@media (max-width: 1023px) {
  .card-container {
    position: relative;
    display: block;
    padding: 0;

    .card-image {
      width: 100%;
      border-radius: 0;
    }

    .feature-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      padding: 0 0 10vh 0;
      background: rgba(0, 0, 0, .3);
      z-index: $--index-normal;
    }

    .feature-content {
      padding: 60px 18% 60px 123px;
      color: #fff;

      a {
        color: #fff;

        &:hover {
          .feature-dot {
            background-color: transparent !important;
          }
        }
      }
    }
  }

  .feature-text {
    font-size: $--title-font-size-extra-large;
  }

  .feature-author {
    font-size: $--font-size-base;

    a {
      font-size: $--font-size-base;
    }
  }
}

@media (max-width: 767px) {
  .card-container {

    .feature-content {
      padding: 60px 18% 60px 85px;
    }
  }

  .feature-text {
    margin: 15px 0 20px;
    font-size: $--title-font-size-large;
  }
}

@media (max-width: 479px) {
  .card-container {

    .feature-content {
      padding: 30px 38px;
    }
  }

  .feature-text {
    font-size: $--title-font-size-medium;
  }
}
</style>
