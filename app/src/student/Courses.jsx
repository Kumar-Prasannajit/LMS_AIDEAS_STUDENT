import React from "react";
import { useNavigate } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Python Backend _2601_10AM",
    desc: "Learn about Python",
    img: "/courseImages/python.jpg",
  },
  {
    id: 2,
    title: "React Js Backend _2601_10AM",
    desc: "Learn about React Js",
    img: "/courseImages/react1.jpg",
  },
  {
    id: 3,
    title: "Java Backend _2601_10AM",
    desc: "Learn about Java",
    img: "/courseImages/java.jpg",
  },
];

const Courses = () => {
  const navigate = useNavigate();

  return (
    <div
      className="p-[30px] min-h-screen"
      style={{
        background:
          "linear-gradient(rgba(252,238,254,1), rgba(255,255,255,1), rgba(235,249,252,1))",
      }}
    >
      <div
        className="flex items-center justify-between p-5 text-white mb-[30px]"
        style={{
          background:
            "linear-gradient(120deg, rgba(84,70,230,1), rgba(186,72,255,1))",
        }}
      >
        <div className="flex items-center gap-[15px]">
          <div className="relative inline-block">
            <img
              src="/courseImages/python.jpg"
              alt=""
              className="w-[170px] h-[90px] object-cover rounded-[6px]"
            />
            <i
              className="fa-regular fa-circle-play absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[32px] text-white"
              style={{ textShadow: "0 2px 4px rgba(0,0,0,0.4)" }}
            />
          </div>
          <div className="pl-[30px]">
            <h2 className="text-[26px]">Fullstack Python</h2>
            <p className="text-sm opacity-90">Learn about Python</p>
            <span>Mr. Yashwanth</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5 pr-10">
          <div className="bg-[rgba(255,255,255,0.2)] px-3.5 py-1.5 rounded-[6px] text-[13px]">
            <span className="inline-block h-2 w-2 bg-red-600 rounded-full mr-[5px]" />
            LIVE CLASS
          </div>
          <button className="bg-white border-none px-5 py-2 rounded-[6px] text-[#7c3aed] font-semibold cursor-pointer">
            JOIN NOW
          </button>
        </div>
      </div>

      <div className="bg-white p-5 border border-[rgba(217,217,217,1)]">
        <h3>All Courses</h3>

        <div className="flex justify-between my-[15px]">
          <div className="relative w-[60%]">
            <i className="fa-solid fa-magnifying-glass absolute top-1/2 left-[14px] -translate-y-1/2 text-gray-400 text-sm" />
            <input
              className="w-full py-2.5 px-3 pl-[36px] rounded-[20px] border border-[#ccc]"
              placeholder="search courses.."
            />
          </div>
          <div className="relative inline-block">
            <i className="fa-solid fa-filter absolute top-1/2 left-2.5 -translate-y-1/2 text-gray-500 pointer-events-none" />
            <select className="py-2.5 px-3 pl-[30px] rounded-lg border border-[#ccc]">
              <option>All Status</option>
            </select>
          </div>
        </div>

        <div
          className="max-h-[280px] overflow-y-auto flex flex-col gap-[15px] pr-[15px] scrollbar-thick"
          style={{
            scrollbarWidth: "auto",
            scrollbarColor: "#6B7280 #E5E7EB",
          }}
        >
          {courses.map((course) => (
            <div
              className="flex items-center justify-between bg-white p-2.5 rounded-lg border border-[#ddd] cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
              key={course.id}
              onClick={() => navigate("/course/session")}
            >
              <img
                src={course.img}
                alt=""
                className="w-[130px] h-[65px] object-cover rounded-[6px]"
              />
              <div className="flex-1 ml-[15px]">
                <h4 className="text-sm">{course.title}</h4>
                <p className="text-xs text-gray-500">{course.desc}</p>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <span className="text-xs text-gray-500">Records</span>
                <button className="bg-blue-500 text-white border-none px-3 py-1 rounded-[14px] text-[11px]">
                  VIDEOS
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          className="block mx-auto mt-5 text-white border-none px-[30px] py-2 rounded-[6px] font-semibold cursor-pointer"
          style={{
            background:
              "linear-gradient(90deg, rgba(112,71,237,1), rgba(184,72,255,1))",
          }}
        >
          View All
        </button>
      </div>
    </div>
  );
};

export default Courses;