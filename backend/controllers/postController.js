import Post from '../models/postModel.js';
import asyncHandler from 'express-async-handler';
import User from '../models/userModal.js';

//@desc   Fetch All Posts
//@route  GET /api/posts
//@acess  Public 
const getPosts = asyncHandler(async(req,res) => {
    const keyword = req.query.keyword ? {
        title: {
            $regex: req.query.keyword,
            $options: 'i'
        }
    } : {}

    const posts = await Post.find({ ...keyword })
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

//@desc   Delete a post
//@route  DELETE /api/posts/:id
//@acess  Private 
const deletePost = asyncHandler(async(req,res) => {
    const post = await Post.findById(req.params.id)
    if(post){
        await post.remove()
        res.json({message: "Post Removed!"})
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

// @desc    Get post uploaded by login user
// @route   GET /api/posts/user/:id
// @access  Private
const getPostByUserId = asyncHandler(async (req, res) => {
    const posts = await Post.find({user: req.params.id});
    if (posts) {
      res.json(posts);
    } else {
      res.status(404);
      throw new Error("User not found");
    }
});

//@desc   Create new review
//@route  POST /api/posts/:id/reviews
//@acess  PRIVATE 

const createPostReview = asyncHandler(async(req,res) => {
    const {comment} = req.body
    const post = await Post.findById(req.params.id)

    if(post){
        const alreadyReviewed = post.reviews.find(r => r.user.toString() === req.user._id.toString())
        if(alreadyReviewed){
            res.status(400)
            throw new Error('Post already reviewed')
        }
        const review = {
            name: req.user.name,
            img: req.user.img,
            comment,
            user:req.user._id
        }
        post.reviews.push(review)
        post.numReviews = post.reviews.length
        await post.save()
        res.status(201).json({message: "Review Added"})
    }else{
        res.status(404)
        throw new Error('Post not found')
    }
})






export {getPosts, getPostById,updatePost,deletePost,createPost,getPostByUserId,createPostReview}