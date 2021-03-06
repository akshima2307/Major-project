import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message';
import {getUserDetails, updateUserProfile} from '../actions/userAction';
import { createPost } from '../actions/postAction';
import { POST_CREATE_RESET } from '../constants/postConstants';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';


const ProfileScreen = ({location,history}) => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [img, setImg] = useState('')
    const [description,setDescription] = useState("")
    const [uploading, setUploading] = useState(false)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage ] = useState(null)

    const dispatch = useDispatch()

    const userDetails  = useSelector((state) => state.userDetails)
    const {loading,error,user} = userDetails

    const userLogin  = useSelector((state) => state.userLogin)
    const {userInfo} = userLogin

    const userUpdateProfile  = useSelector((state) => state.userUpdateProfile)
    const {success} = userUpdateProfile

    const postCreate = useSelector(state => state.postCreate)
    const {success: successCreate, post: createdPost} = postCreate

    useEffect(() => {
        if(!userInfo){
            history.push('/login')
        }else{
            if(!user || !user.name || success){
                dispatch({type: USER_UPDATE_PROFILE_RESET})
                dispatch(getUserDetails('profile'))
            }else{
                setName(user.name)
                setEmail(user.email)
                setImg(user.img)
                setDescription(user.description)
            }
        }
        dispatch({type: POST_CREATE_RESET})
        if(successCreate){
            console.log(createdPost._id)
            history.push(`/user/post/${createdPost._id}/edit`)
        }
    }, [dispatch,history,createdPost,success,successCreate,userInfo,user,userUpdateProfile])

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
        if(password !== confirmPassword) {
            setMessage('Password do not match')
        }else{
            // Dispatch update profile
            dispatch(updateUserProfile({ 
                id: user._id,
                name, 
                email, 
                password,
                img 
            }));
        }
    }

    const createPostHandler = () => {
        dispatch(createPost())
    }
    
    return(
    <section className="profile">
        <div className="profile_details">
            <div className='profile_header'>   
                <h2>Edit Your Profile</h2>
                {userInfo && userInfo.isArtist === "Artist" && (
                    <div>
                        <Link to={`/userpost/${user._id}`}>Uploaded Post</Link>
                        <button onClick={createPostHandler}><i class="fa fa-plus" aria-hidden="true"></i> Create A Post</button>
                    </div>
                ) }
            </div>
            <form className="profile_form" onSubmit={submitHandler}>
                {error && <Message style={{"margin": "1rem 0"}}>{error}</Message>}
                {loading && <Message style={{"margin": "1rem 0"}}>Loading...</Message>}
                {message && <Message style={{"margin": "1rem 0"}}>{message}</Message>}
                {success && <Message style={{"margin": "1rem 0"}}>Profile Updated</Message>}
                <div className='form_group'>
                    {user.name && <img src={user.img} alt="user-img" />}
                    {/* <input 
                        type='text' 
                        placeholder="Enter url for the img..."
                        value={img}
                        onChange={(e) => setImg(e.target.value)}    
                    /> */}
                    <input type="file"  onChange={uploadFileHandler}/>
                    {uploading && <Message>Loading...</Message>}
                </div>
                <div className='form_groups'>
                    <div className="form_group">
                        <label for="name">Name</label>
                        {/* <EmailOutlinedIcon className="form_icon" /> */}
                        <input type="text" id='name' placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form_group">
                        <label for="email">Email Address</label>
                        {/* <EmailOutlinedIcon className="form_icon" /> */}
                        <input type="email" id='email' placeholder="Email Id" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>
                <div className="form_group">
                        <label for="email">Description</label>
                        {/* <EmailOutlinedIcon className="form_icon" /> */}
                        <input type="text" id='description' placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                <span style={{
                    'fontSize': '1.1rem',
                    'color':'var(--primary-color)',
                    "marginTop": '2rem',
                    'display':'block'
                    }}>Change Password</span>
                <div className='form_groups'>
                    <div className="form_group">
                        <label for="password">Password</label>
                        {/* <VpnKeyOutlinedIcon className="form_icon"/> */}
                        <input type="password" id='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="form_group">
                        <label for="confirmPassword">Confirm Password</label>
                        {/* <VpnKeyOutlinedIcon className="form_icon"/> */}
                        <input type="password" id='confirmPassword' placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                </div>
                <div className="form_btns">
                    <div  style={{margin: 'auto'}}>
                        <button type='submit'>Update</button>
                    </div>
                </div>
            </form>
        </div>
    </section>
        )
}

export default ProfileScreen;