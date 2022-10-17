const { Posts, sequelize } = require("../models");

class PostsRepository {  // 작성
  createPost = async (id, title, content) => {
    const createPost = await Posts.create({ userId: id, title, content });

    return createPost;
  };

  
  

  updatePost = async (postId, title, content, id) => { // 수정
    const updatePost = Posts.update(
      { title, content },
      { where: { id: postId, userId: id } }
    );
    return updatePost;
  };


  

  deletePost = async (postId, id) => { // 삭제
    const deletePost = Posts.destroy({
      where: { id: postId, userId: id },
    });
    return deletePost;
  };

}
module.exports = PostsRepository;