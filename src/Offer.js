import React from 'react'
import "./Offer.css"
import Offers from "./images/offer.png"

function Offer() {
    return (
        <div className="offer">
            <div className="about-left-col">
              <img src={Offers} alt="about" />
            </div>
            <div className="about-right-col">
            <div className="about-text"><h1>Limitless learning,<br/>limiless posslbit</h1><span class="square"></span>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            <button className="common-btn">Start free </button>
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

export default Offer
