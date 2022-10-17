const CommentsRepository = require('../repositories/comments.repository');

class CommentsService {
  commentsRepository = new CommentsRepository();

  getComments = async (postId) => {
    // 저장소(Repository)에게 데이터를 요청합니다.
    const allComments = await this.commentsRepository.getComments(postId);

    // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
    allComments.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });

    allComments.map((comment) => {
      return {
        commentId: allComments.commentId,
        postId: allComments.postId,
        nickname: allComments.Users.nickname,
        comment: allComments.comment,
        createdAt: allComments.createdAt,
        updatedAt: allComments.updatedAt,
      };
    });

    return allComments;
  };

  createComment = async (postId, userId, comment) => {
    // 저장소(Repository)에게 데이터를 요청합니다.
    const newComment = await this.commentsRepository.createComment(postId, userId, comment);

    return newComment;
  };
}

module.exports = CommentsService;
