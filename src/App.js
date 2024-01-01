import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import AllStudents from "./components/allstudents"
import DeleteStudentById from "./components/deletestudent"
import GetStudentById from "./components/getstudentById"
import PostStudentDetails from "./components/postudentDetails"
import UpdateStudentDetails from "./components/updatestudent"
import Home from './components/home'
import Navbar from './components/navbar'

function App() {
    return (
  

      <div>
        <Router>
          <Navbar />
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/studentms/getdetails" element={<GetStudentById />} />
          <Route path="/studentms/allstudents" element={<AllStudents />} />
          <Route path="/studentms/createstudent" element={<PostStudentDetails />} />
          <Route path="/studentms/delete" element={<DeleteStudentById />} />
          <Route path="/studentms/update" element={<UpdateStudentDetails />} />
  
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </div>
    )
  }
  export default App