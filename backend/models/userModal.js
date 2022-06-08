import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const { ObjectId } = mongoose.Schema.Types;
const userSchema = mongoose.Schema(
  {
    img:{
      type: String,
      required: true,
      default: '/images/default-user.jpg'
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isArtist: {
      type: String,
      required: true,
      default: "User",
    },
    description: {
      type: String,
      required: true,
      default: "description..."
    },
    followers:{
      type: [{
        type: ObjectId,
        ref: 'User',
      }]
    },
    following:[{type: ObjectId,ref:"User"}],

  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function(next){
  if(!this.isModified('password')){
    next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model("User", userSchema);
export default User;