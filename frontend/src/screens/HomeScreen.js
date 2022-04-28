import React from 'react';
import Post from '../components/Post';
import posts from '../posts';

const HomeScreen = () => {
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