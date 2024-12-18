import React from 'react'
import "./header.css"

export default function Header() {
  return (
    <div>
      <header>
        <div className="container">
            <div className="navbar">
                <nav>
                    <h2>Start Bootstrap</h2>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
      </header>
    </div>
  )
}
