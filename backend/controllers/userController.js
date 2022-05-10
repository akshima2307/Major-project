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
    const {name, email, password } = req.body

    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }

    const user = await User.create({
        name,
        email,
        password
    })

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
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
        })

    }else{
        req.status(404)
        throw new Error("User not found")
    }
})

export {authUser,registerUser,getUserProfile}