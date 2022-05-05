import React,{useEffect} from 'react';
import Post from '../components/Post';
import {useDispatch, useSelector} from 'react-redux'
import { listPosts } from '../actions/postAction'

const HomeScreen = () => {

    const dispatch = useDispatch()
    const postList = useSelector(state => state.postList)
    const {loading,error,posts} = postList

    useEffect(() => {
        dispatch(listPosts())
    }, [dispatch])

    return(
        <>
            <h2 style={{textAlign: 'center', fontWeight: 500,color:"var(--primary-color)", textTransform:"uppercase", marginTop: '2rem'}}>Latest Posts</h2>
            {loading ? <span style={{
                display: 'block',
                textAlign: 'center',
                marginTop: '6rem'
            }}>Loading...</span> : error ? <span style={{
                display: 'block',
                textAlign: 'center',
                marginTop: '6rem'
            }}>{error}</span> :  
                <div className='posts_container'>
                    {posts.map((post) => (
                        <Post post={post} key={post._id} />
                    ))}
                </div>
            }
        </>
    )

}

export default HomeScreen;