// '../models'에서 가져오는 거라 이름이 Users인 것만 가져오기 위해 구조분해할당 사용
// 만약 '../models/users' 에서 require한다면 구조분해할당 해도 되고 안해도 되고...
const { Users, Posts, Comments } = require('../models');

class CommentsRepository {
  constructor() {
    this.Posts = Posts;
    this.Comments = Comments;
    this.Users = Users;
  }

  findThePost = async (postId) => {
    const existPost = await this.Posts.findByPk(postId);
    return existPost;
  };

  findTheComment = async (commentId) => {
    const existComment = await this.Comments.findByPk(commentId);
    return existComment;
  };

  getComments = async (postId) => {
    const allComments = await this.Comments.findAll({
      where: { postId },
      order: [['createdAt', 'DESC']],
      include: [
        {
          model: Users,
          attributes: ['nickname'],
        },
      ],
    });
    return allComments;
  };

  createComment = async (postId, userId, comment) => {
    const newComment = await this.Comments.create({
      postId,
      userId,
      comment,
    });
    return newComment;
  };

  updateComment = async (commentId, comment) => {
    await this.Comments.update({ comment }, { where: { commentId } });
    return { message: '댓글이 수정되었습니다.' };
  };

  deleteComment = async (commentId) => {
    await this.Comments.destroy({ where: { commentId } });
    return { message: '댓글이 삭제되었습니다.' };
  };
}

module.exports = CommentsRepository;
