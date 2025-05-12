'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import "./Navbar.scss"
import Link from 'next/link'
const Navbar = () => {

  const [open, setOpen] = useState(false);
  const user = true;
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
            {user ? (
                <div className='user'>
                    <img 
                    src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt=''/>
                    <span>John Doe</span>
                    <Link href="/profile" className='profile'>
                        <div className="notification">3</div>
                        <span>Profile</span>
                    </Link>
                </div>
            ) : (
                <>
                    <a href='/'>Sing In</a>
                    <a href='/' className='register'>Sign Up</a>
                </>
            )}
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