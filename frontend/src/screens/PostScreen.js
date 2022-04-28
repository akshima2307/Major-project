import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PostScreen = ({match}) => {
    const [post,setPost] = useState({})
    useEffect(() => {
        const fetchPost = async () => {
            const {data} = await axios.get(`/api/posts/${match.params.id}`)
            setPost(data) 
        }
        fetchPost()
    }, [match])
    return(
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
                    <div className='art-details'>
                        <button><i class="fa fa-thumbs-up" aria-hidden="true"></i>&nbsp;{post.likes}</button>
                        <button><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;{post.views}</button>
                    </div>
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
    )
}

export default PostScreen;