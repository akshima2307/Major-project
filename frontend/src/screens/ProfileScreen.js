import React, {useState,useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message';
import {getUserDetails, updateUserProfile} from '../actions/userAction';
import { createPost } from '../actions/postAction';
import { POST_CREATE_RESET } from '../constants/postConstants';

const ProfileScreen = ({location,history}) => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
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
            if(!user.name){
                dispatch(getUserDetails('profile'))
            }else{
                setName(user.name)
                setEmail(user.email)

            }
        }
        dispatch({type: POST_CREATE_RESET})
        if(successCreate){
            console.log(createdPost._id)
            history.push(`/user/post/${createdPost._id}/edit`)
        }
    }, [dispatch,history,createdPost,successCreate,userInfo,user])

    const submitHandler = (e) => {
        e.preventDefault()
        if(password !== confirmPassword) {
            setMessage('Password do not match')
        }else{
            // Dispatch update profile
            dispatch(updateUserProfile({ id: user._id, name, email, password }));
        }
    }

    const createPostHandler = () => {
        dispatch(createPost())
    }
    
    return(
    <section className="profile">
        <div className="profile_details">
            <form className="profile_form" onSubmit={submitHandler}>
                <div className='profile_header'>   
                    <h2>User Profile</h2>
                    <button onClick={createPostHandler}>Create A Post</button>
                </div>
                {error && <Message style={{"margin": "1rem 0"}}>{error}</Message>}
                {loading && <Message style={{"margin": "1rem 0"}}>Loading...</Message>}
                {message && <Message style={{"margin": "1rem 0"}}>{message}</Message>}
                {success && <Message style={{"margin": "1rem 0"}}>Profile Updated</Message>}
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
                <div className="form_btns">
                    <div  style={{margin: 'auto'}}>
                        <button type='submit' to="/homePage">Update</button>
                    </div>
                </div>
            </form>
        </div>
    </section>
        )
}

export default ProfileScreen;