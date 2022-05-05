import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { listPostDetails } from '../actions/postAction';

const PostScreen = ({history,match}) => {
    const dispatch = useDispatch()

    const postDetails = useSelector(state => state.postDetails)
    const {loading,error, post}= postDetails

    useEffect(() => {
        dispatch(listPostDetails(match.params.id))
    }, [dispatch, match])

    const likeHandler = () => {
        history.push(`/like/${match.params.id}`, match.params.id)
    };

    return(
        <>
            {loading ? <span style={{
                display: 'block',
                textAlign: 'center',
                marginTop: '6rem'
            }}>Loading...</span> : error ? <span style={{
                display: 'block',
                textAlign: 'center',
                marginTop: '6rem'
            }}>{error}</span> :
            <div className='art-container'>
                <Link to="/home" class="back_icon"><i class="fa fa-arrow-left" aria-hidden="true"></i>&nbsp; Go Back</Link>
                <div className="art">
                    <div className='art-img'>
                        <img src={post.img} alt="art-img" />
                    </div>
                    <div className='art-info'>
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>
                        <span>Artist Details</span>
                        <Link to={"/"} className='artist-info'>
                            <img src={post.artistImg} alt="artist-img" />
                            <span>{post.artistName}</span>
                        </Link>
                        <form className='art-details'>
                            <button type='button' onClick={likeHandler}><i class="fa fa-thumbs-up" aria-hidden="true"></i>&nbsp;{post.likes}</button>
                            <button><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;{post.views}</button>
                        </form>
                    </div>
                </div>
                <span>Comment Section</span>
                <div className='comment-info'>
                    
                    <ul className='comment-list'>
                        <li className='comment'>
                            <img src="/images/img_1.jpg" alt="user-img" />
                            <div>
                                <p>User</p>
                                <p>Amazing work!</p>
                            </div>
                        </li>
                        <li className='comment'>
                            <img src="/images/img_1.jpg" alt="user-img" />
                            <div>
                                <p>User 2</p>
                                <p>Nice work!</p>
                            </div>
                        </li>
                    </ul>
                    <form>
                        <div>
                            <span>Enter your Comment</span>
                            <input type="text" placeholder='Enter your comment....' />
                        </div>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
            }
        </>
    )
}

export default PostScreen;