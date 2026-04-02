

import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Courses.css";

const courses = [
  {
    id: 1,
    title: "Python Backend _2601_10AM",
    desc: "Learn about Python",
    img: "/courseImages/python.jpg"
  },
  {
    id: 2,
    title: "React Js Backend _2601_10AM",
    desc: "Learn about React Js",
    img: "/courseImages/react1.jpg"
  },
  {
    id: 3,
    title: "Java Backend _2601_10AM",
    desc: "Learn about Java",
    img: "/courseImages/java.jpg"
  }
];

const Courses =()=> {
  const navigate = useNavigate();

  return (
    <div className="dashboard">


      <div className="live-banner">
        <div className="banner-left">
          <div className="banner-image-wrapper">
            <img
              src="/courseImages/python.jpg"
              alt=""
            />
            <i className="fa-regular fa-circle-play"></i>
          </div>

          <div className="banner-text">
            <h2>Fullstack Python</h2>
            <p>Learn about Python</p>
            <span>Mr. Yashwanth</span>
          </div>
        </div>
        <div className="banner-right">

          <div className="live">
            <span className="dot"></span> LIVE CLASS
          </div>

          <button className="join-btn">JOIN NOW</button>

        </div>

      </div>



      <div className="courses">

        <h3>All Courses</h3>

        <div className="course-header">

          <div className="search-input-wrapper">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input placeholder="search courses.." />
          </div>

          <div className="status-filter">
            <i className="fa-solid fa-filter"></i>
            <select>
              <option>All Status</option>
            </select>
          </div>

        </div>


        <div className="course-list">

          {courses.map((course) => (

            <div 
              className="course-card" 
              key={course.id} 
              onClick={() => navigate("/course/session")}
            >

              <img src={course.img} alt="" />

              <div className="course-info">

                <h4>{course.title}</h4>

                <p>{course.desc}</p>

              </div>

              <div className="record">

                <span>Records</span>

                <button>VIDEOS</button>

              </div>

            </div>

          ))}

        </div>


        <button className="view-btn">View All</button>

      </div>

    </div>
  );
}

export default Courses;