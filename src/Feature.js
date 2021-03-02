import React from 'react'
import "./Feature.css"
import Pic1 from "./images/pic-1.png"
import Pic2 from "./images/pic-2.png"
import Pic3 from "./images/pic-3.png"


function Feature() {
    return (
        <div className="features">
            <div className="features-row">
            <div className="feature-col">
                     <img src={Pic1} alt="feature" />
                     <h4>learn Anywhere</h4>
                     <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="feature-col">
                     <img src={Pic2} alt="feature" />
                     <h4>learn Anywhere</h4>
                     <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="feature-col">
                    <img src={Pic3} alt="feature" />
                        <h4>learn Anywhere</h4>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div className="feature-btn">
        <div className="line">
            <span className="line-1"></span><br/>
            <span className="line-2"></span><br/>
            <span className="line-3"></span>
        </div>
        <button className="common-btn">Start Free Traial</button>
    </div>
        </div>
    )
}

export default Feature
