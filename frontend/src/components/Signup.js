import React from 'react';
import {Link} from 'react-router-dom';

export default class Signup extends React.Component{
    render(){
        return(
            <section class="form_container">
        <div class="form_left">
            <form action="" class="form">
                <img src="/images/logo_header.svg" alt="logo" />
                <h1>Sign-up to Artistry</h1>
                <p class="span">Find new ideas to try</p>
                <div class="form_group">
                    {/* <EmailOutlinedIcon className="form_icon" /> */}
                    <input type="text" placeholder="Full Name" />
                </div>
                <div class="form_group">
                    {/* <EmailOutlinedIcon className="form_icon" /> */}
                    <input type="text" placeholder="Email Id" />
                </div>
                <div class="form_group">
                    {/* <VpnKeyOutlinedIcon className="form_icon"/> */}
                    <input type="password" placeholder="Password" />
                </div>
                <div class="form_btns">
                    <div class="logInbtn" style={{margin: 'auto'}}>
                        <Link to="/homePage">Continue</Link>
                    </div>
                </div>
            </form>
        </div>
        <div class="form_right">
            <img src="/images/img_4.jpg" alt="img" />
        </div>
    </section>
        )
    }
};