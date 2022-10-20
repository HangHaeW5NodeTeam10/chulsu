const jwt = require('jsonwebtoken');
const { Users } = require('../models');
require('dotenv').config();
const { SECRET_KEY } = process.env;
if (!SECRET_KEY) throw new Error('SECRET_KEY is required!!');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  const [authType, authToken] = (authorization || '').split(' ');
  if (!authToken || authType !== 'Bearer') {
    return res.status(401).send({
      errorMessage: '로그인 후 이용 가능한 기능입니다.',
    });
  }

  try {
    const { userId } = jwt.verify(authToken, SECRET_KEY);
    Users.findByPk(userId).then((user) =>  {
      res.locals.user = user;
      next();
    });
  } catch (err) {
    res.status(401).send({
      errorMessage: '로그인 후 이용 가능한 기능입니다.',
    });
  }
};

// 유저 인증에 실패하면 403 상태 코드를 반환한다.
// module.exports = async (req, res, next) => {
//   try {
//     const cookies = req.cookies[process.env.COOKIE_NAME];
//     if (!cookies) {
//       return res.status(403).send({
//         errorMessage: '로그인이 필요한 기능입니다.',
//       });
//     }

//     const [tokenType, tokenValue] = cookies.split(' ');
//     if (tokenType !== 'Bearer') {
//       return res.status(403).send({
//         errorMessage: '전달된 쿠키에서 오류가 발생하였습니다.',
//       });
//     }

//     const { userId } = jwt.verify(tokenValue, process.env.SECRET_KEY);
//     const user = await Users.findByPk(userId);

//     res.locals.user = user;
//     next();
//   } catch (error) {
//     console.trace(error);
//     return res.status(403).send({
//       errorMessage: '로그인이 필요한 기능입니다.',
//     });
//   }
// };
