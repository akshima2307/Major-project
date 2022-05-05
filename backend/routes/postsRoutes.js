import express from 'express';
const router = express.Router()
import Post from '../models/postModel.js';
import asyncHandler from 'express-async-handler';


//@desc   Fetch All Posts
//@route  GET /api/posts
//@acess  Public 
router.get('/', asyncHandler(async(req,res) => {
    const posts = await Post.find({})
    res.json(posts)
}))

//@desc   Fetch a single Posts
//@route  GET /api/posts/:id
//@acess  Public 
router.get('/:id', asyncHandler(async(req,res) => {
    const post = await Post.findById(req.params.id)
    if(post){
        res.json(post)
    }else{
        res.status(404)
        throw new Error('Post not found')
    }
}))

export default router