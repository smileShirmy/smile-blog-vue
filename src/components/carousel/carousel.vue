<template>
  <div class="carousel-container">
    <ul>
      <li>
        <div class="feature-image"></div>
        <article class="feature-wrapper">
          <h2>
            <a href>I think it's the responsibility of a designer to try to break rules and barriers</a>
          </h2>
          <span>
            by&nbsp;
            <a href>西麦</a>、&nbsp;
            <a href>qiushiming</a>
            <time datetime="2018-5-14">&nbsp;a year ago</time>
          </span>
        </article>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.caoursel-container {
  position: relative;
  width: 100%;
}

.feature-image {
  position: absolute;
  z-index: -3;
  top: 0;
  right: 0;
  bottom: 0;
  left: 85px;
  overflow: hidden;
  width: calc(50% - 130px);
  border-radius: 5px;
  background: no-repeat center center;
  background-size: cover;
}

.feature-wrap {
  box-sizing: border-box;
  min-height: calc(100vh - 160px - 85px);
  padding: 0 12% 10vh 50%;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
</style>
