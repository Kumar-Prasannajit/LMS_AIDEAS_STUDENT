import React from "react";
import { useNavigate } from "react-router-dom";
import rawData from "../RawData.json";

const courses = rawData.courses || [];

const StudentDashboard = () => {
  const navigate = useNavigate();
  return (
    <div
      className="p-[30px] min-h-screen"
      style={{
        background:
          "linear-gradient(rgba(252,238,254,1), rgba(255,255,255,1), rgba(235,249,252,1))",
      }}
    >
      <div className="relative rounded-[10px] mb-[30px] overflow-hidden min-h-[220px]">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(168,85,247,0.65), rgba(162,109,247,0.85), rgba(119,71,239,1))",
          }}
        />
        <div
          className="absolute inset-0 opacity-75"
          style={{
            backgroundImage: "url('/images/login.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "brightness(1.05)",
          }}
        />
        <div className="relative z-[999] pl-[200px] pr-[30px] py-[30px] text-white flex flex-col justify-center gap-2 h-full">
          <p className="text-[#f9fafb]">Welcome ! 👋</p>
          <h1 className="text-[40px] font-extrabold text-white my-[10px]">
            IDEATE <span> _ </span>
            <span className="text-[rgba(255,200,61,1)]">INNOVATE</span>
            <span> _ </span> INSPIRE
          </h1>
          <p className="text-[#f9fafb]">
            Transform your Learning Journey, Access World-Class Courses
          </p>
        </div>
      </div>

      <div className="bg-white p-5 rounded-lg border border-[rgba(217,217,217,1)]">
        <h2 className="mb-5">Continue Learning</h2>

        <div
          className="grid gap-5 max-h-[420px] overflow-y-auto pr-2.5 mt-2 scrollbar-thick"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            scrollbarWidth: "auto",
            scrollbarColor: "#6B7280 #E5E7EB",
          }}
        >
          {courses.map((course) => (
            <div
              className="bg-white rounded-lg border border-[rgba(204,204,204,1)] overflow-hidden transition-all duration-300 p-2 cursor-pointer hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)]"
              key={course.id}
              onClick={() => navigate("/course/session")}
            >
              <img
                src={course.img}
                alt=""
                className="w-full h-[140px] object-cover rounded-lg"
              />
              <div className="p-3">
                <h3 className="text-sm mb-1 font-medium">{course.title}</h3>
                <div className="flex justify-between items-center gap-2 mb-2.5">
                  <p className="text-xs text-gray-500">{course.desc}</p>
                  <span className="text-[11px] text-[#777]">{course.date}</span>
                </div>
                <div className="flex justify-between items-center w-full mt-2">
                  <button className="bg-green-500 border-none text-white px-3.5 py-[5px] rounded-[20px] text-[11px] cursor-pointer">
                    JOIN
                  </button>
                  <button className="cursor-pointer bg-blue-500 border-none text-white px-3.5 py-[5px] rounded-[20px] text-[11px]">
                    VIDEOS
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;