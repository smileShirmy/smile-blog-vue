<template>
  <div class="comment-container">
    <i class="avatar"></i>
    <section class="comment-wrapper">
      <div ref="editor" class="editor" contenteditable="true" placeholder="评论..."></div>
      <section class="handle-wrapper">
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
      <div class="user-wrapper">
        <input class="user-input" required="true" name="text" type="text" placeholder="昵称（必填）">
        <input class="user-input" required="true" name="email" type="email" placeholder="邮箱（必填）">
        <input class="user-input" name="url" type="url" placeholder="个人网站（完整域名，非必填）">
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';

.comment-container {
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
}

.comment-wrapper {
  width: calc(100% - 50px);

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

    &::before {
      content: attr(placeholder);
    }

    &:hover {
      border-color: var(--font-color-light);
    }

    &:focus {
      border-color: var(--font-color-light);

      &::before {
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
      border: 1px solid var(--border-color);
      border-radius: 4px;
      background-color: var(--app-background-color);
      transition: $--theme-transition;

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
</style>
