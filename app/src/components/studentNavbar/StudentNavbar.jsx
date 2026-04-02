import React, { useState } from "react";
import "./styles/StudentNavbar.css";
import { NavLink } from "react-router-dom";

function StudentNavbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const links = [
    { label: "Dashboard", to: "/student/dashboard" },
    { label: "Courses", to: "/student/course" },
    { label: "Assessments", to: "/assessments" },
    { label: "Practice", to: "/practice" },
    { label: "Blogs", to: "/blogs" },
  ];

  return (
    <nav className="navbar">
      <div className="logo-section">
        <img src="/images/aideas-logo.png" alt="" />
      </div>

      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <div
        className="profile-section"
        onClick={() => setIsProfileOpen((prev) => !prev)}
      >
        <div className="profile-img">
          <img
            src="https://images.unsplash.com/photo-1615109398623-88346a601842?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww"
            alt=""
          />
        </div>
        <span className="username">Yashwanth</span>
        <span className="dropdown">
          <i className="fa-solid fa-angle-down"></i>
        </span>

        {isProfileOpen && (
          <div className="profile-dropdown">
            <button className="profile-dropdown-item">Profile</button>
            <button className="profile-dropdown-item">Logout</button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default StudentNavbar;