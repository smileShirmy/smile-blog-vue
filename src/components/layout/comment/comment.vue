<template>
  <div class="comment-container">
    <comment-editor
      :isShowReplyContent="isShowReplyContent"
      @closeReplyContent="isShowReplyContent = false"
    ></comment-editor>
    <div class="comment-list-wrapper">
      <comment-list :comments="comments" @reply="onReply"></comment-list>
    </div>
  </div>
</template>

<script>
import CommentList from "./comment-list";
import CommentEditor from "@/components/base/comment-editor/comment-editor";

const comments = [
  {
    id: 1,
    author: "作者",
    content: "内容",
    time: "2019-06-10"
  },
  {
    id: 2,
    author: "作者",
    content: "内容",
    time: "2019-06-10"
  },
  {
    id: 3,
    author: "作者",
    content: "内容",
    time: "2019-06-10"
  },
  {
    id: 4,
    author: "作者",
    content: "内容",
    time: "2019-06-10"
  },
  {
    id: 5,
    author: "作者",
    content: "内容",
    time: "2019-06-10"
  },
  {
    id: 6,
    author: "作者",
    content: "内容",
    time: "2019-06-10"
  }
];

export default {
  components: {
    CommentEditor,
    CommentList
  },

  data() {
    return {
      comments,
      isShowReplyContent: false
    };
  },

  methods: {
    onReply(commentId) {
      console.log(commentId);
      this.isShowReplyContent = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.comment-list-wrapper {
  margin-top: 25px;
}
</style>
