<template>
  <div class="messages-container">
    <split-line :icon="'message'" :desc="'留言墙'"></split-line>
    <ul class="messages-wrapper">
      <li class="message-item" v-for="message in messageList" :key="message.id">
        <span class="author">{{message.author}}</span>
        <div class="content">
          <p>
            {{message.content}}
          </p>
        </div>
        <time class="time" :datetime="message.time">{{message.time}}</time>
      </li>
    </ul>
  </div>
</template>

<script>
import SplitLine from '@/components/split-line/split-line';

const messageList = [
  {
    id: 1,
    author: 'author1',
    content: 'content1',
    time: '2019.01.01 23:33'
  },
  {
    id: 2,
    author: 'author1',
    content: 'content1',
    time: '2019.01.01 23:33'
  },
  {
    id: 3,
    author: 'author1',
    content: 'content1',
    time: '2019.01.01 23:33'
  },
  {
    id: 4,
    author: 'author1',
    content: 'content1',
    time: '2019.01.01 23:33'
  },
  {
    id: 5,
    author: 'author1',
    content: 'content1content1content1content1content1content1content1content1content1content1',
    time: '2019.01.01 23:33'
  },
  {
    id: 6,
    author: 'author1',
    content: 'content1',
    time: '2019.01.01 23:33'
  },
  {
    id: 7,
    author: 'author1',
    content: 'content1',
    time: '2019.01.01 23:33'
  },
  {
    id: 8,
    author: 'author1',
    content: 'content1',
    time: '2019.01.01 23:33'
  },
  {
    id: 9,
    author: 'author1',
    content: 'content1',
    time: '2019.01.01 23:33'
  },
]

export default {
  components: {
    SplitLine
  },

  data() {
    return {
      messageList
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/common/scss/variable.scss';
@import '@/common/scss/animation.scss';
@import '@/common/scss/mixin.scss';

.messages-container {
  @include container;
  animation: slideTop .6s ease-in-out;
}

.messages-wrapper {
  display: flex;
  flex-wrap: wrap;

  .message-item {
    flex: 1 auto;
    display: flex;
    flex-direction: column;
    min-width: 11em;
    min-height: 11em;
    margin: .5em;
    padding: 1em;
    background-color: $--tag-color;
    transition: all .25s ease-in-out;

    &:hover {
      transform: translateY(-4px);
    }

    .content {
      flex: 1;
      font-size: $--font-size-base;
    }

    .time {
      font-size: $--font-size-base;
      text-align: right;
    }
  }
}
</style>
