'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import "./Navbar.scss"
const Navbar = () => {

  const [open, setOpen] = useState(false);
  return (
    <nav>
        <div className="left" data-testid="navbar-left">
            <a href='/' className='logo'>
                <Image
                    src="/logo.png"
                    alt=""
                    width={28}
                    height={28}
                />
                <span>WIN Real Estate</span>
            </a>
            <a href='/'>Home</a>
            <a href='/'>About</a>
            <a href='/'>Contact</a>
            <a href='/'>Agents</a>
        </div>
        <div className="right" data-testid="navbar-right">
            <a href='/'>Sing In</a>
            <a href='/' className='register'>Sign Up</a>
            <div className='menuIcon'>
                <Image
                    src="/menu.png"
                    alt=''
                    width={36}
                    height={36}
                    className='menuIcon-btn'
                    onClick={() => setOpen((prev) => !prev)}/>
            </div>
            <div className={open ? "menu active" : "menu"}>
                <a href='/'>Home</a>
                <a href='/'>About</a>
                <a href='/'>Contact</a>
                <a href='/'>Agents</a>
                <a href='/'>Sign In</a>
                <a href='/'>Sign Up</a>
            </div>
        </div>
    </nav>

  )
}

export default Navbar