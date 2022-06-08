import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { listPostDetails, createPostReview } from '../actions/postAction';
import {getUserDetails} from '../actions/userAction';
import Message from '../components/Message';
import { POST_CREATE_REVIEW_RESET } from '../constants/postConstants';

const PostScreen = ({history,match}) => {

    const [comment,setComment] = useState('')

    const dispatch = useDispatch()

    const postDetails = useSelector(state => state.postDetails)
    const {loading,error, post}= postDetails

    const postReviewCreate = useSelector(state => state.postReviewCreate)
    const {success:successPostReview ,error:errorPostReview}= postReviewCreate

    const userDetails = useSelector(state => state.userDetails)
    const {loading:loadingUserDetails,error:errorUserDetails ,user}= userDetails

    const userLogin  = useSelector((state) => state.userLogin)
    const {userInfo} = userLogin

    useEffect(() => {
        dispatch(listPostDetails(match.params.id))
    }, [dispatch, match])

    useEffect(() => {
        if(userInfo && !loading){
            dispatch(getUserDetails(post.user)); 
        }else{
            history.push('/login')
        }
        if(successPostReview){
            alert('Comment Added!!')
            setComment("")
            dispatch({type: POST_CREATE_REVIEW_RESET})
        }
    },[dispatch, loading, history,post,userInfo,successPostReview])

    const likeHandler = () => {
        history.push(`/like/${match.params.id}`, match.params.id)
    };

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createPostReview(match.params.id,{
            comment,
        }))
    }

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
                            {loadingUserDetails && <Message>Loading...</Message>}
                            {errorUserDetails ? <Message>{errorUserDetails}</Message> :
                             (
                                <Link to={"/"} className='artist-info'>
                                    <img src={user.img} alt="artist-img" />
                                    <span>{user.name}</span>
                                </Link>
                            )}
                        <form className='art-details'>
                            <button type='button' onClick={likeHandler}><i class="fa fa-thumbs-up" aria-hidden="true"></i>&nbsp;{post.likes}</button>
                            <button><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;{post.numReviews}</button>
                        </form>
                    </div>
                </div>
                <span>Comment Section</span>
                <div className='comment-info'>
                    
                    <ul className='comment-list'>
                        {/* <li className='comment'>
                            <img src="/images/img_1.jpg" alt="user-img" />
                            <div>
                                <p>User</p>
                                <p>Amazing work!</p>
                            </div>
                        </li> */}
                        {post.reviews.length === 0 && <Message>No Reviews!</Message>}
                        {post.reviews.map((review => (
                            <li className='comment' key={review._id}>
                                <img src={review.img} alt="user-img" />
                                <div>
                                    <p>{review.name}</p>
                                    <p>{review.comment}</p>
                                </div>
                            </li>
                        )))}
                    </ul>
                    <form onSubmit={submitHandler}>
                        <div>
                            <span>Enter your Comment</span>
                            {errorPostReview && <Message>{errorPostReview}</Message>}
                            <input type="text" value={comment} onChange={(e) => setComment(e.target.value)}  placeholder='Enter your comment....' />
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