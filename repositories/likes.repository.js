const { Likes } = require('../models');
const { Posts } = require('../models');
const { Users } = require('../models');

class LikeRepository {
  
   //게시글 좋아요 조회
   findAllLike = async (userId) => {
    const mylike = await Likes.findAll(userId);
    
    return mylike
    }

    findAllPost = async ({mylikepostId}) => {

    return  await Posts.findAll({where: {postId: mylikepostId},
        include: [{model: Users,}],
        order:[['likesCount','DESC']]})    
    }



///원래코드
    // findAllPost = async (userId) => {
    //     const mylike = await Likes.findAll({ where: { userId },
    //         include: [{ model: Posts, 
    //         },], });
    
    //     return mylike;
    //   };




   //게시글 좋아요
   
   findLike  = async ({postId, userId}) => {
    const likefind = await Likes.findOne({where:{userId, postId}})

    return likefind
   }
   createLike = async (postId, userId) => {
    await Likes.create({userId:userId, postId:postId})
   }
   destroyLike = async (postId, userId) => {
    await Likes.destroy({where:{postId:postId, userId:userId}})
   }
   increment = async(postId) => {
    await Posts.increment({likesCount:1},{where:{postId:postId}})
   }
   decrement = async(postId) => {
    await Posts.decrement({likesCount:1},{where:{postId:postId}})
   }

}


module.exports = LikeRepository;

