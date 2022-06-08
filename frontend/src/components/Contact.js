import React from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
    function sendEmail(e){
        e.preventDefault()

        emailjs.sendForm(
            "service_0n1kdns",
            "template_nfa0w7o",
            e.target,
            "S_v9R1iyX-n65aF5m"
            ).then(res => {
                alert("Message Send!!")
            }).catch(error => console.log(error))
    }
    return(
    <div class="contact_container">
        <form class="contact_form" onSubmit={sendEmail}>
            <h1>Contact Us</h1>
            <div class="form_group">
                <span>Your Name</span>
                <input type="text" name='name' placeholder="Enter your name"/>
            </div>
            <div class="form_group">
                <span>Your Email</span>
                <input type="email" name='email' placeholder="Enter your email"/>
            </div>
            <div class="form_group">
                <span>Subject</span>
                <input type="text" name='subject' placeholder="Enter the subject"/>
            </div>
            <div class="form_group">
                <span>Message</span>
                <textarea name='message' id="" cols="30" rows="10" placeholder="Enter your message"></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
        <img src='/images/img_2.jpg' alt='img' />
    </div>
    )
}

export default Contact;