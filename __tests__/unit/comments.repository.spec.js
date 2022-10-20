const { JsonWebTokenError } = require('jsonwebtoken');
const CommentsRepository = require('../../repositories/comments.repository');
const { Op } = require('sequelize');
const { default: test, describe } = require('node:test');

const mockPostsModel = () => ({
  findByPk: jest.fn(),
});

const mockCommentsModel = () => ({
  findByPk: jest.fn(),
  findAll: jest.fn(),
  create: jest.jn(),
  update: jest.fn(),
  destroy: jest.fn(),
});

let commentsRepository = new CommentsRepository();
commentsRepository.Posts = mockPostsModel();

beforeEach(() => {
  // 모든 Mock을 초기화합니다.
  jest.resetAllMocks();
});

test('comments.repository Method findThePost', async () => {
  const findThePostInsertSchema = { postId: '1' };
  const findThePostResultSchema = {};
});

// 강의내용 따라 입력
// test('naver-users Repository Method findNaverUser', async() => {
//   const findNaverUserInsertSchema = {
//     id: "asdf",
//     nickname: '테스트코드가가장쉬웠어요'
//   }

//   const findNaverUserResultSchema = {
//     "createdAt": "2022-10-16T09:34:00.396Z",
//     "updatedAt": "2022-10-16T09:34:00.397Z",
//     "userId": 1,
//     "id":"asdf",
//     "password":"1234",
//     "nickname":"테스트코드가가장쉬웠어요",
//     "gender": 1

//   }

//   naverUsersRepository.NaverUsers.findOne() = jest.fn(() => {
//     return findNaverUserResultSchema;
//   })
//   const naverUser = await naverUserRepository.findNaverUser(findNaverUserInsertSchema);

//   // 1. findOne으로 검색한 결과값은, 가공없이 바로 반환된다.
//   expect(naverUser).toEqual(findNaverUserResultSchema)

//   // 2. NaverUsers.findOne의 입력된 값이, 내가 생각한 값과 일치하는가
//   expect(naverUsersRepository.NaverUsers.findOne)
//     .toHaveBeenCalledWith({
//       where: {
//         [Op.or]: [{ id:findNaverUserInsertSchema.id }, { nickname: findNaverUserInsertSchema.nickname }],
//       },
//     })

//   // 3. NaverUsers.findOne이 내가 생각한 만큼 실행되었는가?
//   expect(naverUserRepository.NaverUsers.findOne)
//     .toHaveBeenCalledTimes(1);
// })

// const NaverUsersRepository = require('../../../src/repositories/naver-users.repository');
// const {
//   getNaverUserByPkInsertSchema,
//   findNaverUserInsertSchema,
//   createNaverUserInsertSchemaByRepository,
// } = require('../../fixtures/naver-users.fixtures');
// const { Op } = require('sequelize');

// const mockNaverUsersModel = () => ({
//   findAll: jest.fn(),
//   findOne: jest.fn(),
//   create: jest.fn(),
//   findByPk: jest.fn(),
// });

// test('hehe', () => {
//   expect(1 + 1).toBe(2);
// });

// describe('naver-users Repository Layer Test', () => {
//   let naverUsersRepository = new NaverUsersRepository();
//   // 외부 모듈을 사용하는 것이 바로 되지 않아서 모델을 목함수로 만듬
//   naverUsersRepository.NaverUsers = mockNaverUsersModel();

//   beforeEach(() => {
//     // 모든 Mock을 초기화합니다.
//     jest.resetAllMocks();
//   });

//   test('getAllNaverUser Method toHaveBeenCalled', async () => {
//     const naverUsers = await naverUsersRepository.getAllNaverUser({});

//     // findAll 메소드는 몇번 호출되었는지
//     expect(naverUsersRepository.NaverUsers.findAll).toHaveBeenCalledTimes(1);

//     // findAll 메소드가 호출된 인자를 검증합니다.
//     expect(naverUsersRepository.NaverUsers.findAll).toHaveBeenCalledWith();
//   });

//   test('getNaverUserByPk Method toHaveBeenCalled', async () => {
//     const naverUser = await naverUsersRepository.getNaverUserByPk(getNaverUserByPkInsertSchema);

//     // findByPk 메소드는 몇번 호출되었는지
//     expect(naverUsersRepository.NaverUsers.findByPk).toHaveBeenCalledTimes(1);

//     // findByPk 메소드가 호출된 인자를 검증합니다.
//     expect(naverUsersRepository.NaverUsers.findByPk).toHaveBeenCalledWith(getNaverUserByPkInsertSchema.userId);
//   });

//   test('findNaverUser Method toHaveBeenCalled', async () => {
//     const naverUser = await naverUsersRepository.findNaverUser(findNaverUserInsertSchema);

//     // findOne 메소드는 몇번 호출되었는지
//     expect(naverUsersRepository.NaverUsers.findOne).toHaveBeenCalledTimes(1);

//     // findOne 메소드가 호출된 인자를 검증합니다.
//     expect(naverUsersRepository.NaverUsers.findOne).toHaveBeenCalledWith({
//       where: {
//         [Op.or]: [{ id: findNaverUserInsertSchema.id }, { nickname: findNaverUserInsertSchema.nickname }],
//       },
//     });
//   });

//   test('createNaverUser Method toHaveBeenCalled', async () => {
//     const naverUser = await naverUsersRepository.createNaverUser(createNaverUserInsertSchemaByRepository);

//     // create 메소드는 몇번 호출되었는지
//     expect(naverUsersRepository.NaverUsers.create).toHaveBeenCalledTimes(1);

//     // create 메소드가 호출된 인자를 검증합니다.
//     expect(naverUsersRepository.NaverUsers.create).toHaveBeenCalledWith(createNaverUserInsertSchemaByRepository);
//   });
// });
