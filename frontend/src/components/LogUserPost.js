import { Link } from 'react-router-dom';
import React from 'react';
import { deletePost } from '../actions/postAction';
import { useDispatch } from 'react-redux';

const LogUserPost = ({post}) => {
    const dispatch = useDispatch()

    const deleteHandler = (id) => {
        if (window.confirm("Are you sure")) {
          dispatch(deletePost(id));
        }
    };


    return(
        <div className="post">
            <div className='post-img'>
                <img src={post.img} alt={post.title} />
                <Link to={`/user/post/${post._id}/edit`}><i class="fa fa-pencil-square-o" aria-hidden="true"></i></Link>
                <button onClick={() => deleteHandler(post._id)}><i class="fa fa-trash-o" aria-hidden="true"></i></button>
            </div>
            <Link to={`/post/${post._id}`} className="post-heading">{post.title}</Link>   
            <div class="post-info-likesView" style={{"marginTop": "1rem"}}>
                <small><i class="fa fa-thumbs-up" aria-hidden="true"></i>&nbsp;{post.likes}</small>
                <small><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;{post.views}</small>
            </div>
        </div>
    )
}

export default LogUserPost;