import React, {useState,useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message';
import {getUserDetails, updateUserProfile} from '../actions/userAction';

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

    useEffect(() => {
        if(!userInfo){
            history.push('/login')
        }else{
            if(!user.name){
                dispatch(getUserDetails('profile'))
            }else{
                console.log(user.name)
                setName(user.name)
                setEmail(user.email)

            }
        }
    }, [dispatch,history, userInfo,user])

    const submitHandler = (e) => {
        e.preventDefault()
        if(password !== confirmPassword) {
            setMessage('Password do not match')
        }else{
            // Dispatch update profile
            dispatch(updateUserProfile({ id: user._id, name, email, password }));
        }
    }
    
    return(
    <section className="form_container">
        <div className="form_left" style={{width: "70%"}}>
            <form className="form" onSubmit={submitHandler}>
                <h1 style={{textAlign: 'left', marginBottom: "3rem"}}>User Profile Page</h1>
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
                        <button type='submit' className="logInbtn" to="/homePage">Update</button>
                    </div>
                </div>
            </form>
        </div>
        <div className="form_right">
           
        </div>
    </section>
        )
}

export default ProfileScreen;