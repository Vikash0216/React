import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
   <nav>
    <div className="navbar flex justify-between  px-3 py-4 bg-neutral-500 text-2xl text-white mb-4">
        <div className='ml-4'>
            j Task's
        </div>
        <ul className="navlists flex gap-4 mr-4 ">
            <li>Home</li>
            <li>MyTodo</li>
        </ul>
    </div>
   </nav>
  )
}

export default Navbar
