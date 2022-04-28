import React,{useState,useEffect} from 'react';
import Post from '../components/Post';
import axios from 'axios';

const HomeScreen = () => {
    const [posts,setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const {data} = await axios.get('/api/posts')
            setPosts(data) 
        }
        fetchPosts()
    }, [])


    return(
        <>
            <h2 style={{textAlign: 'center', fontWeight: 500,color:"var(--primary-color)", textTransform:"uppercase"}}>Latest Posts</h2>
            <div className='posts_container'>
                {posts.map((post) => (
                    <Post post={post} key={post._id} />
                ))}
            </div>
        </>
    )

}

export default HomeScreen;