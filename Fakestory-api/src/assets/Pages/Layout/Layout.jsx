import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
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
                   <button className='basket'><Link to="/basket" className='text'>Basket <sup>0</sup></Link></button>
                   <button className='fav'><Link to="/wishlistpg" className='wish'>Favorite</Link></button>
                </ul>
            </nav>
        </div>
    </div>
   </header>
    
  
        <Outlet />
      </>
    )
  };
  
  export default Layout;
