import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom";




function Navbar() {


        return (
        <div className="navBar">
            <nav className="sideNav" >
              <ul>
              <Link to="/Header"><li>HOME</li></Link> 
              <Link to="/about"><li>ABOUT US</li></Link>
              <Link to="/feature"><li>FEATURES</li></Link>
              <Link to="/Courses"><li>COURSES</li></Link>
              <Link to="/offer"><li>OFFER</li></Link>
              <Link to="/contact"><li>CONTACT</li></Link>
              </ul>
            </nav>
        </div>
    )
}

export default Navbar
