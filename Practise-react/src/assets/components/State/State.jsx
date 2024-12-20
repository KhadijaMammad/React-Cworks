import React from 'react'
import { useState } from 'react'
import "./state.css"

export default function State() {
  const [isOpenNav, setIsOpenNav] = useState(false)
  let navBar = ()=>{
   setIsOpenNav(!isOpenNav)
  }
  return (
    <div className='counter'>
        <button onClick={navBar}>{isOpenNav ? "X" : "="}</button>
       {isOpenNav ? (
         <nav>
         <ul>
             <li>Home</li>
             <li>About</li>
             <li>Contact</li>
         </ul>
     </nav> 
       ) : null}
     
    </div>
  )
}
