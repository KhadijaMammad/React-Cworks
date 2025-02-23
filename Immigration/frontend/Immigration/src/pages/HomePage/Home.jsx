import React from 'react'
import './home.css'
import HeaderImage from '../../assets/images/header-img.png'
import Card from '../Requirement/Card'
import { Helmet } from 'react-helmet'
import Unique from '../Features/Unique'
import News from '../Blog/News'

export default function Home() {
  return (
    <>
    <div className="container">
        <Helmet>
            <title>Home Page</title>
        </Helmet>
        <div className="home-page">
            <div className="consultation">
                <div className="left">
                    <p className='visa'>Process Visa without within hours</p>
                    <h1 className='heading'>Immigrations &
                        <br />
                    Visa Consultation</h1>
                    <button className='book'>Book Consultancy</button>
                </div>
                <div className="right">
                    <img src={HeaderImage}/>
                </div>
            </div>
        </div>
    </div>
    <Card/>
    <Unique/>
    <News/>
      
    </>
  )
}
