import React from 'react'

function FoodCard({name, description, price, image}) {
  return (
    <div className='foodcard'>
        <img src="{image}" className='card-image'/>
        <h2>{name}</h2>
        <p className='description'>{description}</p>
        <p className='card-price'>{price} AZN</p>
    </div>
  );
}

export default FoodCard