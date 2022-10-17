// '../models'에서 가져오는 거라 이름이 Users인 것만 가져오기 위해 구조분해할당 사용
// 만약 '../models/users' 에서 require한다면 구조분해할당 해도 되고 안해도 되고...
const { Users, Posts, Comments } = require('../models');

class CommentsRepository {
  getComments = async (postId) => {
    // ORM인 Sequelize에서 Comments 모델의 findAll 메소드를 사용해 전체 댓글 가져오기
    const comments = await Comments.findAll({
      where: { postId },
      include: [
        {
          model: Users,
          attributes: ['nickname'],
        },
      ],
    });
    return comments;
  };

  createComment = async (postId, userId, comment) => {
    try {
      const newcomment = await Comments.create({
        postId,
        userId,
        comment,
      });
      // const newComment = await Comments.findOne({
      //   where: { commentId: comment.commentId },
      //   include: [
      //     {
      //       model: Users,
      //       attributes: ['nickname'],
      //     },
      //   ],
      // });

      return newcomment;
    } catch (error) {
      console.error(error);
    }
  };
}

module.exports = CommentsRepository;
