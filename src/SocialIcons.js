import React from 'react'
import "./SocialIcons.css"
import FaceBook from "./images/facebook.png"
import Instagram from "./images/instagram.png"
import Twitter from "./images/twitter.png"
import Linkedin from "./images/linkedin.png"

function SocialIcons() {
    return (
        <div className="social-icons">
            <img src={FaceBook} />
            <img src={Instagram} />
            <img src={Twitter} />
            <img src={Linkedin} />
        </div>
       
    )
}

export default SocialIcons
