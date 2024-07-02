import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import UserLogin from './UserLogin'
import UserSignup from './UserSignup'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Outlet = () => {
    const [Loggedin, setLoggedin] = useState(false)
  return ( <>
    <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/signup' element={<UserSignup/>}></Route>
            <Route path='/login' element={<UserLogin/>}></Route>

        </Routes>
    </Router>
  </>
  )
}

export default Home