import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import Message from './Message';
import {register} from '../actions/userAction';

const Signup = ({location,history}) => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage ] = useState(null)

    const dispatch = useDispatch()

    const userRegister  = useSelector(state => state.userRegister)

    const {loading,error,userInfo} = userRegister

    const redirect = location.search ? location.search.split("=")[1] : '/'

    useEffect(() => {
        if(userInfo){
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        // Dispatch Register
        if(password !== confirmPassword) {
            setMessage('Password do not match')
        }else{
            dispatch(register(name,email,password))
        }
    }
    
    return(
        <section className="form_container">
        <div className="form_left">
            <form className="form" onSubmit={submitHandler}>
                <img src="/images/logo_header.svg" alt="logo" />
                <h1>Sign-up to Artistry</h1>
                <p className="span">Find new ideas to try</p>
                {error && <Message style={{"margin": "1rem 0"}}>{error}</Message>}
                {loading && <Message style={{"margin": "1rem 0"}}>Loading...</Message>}
                {message && <Message style={{"margin": "1rem 0"}}>{message}</Message>}
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
                        <button type='submit' className="logInbtn" to="/homePage">Continue</button>
                    </div>
                </div>
            </form>
        </div>
        <div className="form_right">
            <img src="/images/img_4.jpg" alt="img" />
        </div>
    </section>
        )
}

export default Signup;
