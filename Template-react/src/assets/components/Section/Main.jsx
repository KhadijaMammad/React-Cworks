import React from 'react'
import "./main.css"
import Image from "./900x400.jpg"
import Proops from '../Practise/Proops'

function Main() {
  const myStyle = {
    color: "brown"
  }
  return (
    <div>
      <div className="container">
        <div className="hero-banner">
          <div className="images">
            <img src={Image} alt="900x400" />
          </div>
          <div className="text">
            <h2 style={myStyle} className='name'>Business Name or Tagline</h2>
            <p>This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want!</p>
            <button className='action'>Call to Action!</button>
          </div>
        </div>
        <div className="shop">
          <Proops
          name="Trausers"
          description="lorem ipsum dolor sit amet"
          price="$25"
          image={Image}
          />
        </div>
      </div>
    </div>
  )
}

export default Main
