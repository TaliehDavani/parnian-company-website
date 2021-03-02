import React from 'react'
import "./About.css"
import Abouts from "./images/about.png"


function About() {
    return (
        <div className="about">
            <div className="about-left-col">
              <img src={Abouts} alt="about" />
           </div>
           <div className="about-right-col">
              <div className="about-text">
                  <h1>About us</h1>
                  <span className="square"></span>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><br/><br/>
            <div className="line">
                <span className="line-1"></span><br/>
                <span className="line-2"></span><br/>
                <span className="line-3"></span>
            </div>
               <h2>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</h2>
               <h3>---Abigial adams</h3>
            </div>
        </div>
        </div>
    )
}

export default About
