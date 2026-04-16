import React, { useState } from "react";
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
    <nav
      className="w-full h-[60px] flex items-center justify-between px-[30px]"
      style={{
        background:
          "linear-gradient(90deg, rgba(119,71,239,1), rgba(167,72,250,1))",
      }}
    >
      <div className="flex items-center gap-2.5">
        <img
          src="/images/aideas-logo.png"
          alt=""
          className="h-[70px] w-[103px] object-contain block"
        />
      </div>

      <ul className="list-none flex gap-[70px]">
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                `text-white text-[15px] cursor-pointer border-b-[3px] transition-all duration-300 no-underline inline-block ${
                  isActive
                    ? "border-white font-medium"
                    : "border-transparent hover:opacity-90"
                }`
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <div
        className="flex items-center gap-2.5 text-white cursor-pointer relative"
        onClick={() => setIsProfileOpen((prev) => !prev)}
      >
        <div className="w-[35px] h-[35px] bg-[#ddd] rounded-full">
          <img
            src="https://images.unsplash.com/photo-1615109398623-88346a601842?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww"
            alt=""
            className="w-full h-full object-cover rounded-full block"
          />
        </div>
        <span className="text-[15px]">Yashwanth</span>
        <span className="text-xs">
          <i className="fa-solid fa-angle-down" />
        </span>

        {isProfileOpen && (
          <div className="absolute top-[120%] right-0 bg-white text-[#333] rounded-[6px] shadow-[0_4px_12px_rgba(0,0,0,0.18)] py-2 min-w-[140px] z-10">
            <button className="w-full px-4 py-2 bg-transparent border-none text-left text-sm cursor-pointer hover:bg-[#f3f3f3]">
              Profile
            </button>
            <button className="w-full px-4 py-2 bg-transparent border-none text-left text-sm cursor-pointer hover:bg-[#f3f3f3]">
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default StudentNavbar;