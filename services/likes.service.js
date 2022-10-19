const LikeRepository = require('../repositories/likes.repository'); 

class LikeService {
  likeRepository = new LikeRepository();

   //게시글 좋아요 조회
   mylikepost = async ({userId}) => {
   const mylike = await this.likeRepository.findAllLike(userId)

  const mylikepostId = mylike.map((item)=>{
    return item.postId 
  })
  

  const mylikepost = await this.likeRepository.findAllPost({mylikepostId})
  const data = mylikepost.map((item)=>{
    return {
      postId: item.postId,
      userId: item.userId,
      nickname: item.User.nickname,
      title: item.title,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
      likes: item.likesCount
    }
  })
  return data
  }



///원래코드
    // mylikepost = async (userId) => {
    //     const mylike = await this.likeRepository.findAllPost(userId);
    //     const newMylike = await mylike.map((item) => {
    //       return {
    //         userId: item.userId,
    //         postId: item.Post.postId,
    //         authorId: item.Post.userId,
    //         title: item.Post.title,
    //         likesCount: item.Post.likesCount,
    //         createdAt: item.Post.createdAt,
    //         updatedAt: item.Post.updatedAt,
    //       };
    //     });
    //     await newMylike.sort((a, b) => b.likesCount - a.likesCount);
    //     return newMylike;
    //   }; //서비스 헷갈릴까바 유저아이디 저자아이디로 이름 바꿨어요


   //게시글 좋아요
   updateLike = async ({postId, userId}) => {
    const findLike = await this.likeRepository.findLike ({postId, userId})
    
    if (!findLike){
        await this.likeRepository.createLike(postId, userId)
        await this.likeRepository.increment(postId)
        return {Message: "게시글의 좋아요를 등록하였습니다."}
    } else {
        await this.likeRepository.destroyLike(postId, userId)
        await this.likeRepository.decrement(postId)
        return {Message: "게시글의 좋아요를 취소하였습니다." }
    }
   }        
}
module.exports = LikeService;

