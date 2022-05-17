import React,{useEffect} from 'react';
import LogUserPost from '../components/LogUserPost';
import {useDispatch, useSelector} from 'react-redux'
import { listPostsByUser } from '../actions/postAction'
import Message from '../components/Message';

const UserPostScreen = ({match}) => {
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const postListOfUser = useSelector(state => state.postListOfUser)
    const {loading,error,posts} = postListOfUser

    useEffect(() => {
        if(userInfo){
            dispatch(listPostsByUser(match.params.id))
        }
    },[dispatch, userInfo, match])

    return(
        <div>
            <h2>Uploaded Posts</h2>
            {loading && <Message>Loading...</Message>}
            {error && <Message>{error}</Message>}
            {posts && posts.length === 0 && (<Message>NO UPLOADED POSTS</Message>)}
            {posts && (
                <div className='posts_container'>
                    {posts.map((post) => (
                        <LogUserPost post={post} key={post._id} />
                    ))}
                </div>
            )}

        </div>
    )
}

export default UserPostScreen