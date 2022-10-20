const SignupRepository = require('../repositories/signup.repository');

class SignupService {
  signupRepository = new SignupRepository();

  signupMember = async (nickname, password) => {
    try {
      const existName = await this.signupRepository.findMember(nickname);
      if (existName) throw new Error('중복된 닉네임입니다.');

      const signupResult = await this.signupRepository.signupMember(nickname, password);
      return signupResult;
    } catch (error) {
      console.log(error);
      return { errorMessage: error.message };
    }
  };
}

module.exports = SignupService;
