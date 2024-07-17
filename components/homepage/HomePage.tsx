'use client'
import React, { useContext, useEffect, useState } from 'react'
import './homePage.scss'
import SearchBar from '../searchbar/SearchBar'
import { AuthContext } from '@/context/AuthContext'

const HomePage = () => {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);

    const {currentUser} = useContext(AuthContext)!;

  return (
    <div className="homePage" data-testid="home-page">
        <div className="textContainer">
            <div className="wrapper">
                <h1 className="title">Find Real Estate & Get Your Dream Home</h1>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                explicabo suscipit cum eius, iure est nulla animi consequatur
                facilis id pariatur fugit quos laudantium temporibus dolor ea
                repellat provident impedit!
                </p>
                 <SearchBar />
                <div className="boxes">
                    <div className="box">
                        <h1>16+</h1>
                        <h2>Years of Experience</h2>
                    </div>
                    <div className="box">
                        <h1>200</h1>
                        <h2>Awards Gained</h2>
                    </div>
                    <div className="box">
                        <h1>1200+</h1>
                        <h2>Property Ready</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="imgContainer">
            <img src= "/bg.png" alt=""/>
        </div>

    </div>
  )
}

export default HomePage