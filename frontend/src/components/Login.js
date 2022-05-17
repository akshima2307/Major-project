import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import Message from './Message';
import {login} from '../actions/userAction';

const LogIn = ({history, location}) => {
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const userLogin  = useSelector(state => state.userLogin)

    const {loading,error,userInfo} = userLogin

    const redirect = location.search ? location.search.split("=")[1] : '/home'

    useEffect(() => {
        if(userInfo){
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return(
    <section className="form_container">
        <div className="form_left">
            <form onSubmit={submitHandler} className="form">
                <img src="/images/logo_header.svg" alt="logo" />
                <h1>Welcome to Artistry</h1>
                <p className="span">Find new ideas to try</p>
                {error && <Message style={{"margin": "1rem 0"}}>{error}</Message>}
                {loading && <Message style={{"margin": "1rem 0"}}>Loading...</Message>}
                <div className="form_group">
                    <label for="email">Email</label>
                    <input type="email" id='email' placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form_group">
                <label for="password">Password</label>
                    {/* <VpnKeyOutlinedIcon className="form_icon"/> */}
                    <input type="password" id='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}  />
                </div>
                <div className="form_btns">
                    <button className="logInbtn" type='submit'>LOGIN</button>
                </div>
                <div className="form_span">
                    <Link to={redirect ? `/signup?redirect=${redirect}`: '/signup'}>Register now</Link>
                    {/* <span>Forget password?</span> */}
                </div>
            </form>
        </div>
        <div className="form_right">
            <img src="/images/img_4.jpg" alt="img" />
        </div>
    </section>
    )
}

export default LogIn;