const CommentsService = require('../services/comments.service');

class CommentsController {
  commentsService = new CommentsService(); // Comments 서비스를 클래스를 컨트롤러 클래스의 멤버 변수로 할당합니다.

  getComments = async (req, res) => {
    try {
      const { postId } = req.params;
      if (typeof (postId / 1) === NaN || postId.search(/\s/) != -1) throw new Error('postId를 잘못 입력하였습니다.');
      // 서비스 계층에 구현된 getComments 로직을 실행합니다.
      const allComments = await this.commentsService.getComments(postId);

      return res.status(200).send(allComments);
    } catch (error) {
      console.log(`${req.method} ${req.originalUrl} : ${error.message}`);
      return res.status(400).send({ errorMessage: error.message });
    }
  };

  createComment = async (req, res) => {
    try {
      const { postId } = req.params;
      if (typeof (postId / 1) === NaN || postId.search(/\s/) != -1) throw new Error('postId를 잘못 입력하였습니다.');
      const { comment } = req.body;
      if (!comment || comment.search(/\s/) === comment.length) throw new Error('댓글을 입력해주세요.');

      // 서비스 계층에 구현된 getComments 로직을 실행합니다.
      const { user } = res.locals;
      console.log(user);
      const newComment = await this.commentsService.createComment(postId, user.userId, comment);
      return res.status(200).send(newComment);
    } catch (error) {
      console.log(`${req.method} ${req.originalUrl} : ${error.message}`);
      return res.status(400).send({ errorMessage: error.message });
    }
  };
}

module.exports = CommentsController;
