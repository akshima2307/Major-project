import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux' ;
import { likePost,removeLike } from '../actions/postAction';
import Message from '../components/Message';

const LikeScreen = ({match, location, history}) => {
    const postId = location.state
    const dispatch = useDispatch()
    const like = useSelector((state) => state.like)
    const {likeItems} = like
    useEffect(() => {
        if(postId) {
            dispatch(likePost(postId))
        }
    }, [dispatch,postId])

    const removeLikeHandler = (id) => {
        dispatch(removeLike(id))
    }

    return (
        <div>
            <span className='like-heading'>Like component</span>
            <div className='like-container'>
                {likeItems.length === 0 ? (
                    <Message>There is no liked posts.</Message>
                ): likeItems.map(item => (
                    <div className='like-card' key={item.post}>
                        <Link to={`/post/${item.post}`}><img src={item.image} /></Link>
                        <div className='like-content'>
                            <Link to={`/post/${item.post}`}>{item.name}</Link>
                            <p>{item.description}</p>
                            <button>{item.likes}</button>
                            <button>{item.views}</button>
                        </div>
                        <button onClick={() => removeLikeHandler(item.post)} className='remove-btn'>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LikeScreen