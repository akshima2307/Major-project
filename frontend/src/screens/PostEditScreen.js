import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import {listPostDetails, updatePost} from '../actions/postAction'
import { POST_UPDATE_RESET } from '../constants/postConstants';


const PostEditScreen = ({match,history}) => {
    const dispatch = useDispatch()
    const postId = match.params.id

    const [title,setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [img, setImg] = useState("")
    const [uploading, setUploading] = useState(false)

    const postDetails = useSelector((state) => state.postDetails)
    const {loading, error, post} = postDetails

    const postUpdate = useSelector((state) => state.postUpdate)
    const {loading: loadingUpdate, error: errorUpdate, success:successUpdate} = postUpdate
    
    useEffect(() => {
        if(successUpdate){
            dispatch({type: POST_UPDATE_RESET})
            history.push('/profile')
        }else{
            if(!post.title || post._id !== postId){
                dispatch(listPostDetails(postId))
            }else{
                setTitle(post.title)
                setDescription(post.description)
                setCategory(post.category)
                setImg(post.img)
            }
        }
    },[dispatch,postId,post,successUpdate, history])

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('img', file)
        setUploading(true)

        try{
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }

            const {data} = await axios.post('/api/upload', formData, config)

            setImg(data)
            setUploading(false)

        }catch(error){  
            console.error(error)
            setUploading(false)
        }
    } 

    const submitHandler = (e) => {
        e.preventDefault()
        // Update Post
        dispatch(updatePost({
            _id: postId,
            title,
            description,
            category,
            img
        }))
    }

    return (
        <div>
            <span>Edit Post</span>
            {loading && <Message>Loading...</Message>}
            {error && <Message>{error}</Message>}
            {loadingUpdate && <Message>Loading...</Message>}
            {errorUpdate && <Message>{errorUpdate}</Message>}
            <form onSubmit={submitHandler}>
                <div>
                    <label>Post title</label>
                    <input 
                        type='text' 
                        placeholder="Enter post title..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}    
                    />
                </div>
                <div>
                    <label>Description</label>
                    <input 
                        type='text' 
                        placeholder="Enter description..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}    
                    />
                </div>
                <div>
                    <label>Category</label>
                    <input 
                        type='text' 
                        placeholder="Enter post title..."
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}    
                    />
                </div>
                <div>
                    <label>Image</label>
                    <input 
                        type='text' 
                        placeholder="Enter description..."
                        value={img}
                        onChange={(e) => setImg(e.target.value)}    
                    />
                    <input type="file"  onChange={uploadFileHandler}/>
                    {uploading && <Message>Loading...</Message>}
                </div>
                <button type='submit'>Update</button>
            </form>
        </div>
    )
}

export default PostEditScreen 