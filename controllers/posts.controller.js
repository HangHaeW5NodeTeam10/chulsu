const PostService = require('../services/posts.service');

class PostsController {
  postService = new PostService(); // postService를 PostsController 클래스의 멤버 변수로 할당합니다.
  //게시글조회
  getPosts = async (req, res, next) => {
    // 서비스 계층에 구현된 findAllPost 로직을 실행합니다.
    const allPost = await this.postService.findAllPost();
    res.status(200).json({ data: allPost });
  };

  //게시글 상세조회
  getOnePosts = async (req, res, next) => {
    const postId = req.params.postId;
    const postsOne = await this.postService.findOnePost(postId);

    res.status(200).json({ data: postsOne });
  };

  //게시글 작성
  createPost = async (req, res, next) => {
    const { userId, nickname, title, content, like } = req.body;

    // 서비스 계층에 구현된 createPost 로직을 실행합니다.
    const createPostData = await this.postService.createPost(userId, nickname, title, content, like);
    res.status(201).json({ data: createPostData });
  };

  // 게시판 PUT
  updatePost = async (req, res, next) => {
    const { title, content } = req.body;
    const { postId } = req.params;
    const { id } = res.locals.user;

    await this.PostsService.updatePost(postId, title, content, id);
    res.status(200).send('게시글이 수정되었습니다');
  };

  // 게시판 DELETE
  deletePost = async (req, res, next) => {
    const { postId } = req.params;
    const { id } = res.locals.user;

    await this.PostsService.deletePost(postId, id);
    res.status(200).send('게시글이 삭제되었습니다');
  };
}

module.exports = PostsController;
