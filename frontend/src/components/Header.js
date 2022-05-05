import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return(
        <div class="header">
            <div class="header_div">
                <img className="header_logo" src="/images/logo_header.svg" alt="logo" />
            </div>
            <div class="header_div">
                <span>Artistry</span>
            </div>
            <div class="header_div">
                {/* <a><img className='user_img' src="../images/user_1.jpg" alt="user" /></a> */}
                <div className='btn'>
                    <Link to={'/login'} className='login-btn'>Log-In</Link>
                    <Link to={'/signup'} className='signup-btn'>Sign-Up</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;