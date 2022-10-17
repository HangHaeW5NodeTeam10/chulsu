const { Router } = require('express');
const router = Router();

const signupRouter = require('./signup.routes');
const loginRouter = require('./login.routes');
const postsRouter = require('./posts.routes');

router.use('/signup', signupRouter);
router.use('/login', loginRouter);
router.use('/posts', postsRouter);



module.exports = router;
