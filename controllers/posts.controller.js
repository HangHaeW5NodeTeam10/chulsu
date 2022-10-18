const PostsService = require("../services/posts.service");

// Controller 역할
class PostsController {
  postsService = new PostsService();

  createPost = async (req, res, next) => { // 게시판 POST 

    const { user } = res.locals; // id값
    // console.log(userId)
    const { title, content } = req.body; 

   await this.postsService.createPost( {userId, title, content} );

    res.status(201).json({ message: "게시글이 생성되었습니다." });
  };



updatepost = async (req, res, next) => { // 게시판 PUT
  const { title, content } = req.body; 
  const { postId } = req.params;
  const { id } = res.locals.user;

  
  await this.postsService.updatePost(postId, title, content, id);
  res.status(200).send("게시글이 수정되었습니다");
};


deletepost = async (req, res, next) => { // 게시판 DELETE
  const { postId } = req.params;
  const { id } = res.locals.user;


  await this.postsService.deletePost(postId, id);
  res.status(200).send("게시글이 삭제되었습니다");
};
}

module.exports = PostsController;