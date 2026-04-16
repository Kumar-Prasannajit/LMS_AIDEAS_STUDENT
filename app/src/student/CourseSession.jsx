import { useState } from "react";

const lectures = [
  { date: "31-Jan-26" },
  { date: "31-Jan-26" },
  { date: "31-Jan-26" },
  { date: "31-Jan-26" },
  { date: "31-Jan-26" },
  { date: "31-Jan-26" },
  { date: "31-Jan-26" },
  { date: "31-Jan-26" },
  { date: "31-Jan-26" },
];

function CourseSession() {
  const [tab, setTab] = useState("videos");

  return (
    <div
      className="flex gap-5 p-5 h-screen"
      style={{
        background:
          "linear-gradient(rgba(252,238,254,1), rgba(255,255,255,1), rgba(235,249,252,1))",
      }}
    >
      <div className="w-[260px] bg-[#f4f4f4] rounded-[10px] p-[15px] flex flex-col">
        <div className="border-b border-[#ddd] pb-2.5 mb-2.5">
          <h3 className="text-sm font-semibold">Python Backend _2601_10AM</h3>
          <p className="text-[13px] text-gray-500">Yashwanth</p>
        </div>

        <div
          className="overflow-y-auto h-full pr-2.5 scrollbar-medium"
          style={{
            scrollbarWidth: "auto",
            scrollbarColor: "#6B7280 #E5E7EB",
          }}
        >
          {lectures.map((item, index) => (
            <div
              className="px-3.5 py-3.5 border-b border-[#e5e5e5] cursor-pointer text-sm hover:bg-[#e8f0ff] hover:text-[#2a6df4] hover:font-medium"
              key={index}
            >
              {item.date}
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 bg-white rounded-[10px] p-5 flex flex-col">
        <div className="flex gap-5 mb-5">
          <button
            className={`border-none bg-transparent text-[15px] cursor-pointer pb-1.5 ${
              tab === "videos"
                ? "border-b-2 border-black font-semibold"
                : ""
            }`}
            onClick={() => setTab("videos")}
          >
            Videos
          </button>
          <button
            className={`border-none bg-transparent text-[15px] cursor-pointer pb-1.5 ${
              tab === "notes"
                ? "border-b-2 border-black font-semibold"
                : ""
            }`}
            onClick={() => setTab("notes")}
          >
            Notes
          </button>
        </div>

        {tab === "videos" && (
          <div className="flex-1 bg-[#eee] rounded-lg flex flex-col items-center justify-center overflow-hidden">
            <div className="w-full max-w-[900px] relative" style={{ aspectRatio: "16/9" }}>
              <iframe
                src="https://www.youtube.com/embed/kqtD5dpn9C8"
                title="video"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg border-none"
              />
            </div>
          </div>
        )}

        {tab === "notes" && (
          <div
            className="p-5 overflow-y-auto flex-1 bg-[#f9fafb] rounded-lg scrollbar-medium"
            style={{
              scrollbarWidth: "auto",
              scrollbarColor: "#6B7280 #E5E7EB",
            }}
          >
            <pre className="font-mono text-sm leading-[1.6] text-[#374151] whitespace-pre-wrap break-all">
{`data=[
  {
    "id": 1,
    "quote": "Your heart is the size of an ocean. Go find yourself in its hidden depths.",
    "author": "Rumi"
  },
  {
    "id": 2,
    "quote": "The Bay of Bengal is hit frequently by cyclones. The months of November and May, in particular, are dangerous in this regard.",
    "author": "Abdul Kalam"
  },
  {
    "id": 3,
    "quote": "Thinking is the capital, Enterprise is the way, Hard Work is the solution.",
    "author": "Abdul Kalam"
  },
  {
    "id": 4,
    "quote": "If You Can'T Make It Good, At Least Make It Look Good.",
    "author": "Bill Gates"
  }
]`}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default CourseSession;