// const LikeService = require('../services/likes.service');


// class LikesController {
//   likeService = new LikeService(); // likeService를 LikesController 클래스의 멤버 변수로 할당합니다. 
// //게시글 좋아요 조회
// getLikePosts = async (req, res, next) => {
//     const postId = req.params.postId;
// }

// //게시글 좋아요
// createLike = async (req, res, next) => {
//     const {postId} = req.params.postId;
//     const {userId} = res.locals.user
//     const likefind = await this.likeService.findOne({where:{userId, postId:postId}})

//     res.status(201).json({data: likefind})
// }

//   //게시글조회
// getPosts = async (req, res, next) => { 
//     const allPost = await this.postService.findAllPost();

//     res.status(200).json({ data: allPost }) 
//   }
// //게시글 상세조회
//   getOnePosts = async (req, res, next) => {
//     const postId = req.params.postId;
//     const postsOne = await this.postService.findOnePost(postId);

//     res.status(200).json({ data: postsOne });
//   }
// //게시글 작성
//   createPost = async (req, res, next) => {
//     const {userId, nickname, title, content, like} = req.body; 다

//     // 서비스 계층에 구현된 createPost 로직을 실행합니다.
//     const createPostData = await this.postService.createPost(userId, nickname, title, content, like);

//     res.status(201).json({ data: createPostData });
  
// }


// module.exports = PostsController;
