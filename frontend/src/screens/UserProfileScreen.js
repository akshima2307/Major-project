import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { getUserDetails } from '../actions/userAction';
import Message from '../components/Message';

const UserProfileScreen = ({history,match}) => {
    const dispatch = useDispatch()

    const userDetails  = useSelector((state) => state.userDetails)
    const {loading,error,user} = userDetails

    const userLogin  = useSelector((state) => state.userLogin)
    const {userInfo} = userLogin
    useEffect(() => {
        if(!userInfo){
            history.push('/login')
        }else{
            dispatch(getUserDetails(match.params.id))
        }
    }, [dispatch, match])
    return(
        <section className="profile">
        <div className="profile_details">
            <div className='profile_header'>   
                <h2>User Profile</h2>
                <div>
                    <Link to={`/userpost/${user._id}`}>Uploaded Post</Link>
                </div>
            </div>
            <form className="profile_form">
                {error && <Message style={{"margin": "1rem 0"}}>{error}</Message>}
                {loading && <Message style={{"margin": "1rem 0"}}>Loading...</Message>}
                <div className='form_group'>
                    {user.name && <img src={user.img} alt="user-img" />}
                    {/* <input 
                        type='text' 
                        placeholder="Enter url for the img..."
                        value={img}
                        onChange={(e) => setImg(e.target.value)}    
                    /> */}
                </div>
                <div className='form_groups'>
                    <div className="form_group">
                        <label for="name">Name</label>
                        {/* <EmailOutlinedIcon className="form_icon" /> */}
                        <input type="text" id='name' placeholder="Full Name" value={user.name} />
                    </div>
                    <div className="form_group">
                        <label for="email">Email Address</label>
                        {/* <EmailOutlinedIcon className="form_icon" /> */}
                        <input type="email" id='email' placeholder="Email Id" value={user.email} />
                    </div>
                </div>
                <div className="form_group">
                        <label for="email">Description</label>
                        {/* <EmailOutlinedIcon className="form_icon" /> */}
                        <input type="text" id='description' placeholder="description" value={user.description} />
                    </div>
            </form>
        </div>
    </section>
    )
}

export default UserProfileScreen;