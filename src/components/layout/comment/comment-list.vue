<template>
  <ul class="comment-list">
    <li class="comment-item" v-for="comment in comments" :key="comment.id">
      <i class="avatar"></i>
      <section class="comment-detail">
        <div class="author">
          <i class="mobile-avatar"></i>
          <span>{{comment.author}}</span>
        </div>
        <div class="content">{{comment.content}}</div>
        <section class="reply-content">
          @{{comment.author}}：{{comment.content}}
        </section>
        <footer class="comment-footer">
          <time class="time" datetime="2019-06-12">2019-06-12</time>
          <div class="tools">
            <i class="icon icon-like">
              <span class="like-count">1</span>
            </i>
            <i class="icon icon-reply" @click="reply(comment.id)"></i>
          </div>
        </footer>
        <div class="split"></div>
      </section>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      required: true
    }
  },

  methods: {
    reply(commentId) {
      this.$emit('reply', commentId)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.comment-item {
  display: flex;
  justify-content: space-between;
  align-content: flex-start;
  margin-bottom: 25px;

  &:last-child {
    margin-bottom: 0;
  }

  .avatar {
    display: inline-block;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #eee;

    @media (max-width: 479px) {
      display: none;
    }
  }

  .comment-detail {
    width: calc(100% - 50px);

    @media (max-width: 479px) {
      width: 100%;
    }

    .author {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      @media (max-width: 479px) {
        .mobile-avatar {
          display: inline-block;
          width: 26px;
          height: 26px;
          margin-right: 10px;
          border-radius: 50%;
          background-color: #eee;
        }
      }

      font-size: $--font-size-base;
    }

    .content {
      display: flex;
      align-items: center;
      min-height: 42px;
      margin: 8px 0;

      @media (max-width: 479px) {
        font-size: $--font-size-medium;
      }
    }

    .reply-content {
      box-sizing: border-box;
      padding: 6px 10px;      
      font-size: $--font-size-base;
      border: 1px solid var(--border-color);
      border-radius: 4px;
      background-color: var(--primary-light-0);
    }

    .comment-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .time {
        font-size: $--font-size-small;
      }

      .tools {
        display: flex;
        justify-content: flex-start;

        >i {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 30px;
          height: 30px;
          margin-right: 10px;
          cursor: pointer;

          &:last-child {
            margin-right: 0;
          }

          .like-count {
            margin-left: 5px;
          }
        }
      }
    }

    .split {
      box-sizing: border-box;
      width: 100%;
      height: 1px;
      margin-top: 15px;
      background-color: var(--border-color);
    }
  }
}
</style>
