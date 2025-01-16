import React from 'react'
import moduleName from '../../assets/images/logo (1).png'
import './navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <header>
                <div className="container">
                    <div className="header">
                        <div className="navbar">
                           <div className="first">
                           <div className="text">
                                <h4>We believe we helps people
                                    <br />
                                    for happier lives</h4>
                            </div>
                            <div className="logo">
                                <img src={moduleName} />
                            </div>
                            <div className="phone-number">
                                <span className='number'>+880 123 12 658 439</span>
                                <span className='icon'><i class="fa-solid fa-phone fa-lg"></i></span>
                            </div>
                           </div>
                           <hr/>
                           <div className="lists">
                            <ul className='list'>
                                <Link className='link'>Home</Link>
                                <Link className='link'>About</Link>
                                <Link className='link'>Immigration</Link>
                                <Link className='link'>Course</Link>
                                <Link className='link'>Country</Link>
                                <Link className='link'>Blog</Link>
                                <Link className='link'>Contact</Link>
                                <Link className='link'>Elements</Link>
                            </ul>
                           </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
