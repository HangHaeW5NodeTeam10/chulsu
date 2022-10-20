const CommentsRepository = require('../repositories/comments.repository');

class CommentsService {
  commentsRepository = new CommentsRepository();

  getComments = async (postId) => {
    try {
      const existPost = await this.commentsRepository.findThePost(postId);
      if (!existPost) throw new Error('존재하지 않는 포스트입니다. ');

      const allComments = await this.commentsRepository.getComments(postId);
      allComments
        .sort((a, b) => {
          return b.createdAt - a.createdAt;
        })
        .map((comment) => {
          return {
            commentId: comment.commentId,
            postId: comment.postId,
            nickname: comment.User.nickname,
            comment: comment.comment,
            createdAt: comment.createdAt,
            updatedAt: comment.updatedAt,
          };
        });

      return allComments;
    } catch (error) {
      console.error(error);
      return { errorMessage: error.message };
    }
  };

  createComment = async (postId, userId, comment) => {
    try {
      const existPost = await this.commentsRepository.findThePost(postId);
      if (!existPost) throw new Error('존재하지 않는 포스트입니다. ');

      await this.commentsRepository.createComment(postId, userId, comment);

      return { message: '댓글이 생성되었습니다.' };
    } catch (error) {
      console.error(error);
      return { errorMessage: error.message };
    }
  };

  updateComment = async (commentId, userId, comment) => {
    try {
      const existComment = await this.commentsRepository.findTheComment(commentId);
      if (!existComment) throw new Error('존재하지 않는 댓글입니다. ');
      if (existComment.userId !== userId) throw new Error('댓글 작성자만 댓글을 수정할 수 있습니다.');

      await this.commentsRepository.updateComment(commentId, comment);

      return { message: '댓글이 수정되었습니다.' };
    } catch (error) {}
  };

  deleteComment = async (commentId, userId) => {
    try {
      const existComment = await this.commentsRepository.findTheComment(commentId);
      if (!existComment) throw new Error('존재하지 않는 댓글입니다. ');
      if (existComment.userId !== userId) throw new Error('댓글 작성자만 댓글을 삭제할 수 있습니다.');

      await this.commentsRepository.deleteComment(commentId);

      return deleteResult;
    } catch (error) {
      console.error(error);
      return { errorMessage: error.message };
    }
  };
}

module.exports = CommentsService;
