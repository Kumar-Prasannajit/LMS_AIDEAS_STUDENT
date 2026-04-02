import './styles/App.css'
import Login from './auth/Login'
import StudentNavbar from './components/studentNavbar/StudentNavbar'
import Courses from './student/Courses'
import CourseSession from './student/CourseSession'
import StudentDashboard from './student/StudentDashboard'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
     

     <BrowserRouter>
      <StudentNavbar/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/student/dashboard' element={<StudentDashboard/>}/>
        <Route path='/student/course' element={<Courses/>}/>
        <Route path='/course/session' element={<CourseSession/>}/>
      </Routes>
     </BrowserRouter>


    </>
  )
}

export default App
