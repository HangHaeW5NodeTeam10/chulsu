const { Users } = require('../models');

class SignupRepository {
  findMember = async (nickname) => {
    const existName = await Users.findOne({ where: { nickname } });
    return existName;
  };

  signupMember = async (nickname, password) => {
    await Users.create({ nickname, password });
    return { message: '회원 가입에 성공하였습니다.' };
  };
}

module.exports = SignupRepository;
