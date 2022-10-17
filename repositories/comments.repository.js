// '../models'에서 가져오는 거라 이름이 Users인 것만 가져오기 위해 구조분해할당 사용
// 만약 '../models/users' 에서 require한다면 구조분해할당 해도 되고 안해도 되고...
const { Comments } = require('../models');

class CommentsRepository {
  getComments = async (postId) => {
    // ORM인 Sequelize에서 Comments 모델의 findAll 메소드를 사용해 일치하는 유저 찾기
    const comments = await Comment.findAll({
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
}

module.exports = CommentsRepository;
