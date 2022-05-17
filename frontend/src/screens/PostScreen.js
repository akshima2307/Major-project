import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { listPostDetails } from '../actions/postAction';
import {getUserDetails} from '../actions/userAction';
import Message from '../components/Message';


const PostScreen = ({history,match}) => {
    const dispatch = useDispatch()

    const postDetails = useSelector(state => state.postDetails)
    const {loading,error, post}= postDetails

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
    },[dispatch, loading, history,post,userInfo])

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