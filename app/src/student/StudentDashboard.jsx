import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/StudentDashboard.css";
import rawData from "../RawData.json";


const courses = rawData.courses || [];

const StudentDashboard = ()=> {
  const navigate = useNavigate();
  return (
    <div className="dashboard">
        

      <div className="banner">
        <div className="banner-bg" />
        <div className="banner-image" />

        <div className="banner-content">
          <p className="welcome">Welcome ! 👋</p>

          <h1>
            IDEATE <span> _ </span>
            <span className="yellow">INNOVATE</span>
            <span> _ </span> INSPIRE
          </h1>

          <p className="subtitle">
            Transform your Learning Journey, Access World-Class Courses
          </p>
        </div>
      </div>

      <div className="course-container">
        <h2>Continue Learning</h2>

        <div className="course-grid">
          {courses.map((course) => (
            <div 
              className="card" 
              key={course.id} 
              onClick={() => navigate("/course/session")}
            >
              <img src={course.img} alt="" />

              <div className="card-body">
                <h3>{course.title}</h3>

                <div className="card-meta">
                  <p className="desc">{course.desc}</p>
                  <span className="date">{course.date}</span>
                </div>

                <div className="card-actions">
                  <button className="join">JOIN</button>
                  <button className="videos">VIDEOS</button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

export default StudentDashboard;