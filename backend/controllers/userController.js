import User from '../models/userModal.js';
import asyncHandler from 'express-async-handler';
import generateToken from '../utlis/generateToken.js';

//@desc   Auth user
//@route  POST /api/users/login
//@acess  Public 
const authUser = asyncHandler(async(req,res) => {
    const { email, password } = req.body

    const user = await User.findOne({email})

    if(user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            img: user.img,
            description: user.description,
            isArtist: user.isArtist,
            followers: user.followers,
            following: user.following,
            token: generateToken(user._id),
        })
    }
    else{
        res.status(401)
        throw new Error('Invalid email or password')
    }
})

//@desc   Register a new user
//@route  POST /api/users
//@acess  Public 
const registerUser = asyncHandler(async(req,res) => {
    const {name, email, password, isArtist } = req.body

    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }

    const user = await User.create({
        name,
        email,
        isArtist,
        password
    })

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isArtist: user.isArtist,
            description: user.description,
            followers: user.followers,
            following: user.following,
            img: '/images/default-user.jpg',
            token: generateToken(user._id),
        })
    }else{
        res.status(400)
        throw new Error('Invalid user data')
    }

})

//@desc   GET user profile
//@route  GET /api/users/profile
//@acess  PRIVATE 
const getUserProfile = asyncHandler(async(req,res) => {
    const user = await User.findById(req.user._id)

    if(user){

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            img: user.img,
            isArtist: user.isArtist,
            description: user.description
        })

    }else{
        req.status(404)
        throw new Error("User not found")
    }
})

//@desc   Update user profile
//@route  PUT /api/users/profile
//@acess  PRIVATE 
const updateUserProfile = asyncHandler(async(req,res) => {
    const user = await User.findById(req.user._id)

    if(user){
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        user.img = req.body.img || user.img
        user.description = req.body.description || user.description
        if(req.body.password){
            user.password = req.body.password
        }

        const updatedUser = await user.save()

        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            img: updatedUser.img,
            description: updatedUser.description,
            token: generateToken(updatedUser._id),
        })
    }else{
        req.status(404)
        throw new Error("User not found")
    }
})

//@desc   GET all user
//@route  GET /api/users
//@acess  PRIVATE 
const getUsers = asyncHandler(async(req,res) => {
    const users = await User.find({})
    res.json(users)
})

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private
const getUserById = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id).select("-password");
    if (user) {
      res.json(user);
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  });



export {authUser,registerUser,getUserProfile,updateUserProfile,getUsers,getUserById}