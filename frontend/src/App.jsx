import React, { useState } from 'react'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import UserSignup from './pages/UserSignup';
import UserLogin from './pages/UserLogin';
import Navbar from './components/Navbar';


const App = () => {
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

export default App