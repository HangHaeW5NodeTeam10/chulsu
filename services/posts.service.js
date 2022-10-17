const PostsRepository = require('../repositories/posts.repository');


class PostsService {
postsRepository = new PostsRepository();
  


createPost = async (id, title, content) => {  // 게시글 POST
  const createPostData = await this.postsRepository.createPost(
    id,
    title,
    content
  );

  return {
    userId: createPostData.id,
    title: createPostData.title,
    content: createPostData.content,
    createdAt: createPostData.createdAt,
    updatedAt: createPostData.updatedAt,
  };
}


 updatePost = async (postId, title, content, id) => {  // 게시글 PUT
  console.log(postId, title, content, id);
  try {
    await this.postsRepository.updatePost(postId, title, content, id);
    return {
      id: updatePost.postId,
      title: updatePost.title,
      content: updatePost.content,
      userId: updatePost.id,
    };
  } catch (e) {
    return {
      message: "게시글 수정에 실패했습니다",
      status: 400,
    };
  }
};


deletePost = async (postId, id) => { // 게시글 DELETE
  try {
    const deletePost = await this.postsRepository.deletePost(postId, id);
    return {
      id: deletePost.postId,
    };
  } catch (e) {
    return {
      message: "게시글 작성에 실패했습니다",
      status: 400,
    };
  }
};

}

module.exports = PostsService;