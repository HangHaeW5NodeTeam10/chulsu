const CommentsService = require('../services/comments.service');

class CommentsController {
  commentsService = new CommentsService(); // Comments 서비스를 클래스를 컨트롤러 클래스의 멤버 변수로 할당합니다.

  getComments = async (req, res) => {
    try {
      const { postId } = req.body;
      if (typeof (postId / 1) === NaN) throw new Error();

      // 서비스 계층에 구현된 getComments 로직을 실행합니다.
      const allCommnets = await this.commentsService.getComments(postId);

      return res.status(200).send(allComments);
    } catch (error) {
      console.log(`${req.method} ${req.originalUrl} : ${error.message}`);
      return res.status(400).send({
        errorMessage: 'postId가 올바르지 않습니다.',
      });
    }
  };
}

module.exports = CommentsController;
