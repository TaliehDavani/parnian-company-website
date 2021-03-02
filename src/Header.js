import React from 'react'
import "./Header.css"
import Logo from "./images/logo-Parnian1.png"

function Header() {
    return (
        <div className="header">
            <div className="container">
                <img src={Logo} alt="logo" className="logo" />
                <div className="header-text">
                <h1>The purpos is to<br /> make a web site using html and css</h1>
                <span className="square"></span>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                <button className="common-btn">Read More</button>
                <div className="line">
                    <span className="line-1"></span><br/>
                    <span className="line-2"></span><br/>
                    <span className="line-3"></span>
                 </div>

            </div>

            </div>
            
        </div>
        
    )
}

export default Header
