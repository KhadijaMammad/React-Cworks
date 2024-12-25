import React from 'react'
import "./home.css"
import { Link } from 'react-router-dom'


export default function Home() {
  return (
   <>
   <header>
    <div className="container">
        <div className="header">
            <nav>
                <ul className='lists'>
                   <li>Home</li>
                   <li>About</li>
                   <li>Contact</li>
                   <li><Link to="/product">Products</Link></li>
                   <li>Services</li>
                </ul>
            </nav>
        </div>
    </div>
   </header>
   
   </>
  )
}
