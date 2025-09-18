
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import { Home } from './Components/Home'
import { Signin } from './Components/Signin'
import { Signup } from './Components/Signup'
import { Firstpage } from './Components/Firstpage'
import { StudentAttendanceTable } from './Components/TotalStudents'



function App() {
 

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Firstpage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/StudentAttendanceTable" element={<StudentAttendanceTable />} />
    </Routes>
  </BrowserRouter>
}

export default App
