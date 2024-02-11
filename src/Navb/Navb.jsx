import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'



export default function Navbar() {

    const [changeWidth,setWidth]=useState(false)
    const onScrolling=()=>{
        if(window.scrollY>0){
            setWidth(true)
        }
        else{
            setWidth(false)
        }
    };
    window.addEventListener('scroll',onScrolling);
    return (
        <nav className={`navbar navbar-expand-lg position-fixed ${changeWidth? 'nav-width':''}`}>
            <div className="container ">
                <NavLink className="navbar-brand  text-white" to=''>START FRAMEWORK</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav  ">
                        <li className="nav-item">

                            <NavLink className="nav-link " to='about' >ABOUT</NavLink>
                        </li>
                        

                        <li className="nav-item">
                            <NavLink className="nav-link" to='portfolio' >PORTFOLIO</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='contact'>CONTACT</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
