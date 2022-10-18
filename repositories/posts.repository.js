const { posts } = require('../models');

class PostRepository {
  //게시글 조회
  findAllPost = async () => {
    // ORM인 Sequelize에서 Posts 모델의 findAll 메소드를 사용해 데이터를 요청합니다.
    const allPost = await posts.findAll();

    return allPost;
  };
  //게시글 상세조회
  findOnePost = async (postId) => {
    const postsOne = await posts.findByPk(postId);

    return postsOne;
  };
  //게시글 작성
  createPost = async (userId, nickname, title, content, like) => {
    // ORM인 Sequelize에서 Posts 모델의 create 메소드를 사용해 데이터를 요청합니다.
    const createPostData = await posts.create({ userId, nickname, title, content, like });

    return createPostData;
  };
}

module.exports = PostRepository;
