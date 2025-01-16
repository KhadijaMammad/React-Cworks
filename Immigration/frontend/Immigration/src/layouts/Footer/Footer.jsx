import React from 'react'
import "./footer.css"

export default function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer">
                        <div className="footer-first">
                            <h3 className='about'>About Us</h3>
                            <p className='test'>Lorem ipsum dolor sit amet, <br />
                                consectetur adipisicing elit, sed do <br />
                                eiusmod tempor incididunt ut labore <br />
                                dolore magna aliqua.</p>
                        </div>
                        <div className="footer-second">
                            <h3 className='contact'>Contact Us</h3>
                            <p className='test' >Lorem ipsum dolor sit amet, consectetur <br />
                                adipisicing elit, sed do eiusmod tempor incididunt <br />
                                ut labore dolore magna aliqua.</p>
                            <div className="tel">
                                <p>012-6532-568-9746</p>
                                <p>012-6532-569-9748</p>
                            </div>
                        </div>
                        <div className="footer-third">
                            <h3 className='news'>Newsletter</h3>
                            <p className='test'>You can trust us. we only send offers, not a single spam.</p>
                            <div className="email">
                                <input type="email" placeholder='Email adress' className='input' />
                                <button className='arrow'><i class="fa-solid fa-arrow-right fa-lg" style={{ color: 'white' }}></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="footer-finish">
                        <div className="colorlib">
                            <p>Copyright ©2025 All rights reserved | This template is made with
                                <i class="fa-regular fa-heart"></i>by <span style={{ color: 'red' }}>Colorlib</span>
                            </p>
                        </div>
                        <div className="icon-contact">
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-pinterest"></i>
                        </div>

                    </div>
                </div>
            </footer>

        </>
    )
}
