import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { NavDropdown } from "react-bootstrap";
import { logout } from '../actions/userAction';



const Header = () => {
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }

    return(
        <header className="header">
            <div className="header_div">
                <img className="header_logo" src="/images/logo_header.svg" alt="logo" />
            </div>
            <div class="header_div">
                <span>Artistry</span>
            </div>
            <div>
                <div class="header_div" style={{"display": "flex","alignItems":"center"}}>
                    {userInfo ? (
                        <>
                        <img src={userInfo.img} alt="user-img" style={{"width": "30px", "height": "30px", "marginRight": "0.5rem"}} />
                        <NavDropdown title={userInfo.name} id="username">
                            <div style={{
                                "display": "flex",
                                "flexDirection": "column",
                                "alignItems": "flex-start",
                                "background": "white",
                                "padding": "0.6rem",
                                "width": "8rem",
                                "boxShadow": "0 5px 10px rgba(0,0,0,0.3)",
                                // "position": "relative",
                                // "zIndex":"200000"

                            }}>
                                <NavDropdown.Item style={{
                                        "padding": "0.3rem 0",
                                        "cursor": "pointer",
                                        "marginLeft": '1rem'
                                    }}>
                                        <Link to="/profile">
                                        <i class="fa fa-user" style={{
                                    "marginRight": "0.5rem"
                                }}  aria-hidden="true"></i> Profile
                                        </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item style={{
                                        "padding": "0.3rem 0",
                                        "cursor": "pointer",
                                        "marginLeft": '1rem'
                                    }}>
                                    <i class="fa fa-thumbs-up" style={{
                                    "marginRight": "0.5rem"
                                }}  aria-hidden="true"></i><Link to={'/like'}> Liked Post</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={logoutHandler} style={{
                                    "padding": "0.3rem 0",
                                    "cursor": "pointer",
                                    "marginLeft": '1rem'
                                }}>
                                <i class="fa fa-sign-out" style={{
                                    "marginRight": "0.5rem"
                                }} aria-hidden="true"></i> Logout
                                </NavDropdown.Item>
                            </div>
                      </NavDropdown>
                      </>
                    ): (
                        <div className='btn'>
                            <Link to={'/login'} className='login-btn'>Log-In</Link>
                            <Link to={'/signup'} className='signup-btn'>Sign-Up</Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header;