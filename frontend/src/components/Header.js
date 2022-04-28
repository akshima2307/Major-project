import React from 'react';

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
                    <button className='login-btn'>Log-In</button>
                    <button className='signup-btn'>Sign-Up</button>
                </div>
            </div>
        </div>
    )
}

export default Header;