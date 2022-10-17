const { Router } = require('express');
const router = Router();

const signupRouter = require('./signup.routes');
const loginRouter = require('./login.routes');
const postsRouter = require('./posts.routes');

router.use('/signup', signupRouter);
router.use('/login', loginRouter);
router.use('/posts', postsRouter);

console.log('1'); // 이거 왜 서버 실행만 해도 출력됨??????????????????

module.exports = router;
