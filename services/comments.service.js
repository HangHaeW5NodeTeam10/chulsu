const CommentsRepository = require('../repositories/comments.repository');
const _ = require('lodash');

class CommentsService {
  commentsRepository = new CommentsRepository();

  getComments = async (postId) => {
    // 저장소(Repository)에게 데이터를 요청합니다.
    const allComments = await this.commentsRepository.getComments(postId);
    console.log(allComments);
    // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
    allComments.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });

    // _.flatten(allComments, true);
    // 이게 undefined네... allComments.User도 마찬가지..
    console.log(allComments.Users);
    allComments.map((comment) => {
      return {
        commentId: allComments.commentId,
        postId: allComments.postId,
        // 모델 이름을 다 Users로 해줬는데 왜 여긴 User일까...?
        // nickname 어떻게 가져와야 하지..?
        // nickname: allComments.User.dataValues.nickname,
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

  updateComment = async (commentId, userId, comment) => {
    // 저장소(Repository)에게 데이터를 요청합니다.
    const updateResult = await this.commentsRepository.updateComment(commentId, userId, comment);

    return updateResult;
  };

  deleteComment = async (commentId, userId) => {
    // 저장소(Repository)에게 데이터를 요청합니다.
    const deleteResult = await this.commentsRepository.deleteComment(commentId, userId);

    return deleteResult;
  };
}

module.exports = CommentsService;
