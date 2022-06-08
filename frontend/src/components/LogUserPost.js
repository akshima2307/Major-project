import { Link } from 'react-router-dom';
import React from 'react';
import { deletePost } from '../actions/postAction';
import { useDispatch, useSelector } from 'react-redux';

const LogUserPost = ({post}) => {
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const deleteHandler = (id) => {
        if (window.confirm("Are you sure")) {
          dispatch(deletePost(id));
        }
    };


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
                {post.user === userInfo._id && (
                    <>
                    <Link to={`/user/post/${post._id}/edit`}><i class="fa fa-pencil-square-o" aria-hidden="true"></i></Link>
                    <button onClick={() => deleteHandler(post._id)}><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                    </>
                )} 
                
            </div>
            <Link to={`/post/${post._id}`} className="post-heading">{post.title}</Link>   
            {/* <div class="post-info-likesView" style={{"marginTop": "1rem"}}>
                <small><i class="fa fa-thumbs-up" aria-hidden="true"></i>&nbsp;{post.likes}</small>
                <small><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;{post.views}</small>
            </div> */}
        </div>
    )
}

export default LogUserPost;