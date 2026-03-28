
import "./CourseSession.css"
import { useState } from "react"

const lectures = [
  {date:"31-Jan-26"},
  {date:"31-Jan-26"},
  {date:"31-Jan-26"},
  {date:"31-Jan-26"},
  {date:"31-Jan-26"},
  {date:"31-Jan-26"},
  {date:"31-Jan-26"},
  {date:"31-Jan-26"},
  {date:"31-Jan-26"},
]

function CourseSession(){

 const [tab,setTab] = useState("videos")

 return(
  <div className="course-session-dashboard">

      <div className="leftPanel">

        <div className="courseTitle">
            <h3>Python Backend _2601_10AM</h3>
            <p>Yashwanth</p>
        </div>

        <div className="lectureList">
          {lectures.map((item,index)=>(
            <div className="lectureItem" key={index}>
                {item.date}
            </div>
          ))}
        </div>

      </div>


      <div className="rightPanel">

        <div className="tabs">
            <button 
            className={tab==="videos" ? "active":""}
            onClick={()=>setTab("videos")}
            >
            Videos
            </button>

            <button
            className={tab==="notes" ? "active":""}
            onClick={()=>setTab("notes")}
            >
            Notes
            </button>
        </div>



        {tab==="videos" && (
          <div className="videoContainer">

            <div className="videoWrapper">
                <iframe
                src="https://www.youtube.com/embed/kqtD5dpn9C8"
                title="video"
                allowFullScreen
                ></iframe>
            </div>

          </div>
        )}


        {tab==="notes" && (
          <div className="notesContainer">
            <pre className="rawNotes">
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
 )

}

export default CourseSession