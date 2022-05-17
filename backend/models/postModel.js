import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    like: { type: Boolean},
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
      default: '/images/logo_header.svg'
    },
    description: {
        type: String,
        required: true,
    },
    category: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      required: true,
      default: 0
    },
    views: {
        type: Number,
        required: true,
        default: 0
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);
export default Post;