import React from 'react'
import "./Courses.css"
import Course from "./images/course.png"


function Courses() {
    return (
        <div className="courses">
            <div className="container course-row">
            <div className="course-left-col">
            <div className="course-text">
            <h1>Browse our top<br/>courses</h1>
      <span className="square"></span>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
      <button className="common-btn">View all Courses</button>
      <div className="line">
        <span className="line-1"></span><br />
        <span className="line-2"></span><br />
        <span className="line-3"></span>
      </div>
            </div>
            </div>
            <div className="course-right-col">
            <img src={Course} alt="course" />
            </div>
            </div>
    </div>
        
    )
}

export default Courses
