<template>
  <div class="archive-container">
    <split-line :icon="'post'" :desc="'10 posts'"></split-line>
    <div class="year-wrapper" v-for="year in archiveList" :key="year.year">
      <div class="year-name">{{year.year}}</div>
      <dl class="month-wrapper" v-for="month in year.monthList" :key="month.month">
        <dt class="month-name">{{month.month | monthTrans}}</dt>
        <dd class="article-item" v-for="article in month.articleList" :key="article.id">
          <span class="time">{{article.time}}</span>
          <span class="title">{{article.title}}</span>
          <i class="avatar"></i>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import SplitLine from '@/components/split-line/split-line'

const monthMap = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December'
}

const archiveList = [
  {
    year: '2019',
    monthList: [
      {
        month: 5,
        articleList: [
          {
            id: 1,
            title: '这个标题真的有点长这个标题真的有点长这个标题真的有点长这个标题真的有点长这个标题真的有点长这个标题真的有点长',
            time: '05.13'
          }
        ]
      },
      {
        month: 3,
        articleList: [
          {
            id: 2,
            title: '标题2',
            time: '05.13'
          },
          {
            id: 3,
            title: '标题3',
            time: '05.13'
          }
        ]
      }
    ]
  },
  {
    time: '2018',
    monthList: [
      {
        month: 12,
        articleList: [
          {
            id: 4,
            title: '标题4',
            time: '05.13'
          }
        ]
      }
    ]
  }
]

export default {
  components: {
    SplitLine
  },

  data() {
    return {
      archiveList
    }
  },

  filters: {
    monthTrans(month) {
      return monthMap[month]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/common/scss/variable.scss';
@import '@/common/scss/mixin.scss';
@import '@/common/scss/animation.scss';

@mixin margin {
  margin-top: .5em;
  margin-left: 2em;

  @media (max-width: 479px) {
    margin-top: .3em;
    margin-left: 0;
  }
}

.archive-container {
  @include container;
  animation: slideTop .6s ease-in-out;
}

.year-wrapper {
  @include margin;

  @media (max-width: 1023px) {
    margin-left: 5px;
  }

  .year-name {
    font-size: $--title-font-size-medium;
    font-weight: $--font-weight-bold;
  }
}

.month-wrapper {
  @include margin;

  .month-name {
    font-size: $--title-font-size-small;
    font-weight: $--font-weight-bold;
  }
}

.article-item {
  @include margin;
  display: flex;
  min-height: 30px;
  
  .time {
    position: relative;
    margin: 0 14px;
    white-space: nowrap;

    @media (max-width: 479px) {
      margin: 0 10px 0 0;
    }

    @media (min-width: 480px) {
      &:before {
        content: '';
        position: absolute;
        top: 9px;
        left: -18px;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: $--font-color-primary;
      }
    }
  }

  .title {
    cursor: pointer;
  }

  .avatar {
    display: inline-block;
    width: 30px;
    min-width: 30px;
    height: 30px;
    margin: -3px 0 0 30px;
    border-radius: 50%;
    background-color: $--border-color;
    opacity: 0;
    transform: translate(0);
    transition: all .25s ease-in-out;

    @media (max-width: 479px) {
      margin: -3px 0 0 10px;
    }
  }

  &:hover {
    .avatar {
      opacity: 1;
      transform: translateX(10px);
    }
  }
}
</style>
