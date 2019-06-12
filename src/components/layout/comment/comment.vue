<template>
  <div class="comment-container">
    <div class="editor-container">
      <i class="avatar"></i>
      <section class="comment-wrapper">
        <transition-group tag="div" name="list-slide">
          <section class="list-slide-item" v-if="isShowReplyContent" :key="1">
            <div v-if="isShowReplyContent" class="reply-target">
              <i class="icon icon-ant-close" @click="isShowReplyContent = false"></i>
              <strong class="reply-author">@作者</strong>
              <div class="reply-content">要回复的内容</div>
            </div>
          </section>
          <section class="list-slide-item" :key="2">
            <div ref="editor" class="editor" contenteditable="true" placeholder="评论..."></div>
          </section>
          <section class="list-slide-item handle-wrapper" :key="3">
            <div class="editor-tools">
              <a class="tool-item">
                <i class="icon icon-smile"></i>
              </a>
              <a class="tool-item">
                <i class="icon icon-image"></i>
              </a>
              <a class="tool-item">
                <i class="icon icon-link"></i>
              </a>
              <a class="tool-item">
                <i class="icon icon-code"></i>
              </a>
            </div>
            <a class="tool-item">
              <i class="icon icon-send"></i>
            </a>
          </section>
          <div class="list-slide-item" :key="4">
            <section class="user-wrapper" key="4">
              <input class="user-input" required="true" name="text" type="text" placeholder="昵称（必填）">
              <input class="user-input" required="true" name="email" type="email" placeholder="邮箱（必填）">
              <input class="user-input" name="url" type="url" placeholder="个人网站（完整域名，非必填）">
            </section>
          </div>
        </transition-group>
      </section>
    </div>
    <div class="comment-list-container">
      <comment-list :comments="comments" @reply="onReply"></comment-list>
    </div>
  </div>
</template>

<script>
import CommentList from './comment-list';

const comments = [
  {
    id: 1,
    author: '作者',
    content: '内容',
    time: '2019-06-10'
  },
  {
    id: 2,
    author: '作者',
    content: '内容',
    time: '2019-06-10'
  },
  {
    id: 3,
    author: '作者',
    content: '内容',
    time: '2019-06-10'
  },
  {
    id: 4,
    author: '作者',
    content: '内容',
    time: '2019-06-10'
  },
  {
    id: 5,
    author: '作者',
    content: '内容',
    time: '2019-06-10'
  },
  {
    id: 6,
    author: '作者',
    content: '内容',
    time: '2019-06-10'
  },
]

export default {
  components: {
    CommentList
  },

  data() {
    return {
      comments,
      isShowReplyContent: false
    }
  },

  methods: {
    onReply(commentId) {
      console.log(commentId)
      this.isShowReplyContent = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/animation.scss';

.editor-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.avatar {
  display: inline-block;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #eee;

  @media (max-width:  479px) {
    display: none;
  }
}

.comment-wrapper {
  width: calc(100% - 50px);

  @media (max-width: 479px) {
    width: 100%;
  }

  .list-slide-item {
    transition: all .3s ease-in-out;
  }

  .reply-target {
    box-sizing: border-box;
    position: relative;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid var(--border-color);
    border-radius: 4px;

    .icon-ant-close {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 5px;
      right: 5px;
      width: 30px;
      height: 30px;
      font-size: $--font-size-extra-large;
      cursor: pointer;

      &:hover {
        color: var(--theme-active);
      }
    }
  }

  .editor {
    box-sizing: border-box;
    width: 100%;
    height: 100px;
    padding: 10px;
    color: var(--font-color-article);
    border: 1px solid var(--border-color);
    border-radius: 4px;
    outline: none;
    transition: $--theme-transition;

    &:empty:before {
      content: attr(placeholder);
    }

    &:hover {
      border-color: var(--font-color-light);
    }

    &:focus {
      border-color: var(--font-color-light);

      &:before {
        content: none;
      }
    }
  }

  .user-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .user-input {
      box-sizing: border-box;
      width: 32%;
      padding: 5px;
      outline: none;
      color: var(--font-color-article);
      white-space: nowrap;
      border: 1px solid var(--border-color);
      border-radius: 4px;
      background-color: var(--app-background-color-light);
      transition: $--theme-transition;
      -webkit-appearance: none;
      -webkit-tap-highlight-color: transparent;

      &:hover {
        border-color: var(--font-color-light);
      }

      &:focus {
        border-color: var(--font-color-light);
      }
    }
  }
}

.handle-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .tool-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: $--theme-transition;

    &:hover {
      background-color: var(--tool-background-color);
    }
  }
}

.editor-tools {
  display: flex;
  justify-content: flex-start;
  transition: $--theme-transition;
  margin: 5px 0;

  >a {
    margin-right: 10px;
    
    &:last-child {
      margin-right: 0;
    }
  }
}

.comment-list-container {
  margin-top: 25px;
}
</style>
