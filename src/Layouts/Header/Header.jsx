import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../assets/Images/marstrx.png";

function Header() {
  return (
    <>
    <div className='flex items-center justify-between fixed w-full mt-0 pr-5 pl-5 bg-blue-950 text-white p-5 font-mono font-bold'>
        <div className='flex items-center gap-1'>
            <img className='w-12 rounded-full' src={logo} alt="Marstrx Logo" />
            <h3>Marstrx</h3>
        </div>
        <div className='flex items-center gap-5'>
            <Link to={"/"}>Home</Link>
            <Link to={"/"}>About</Link>
            <Link to={"/"}>Projects</Link>
            <Link to={"/"}>Contact</Link>
        </div>
    </div>
    </>
  )
}

export default Header