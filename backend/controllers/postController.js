import Post from '../models/postModel.js';
import asyncHandler from 'express-async-handler';

//@desc   Fetch All Posts
//@route  GET /api/posts
//@acess  Public 
const getPosts = asyncHandler(async(req,res) => {
    const posts = await Post.find({})
    res.json(posts)
})

//@desc   Fetch a single Posts
//@route  GET /api/posts/:id
//@acess  Public 
const getPostById = asyncHandler(async(req,res) => {
    const post = await Post.findById(req.params.id)
    if(post){
        res.json(post)
    }else{
        res.status(404)
        throw new Error('Post not found')
    }
})

//@desc   Create a post
//@route  POST /api/posts
//@acess  PRIVATE 

const createPost = asyncHandler(async(req,res) => {
    const post = new Post({
        title: 'Sample name',
        img:  'src',
        description: 'lorem ipsium',
        category: 'image',
        likes: 0,
        views: 0,
        user: req.user._id
    })

    const createdPost = await post.save()
    res.status(201).json(createdPost)

})

//@desc   Update a post
//@route  POST /api/posts/:id
//@acess  PRIVATE 

const updatePost = asyncHandler(async(req,res) => {
    const {
        title,
        img,
        description,
        category
        } = req.body
    const post = await Post.findById(req.params.id)

    if(post){
        post.title = title
        post.img = img
        post.description = description
        post.category = category


        const updatedPost = await post.save()
        res.status(201).json(updatedPost)

    }else{
        res.status(404)
        throw new Error('Post not found')
    }
})

export {getPosts, getPostById,updatePost,createPost}