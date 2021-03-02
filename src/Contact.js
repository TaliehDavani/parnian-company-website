import React from 'react'
import "./Offer.css"
import Contacts from "./images/contact.png"
import "./Contact.css"

function Contact() {
    return (
        <div className="contact">
          <div className="container contact-row">
            <div className="contact-left-row">
            <h1>Sign up to join our<br />design community</h1>
            <form>
                <input type="text" placeholder="Enter Name" />
                <input type="email" placeholder="Enter Email" />
                <input type="password" placeholder="Enter Password" />
                <div className="btn-box">
                    <button className="common-btn">Sign Up</button>
                    <button className="common-btn">Start Free Trial</button>
                </div>
             </form>
             <div className="line">
                <span className="line-1"></span><br />
                <span className="line-2"></span><br />
                <span className="line-3"></span>
             </div>
            </div>
            <div className="contact-right-row">
                <img src={Contacts} alt="contact" />
            </div>
          </div>
        </div>
    )
}

export default Contact
