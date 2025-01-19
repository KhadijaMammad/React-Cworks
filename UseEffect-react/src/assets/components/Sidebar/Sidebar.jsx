import React from 'react'

export default function Sidebar() {
  return (
    <div className='container'>
        <div className="sidebar">
            <div className="logo">
                 <span>
                    LiCacw.
                 </span>
            </div>
            <div className="navigation">
                <ul>
                   <li><a href="#">Home</a></li>
                   <li><a href="#">About</a></li>
                   <li><a href="#">Services</a></li>
                   <li><a href="#">Portfolio</a></li>
                   <li><a href="#">Blog</a></li>
                   <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="icons">
            <i class="fa-brands fa-twitter fa-lg"></i>
            <i class="fa-brands fa-instagram fa-lg"></i>
            <i class="fa-brands fa-facebook fa-lg"></i>
            <i class="fa-brands fa-pinterest fa-lg"></i>
            </div>
        </div>
    </div>
  )
}
