import React from 'react';

const Contact = () => {
    return(
    <div class="contact_container">
        <form action="" class="contact_form">
            <h1>Contact Us</h1>
            <div class="form_group">
                <span>Your Name</span>
                <input type="text" placeholder="Enter your name"/>
            </div>
            <div class="form_group">
                <span>Your Email</span>
                <input type="email" placeholder="Enter your email"/>
            </div>
            <div class="form_group">
                <span>Subject</span>
                <input type="text" placeholder="Enter the subject"/>
            </div>
            <div class="form_group">
                <span>Message</span>
                <textarea name="" id="" cols="30" rows="10" placeholder="Enter your message"></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
        <img src='/images/img_2.jpg' alt='img' />
    </div>
    )
}

export default Contact;