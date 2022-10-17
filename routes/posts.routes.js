const { Router } = require('express');
const router = Router();
const authMiddleware = require("../middlewares/authMiddleware")

const PostsController = require('../controllers/posts.controller');
const postsController = new PostsController();

// router 부분은 실제로 어떤 로직이 수행되는지는 상관하지 않고,
// 어떤 URL과 어떤 HTTP 메서드가 어떤 컨트롤러의 메서드로 갈지에 대해서 확인하는 곳.
// URL 과 컨트롤러 사이에 미들웨어를 넣을 수도 있다.

// router.get('/', postsController.getPosts);
// router.get('/:postId', postsController.getOnePost);
router.post('/', authMiddleware, postsController.createPost);
// router.put('/', postsController.updatePost);
// router.delete('/', postsController.deletePost);

module.exports = router;
