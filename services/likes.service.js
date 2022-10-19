const LikeRepository = require('../repositories/likes.repository'); 

class LikeService {
  likeRepository = new LikeRepository();

   //게시글 좋아요 조회
   mylikepost = async (userId, postId) => {
    const mylike = await this.likeRepository.findAllPost(userId, postId)
    mylike.map((item)=>{
            return item.postId
    })      
    return {mylike}
}

   //게시글 좋아요
   updateLike = async (postId, userId) => {
    const findLike = await this.likeRepository.findLike (postId, userId)
    
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

