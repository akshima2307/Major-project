import { Link } from 'react-router-dom';

export default function LogIn(){
    return(
        <section class="form_container">
        <div class="form_left">
            <form action="" class="form">
                <img src="/images/logo_header.svg" alt="logo" />
                <h1>Welcome to Artistry</h1>
                <p class="span">Find new ideas to try</p>
                <div class="form_group">
                    {/* <EmailOutlinedIcon className="form_icon" /> */}
                    <input type="text" placeholder="Email Id" />
                </div>
                <div class="form_group">
                    {/* <VpnKeyOutlinedIcon className="form_icon"/> */}
                    <input type="password" placeholder="Password" />
                </div>
                <div class="form_btns">
                    <div class="checkbox">
                        <input type="checkbox" id="Remember" name="" value="checked" />
                        <label for="Remember">Remember me</label>
                    </div>
                    <div class="logInbtn">
                        <Link to="/homePage">LOGIN</Link>
                    </div>
                </div>
                <div class="form_span">
                    <span>Register now</span>
                    <span>Forget password?</span>
                </div>
            </form>
        </div>
        <div class="form_right">
            <img src="/images/img_4.jpg" alt="img" />
        </div>
    </section>
    )
}