const { Router } = require('express');
const router = Router();
const { Users, Posts } = require('../models');
const authMiddleware = require('../middlewares/authMiddleware');
const PostsController = require('../controllers/posts.controller');
const authMiddleware = require('../middlewares/authMiddleware');
const postsController = new PostsController();

// router 부분은 실제로 어떤 로직이 수행되는지는 상관하지 않고,
// 어떤 URL과 어떤 HTTP 메서드가 어떤 컨트롤러의 메서드로 갈지에 대해서 확인하는 곳.
// URL 과 컨트롤러 사이에 미들웨어를 넣을 수도 있다.

router.get('/', postsController.getPosts);
router.get('/:postId', postsController.getOnePosts);
router.post('/', authMiddleware, postsController.createPost);
router.put('/:postId', authMiddleware, postsController.updatePost);
router.delete('/:postId', authMiddleware, postsController.deletePost);

// 게시글 작성. 로그인 필요 => authMiddleware 경유
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title) return res.status(400).send({ errorMessage: 'title is required' });
    if (!content) return res.status(400).send({ errorMessage: 'content is required' });

    const { user } = res.locals;
    await Posts.create({ userId: user.userId, title, content });
    return res.status(200).send({ msg: '게시글이 작성되었습니다.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ errorMessage: err.message });
  }
});

// 전체 게시글 목록
router.get('/', async (req, res) => {
  try {
    const posts = await Posts.findAll({
      attributes: { exclude: ['content'] },
      include: [
        {
          model: Users,
          attributes: ['nickname'],
        },
      ],
      order: [['createdAt', 'DESC']],
    });
    return res.send({ posts });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ errorMessage: err.message });
  }
});

// 특정 게시글 상세조회
router.get('/:postId', async (req, res, next) => {
  const { postId } = req.params;
  try {
    const post = await Posts.findByPk(postId, {
      include: [
        {
          model: Users,
          attributes: ['nickname'],
        },
      ],
    });

    return res.send({ post });
  } catch (error) {
    console.error(err);
    return res.status(500).send({ errorMessage: err.message });
  }
});

module.exports = router;
