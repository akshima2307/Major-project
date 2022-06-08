import express from 'express';
const router = express.Router()
import {
    authUser, 
    registerUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    getUserById
} from '../controllers/userController.js'
import {protect} from '../middleware/authMiddleware.js'
import User from '../models/userModal.js';
 
router.route('/').post(registerUser).get(protect, getUsers)
router.post('/login',authUser)
router.route('/profile').get(protect, getUserProfile).put(protect,updateUserProfile)
router
  .route("/:id")
  .get(protect, getUserById)

router.route('/follow').put(protect,(req,res) => {
  User.findByIdAndUpdate(req.body.followId,{
    $push:{followers:req.user._id}
  },{
      new:true
  },(err,result)=>{
      if(err){
          return res.status(422).json({error:err})
      }
  User.findByIdAndUpdate(req.user._id,{
      $push:{following:req.body.followId}      
  },{new:true}).select("-password").then(result=>{
        res.json(result)
    }).catch(err=>{
        return res.status(422).json({error:err})
    })
  }
  )
})

router.put("/unfollow",(req,res) => {
  User.findByIdAndUpdate(req.body.unfollowId,{
    $pull:{followers:req.user._id}
  },{
      new:true
  },(err,result)=>{
      if(err){
          return res.status(422).json({error:err})
      }
  User.findByIdAndUpdate(req.user._id,{
      $pull:{following:req.body.unfollowId}      
  },{new:true}).select("-password").then(result=>{
        res.json(result)
    }).catch(err=>{
        return res.status(422).json({error:err})
    })
  }
  )
})

export default router