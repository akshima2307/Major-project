import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({post}) => {

    return(
        <div className="post">
            <div className='post-img'>
                <img src={post.img} alt={post.title} />
            </div>
            <Link to={`/post/${post._id}`} className="post-heading">{post.title}</Link>
            <div class="post-info">
                <img src="/images/user_1.jpg" alt="img" />
                <span>John Doe</span>
            </div>      
            <div class="post-info-likesView">
                <small><i class="fa fa-thumbs-up" aria-hidden="true"></i>&nbsp;{post.likes}</small>
                <small><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;{post.views}</small>
            </div>
        </div>
    )
}

export default Post;