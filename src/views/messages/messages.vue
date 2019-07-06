<template>
  <div class="messages-container">
    <split-line :icon="'message'" :desc="'留言墙'"></split-line>
    <section class="editor-wrapper">
      <comment-editor :isMessageEditor="true"></comment-editor>
    </section>
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
import SplitLine from '@/components/base/split-line/split-line'
import CommentEditor from '@/components/base/comment-editor/comment-editor'
import message from '@/services/models/message'

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
    SplitLine,
    CommentEditor
  },

  data() {
    return {
      messageList
    }
  },

  methods: {
    getMessages() {
      try {
        const res = message.getMessages()
        this.messageList = res
      } catch (e) {
        console.log(e)
      }
    }
  },

  created() {
    this.getMessages()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/mixin.scss';

.messages-container {
  @include container;

  .editor-wrapper {
    margin: .5em;
  }
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
    background-color: var(--tag-color);
    transition: all .25s ease-in-out;

    &:hover {
      transform: translateY(-4px);
    }

    .content {
      flex: 1;
      font-size: $font-size-base;
    }

    .time {
      font-size: $font-size-base;
      text-align: right;
    }
  }
}
</style>
