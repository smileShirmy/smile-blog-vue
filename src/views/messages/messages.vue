<template>
  <div class="messages-container">
    <split-line :icon="'message'" :desc="'留言墙'"></split-line>
    <section class="editor-wrapper">
      <comment-editor :isMessageEditor="true" @send="onSend"></comment-editor>
    </section>
    <ul class="messages-wrapper">
      <li class="message-item" v-for="message in messageList" :key="message.id">
        <span class="nickname">{{message.nickname ? '@' + message.nickname : ''}}</span>
        <div class="content">
          <p v-html="marked(message.content)">
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
import markdown from '@/services/markdown/marked'

export default {
  components: {
    SplitLine,
    CommentEditor
  },

  data() {
    return {
      messageList: []
    }
  },

  methods: {
    // markdown 解析
    marked(content) {
      return markdown(content)
    },

    async getMessages() {
      try {
        const res = await message.getMessages()
        this.messageList = res.collection
      } catch (e) {
        console.log(e)
      }
    },

    async onSend({nickname, content}) {
      try {
        const res = await message.createMessage({
          nickname,
          content
        })
        if (res.errorCode === 0) {
          this.getMessages()
        }
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

    .nickname {
      height: 24px;
    }

    .content {
      flex: 1;
      font-size: $font-size-base;

      img {
        width: 50%;
      }
    }

    .time {
      font-size: $font-size-base;
      text-align: right;
    }
  }
}
</style>
