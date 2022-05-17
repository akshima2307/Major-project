import express from 'express';
import {protect} from '../middleware/authMiddleware.js'

const router = express.Router()
import {getPosts,getPostById,createPost, updatePost,getPostByUserId, deletePost} from '../controllers/postController.js'

 
router.route('/').get(getPosts).post(protect,createPost)

router.route('/user/:id').get(protect, getPostByUserId)

router.route('/:id').get(getPostById).put(protect, updatePost).delete(protect, deletePost)

export default router