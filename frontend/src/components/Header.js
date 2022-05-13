import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
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
                <div class="header_div">
                    {userInfo ? (
                        <NavDropdown title={userInfo.name} id="username">
                            <div style={{
                                "display": "flex",
                                "flexDirection": "column",
                                "justifyContent": "center",
                                "alignItems": "center",
                                "background": "white",
                                "padding": "0.6rem",
                                "width": "8rem",
                                "boxShadow": "0 5px 10px rgba(0,0,0,0.3)"
                            }}>
                                <NavDropdown.Item>
                                    <Link to="/profile" style={{
                                        "padding": "0.3rem 0",
                                        "cursor": "pointer"
                                    }}>
                                        Profile
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={logoutHandler} style={{
                                    "padding": "0.3rem 0",
                                    "cursor": "pointer"
                                }}>
                                Logout
                                </NavDropdown.Item>
                            </div>
                      </NavDropdown>
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