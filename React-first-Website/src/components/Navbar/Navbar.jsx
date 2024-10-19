import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between py-2 px-4 bg-red-900 items-center'>
        <div className="logo text-white">
            <Link to="/">Your Logo</Link>
        </div>
        <div className="menubar">
            <ul className='flex gap-8 text-white'>
                <NavLink to="/" className={(e)=>{return e.isActive?"text-slate-400" : ""}}><li>Home</li></NavLink>
                <NavLink to="/about" className={(e)=>{return e.isActive?"text-slate-400" : ""}}><li>About</li></NavLink>
                <NavLink to="/services" className={(e)=>{return e.isActive?"text-slate-400" : ""}}><li>Services</li></NavLink>
                <NavLink to="/contactus" className={(e)=>{return e.isActive?"text-slate-400" : ""}}><li>Contact</li></NavLink>
                <NavLink to="/github" className={(e)=>{return e.isActive?"text-slate-400" : ""}}><li>Github</li></NavLink>
            </ul>
        </div>
        <div className="signup flex gap-0">
          <Link to="/signup"> <button type="button" class="text-white hover:scale-110 font-medium rounded-lg text-sm px-2 py-2.5 text-center me-2 mb-2">Sign up</button> </Link>
          <Link to="/login" > <button type="button" class="text-white hover:scale-110 font-medium rounded-lg text-sm px-2 py-2.5 text-center me-2 mb-2">Log in</button></Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
