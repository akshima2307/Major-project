import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({post}) => {

    return(
        <div className="post">
            <div className='post-img'>
                {post.img.split(".")[1] === "mp4" ? (
                    <video style={{
                        "width": "100%",
                        "height": "100%",
                        "objectFit": "cover"
                    }} src={post.img} autoplay muted controls />
                ):
                <img src={post.img} alt={post.title} />
                }
            </div>
            <Link to={`/post/${post._id}`} className="post-heading">{post.title}</Link>   
            {/* <div class="post-info-likesView" style={{"marginTop": "1rem"}}>
                <small><i class="fa fa-thumbs-up" aria-hidden="true"></i>&nbsp;{post.likes}</small>
                <small><i class="fa fa-comment" aria-hidden="true"></i>&nbsp;{post.numReviews}</small>
            </div> */}
        </div>
    )
}

export default Post;