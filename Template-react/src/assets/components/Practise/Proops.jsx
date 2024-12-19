import React from 'react'

function Proops({name,description,price,image}) {
  return (
    <div className='container'>
        <div className="menu">
            <h2>{name}</h2>
            <p>{description}</p>
            <span>{price}</span>
            <img src={image} alt="" />
        </div>
      
    </div>
  )
}

export default Proops
