import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from "../../assets/Images/marstrx.png";

function Header() {
    const [isOpen ,setIsOpen] = useState(false);
    const handleMenuToggel =()=>{
        setIsOpen(prev=>!prev);
    }
  return (
    <>
    <div className='flex items-center justify-between fixed w-full mt-0 pr-5 pl-5 bg-blue-950 text-white p-5 font-mono font-bold z-50'>
        <div className='flex items-center gap-1'>
            <img className='w-12 rounded-full' src={logo} alt="Marstrx Logo" />
            <h3>Marstrx</h3>
        </div>
        <div className='hidden md:flex items-center gap-5'>
            <Link to={"/"}>Home</Link>
            <Link to={"/"}>About</Link>
            <Link to={"/"}>Projects</Link>
            <Link to={"/"}>Contact</Link>
        </div>

        <button onClick={handleMenuToggel} className='md:hidden'>
            {
                isOpen?
                (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                )
                :
                (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                </svg>
                )
            }
        </button>

        {isOpen ?(
            <div className='md:hidden fixed top-16 left-0 w-full bg-blue-950 text-white flex flex-col items-center gap-6 py-6 z-40'>
            <Link to={"/"} onClick={()=>setIsOpen(false)}>Home</Link>
            <Link to={"/"} onClick={()=>setIsOpen(false)}>About</Link>
            <Link to={"/"} onClick={()=>setIsOpen(false)}>Projects</Link>
            <Link to={"/"} onClick={()=>setIsOpen(false)}>Contact</Link>
        </div>
        ):""}
        

    </div>
    </>
  )
}

export default Header