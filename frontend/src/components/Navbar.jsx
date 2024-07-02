import React from 'react'
import ThemeComponent from './ThemeComponent'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <Link to='/' className="btn btn-ghost text-xl font-bold">Course App</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
        <ThemeComponent/>
      <li ><Link to="/login" className='btn btn-link no-underline hover:no-underline'>Log in</Link></li>
      <li ><Link to='/signup' className='btn btn-primary'>Sign up</Link></li>
      
    </ul>
  </div>
</div>
  )
}

export default Navbar