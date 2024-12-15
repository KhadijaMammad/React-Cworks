import React from 'react';
import FoodCard from './FoodCard';


function Main() {
  return (
    <div className='container'>
      <h1>Restoran Menyusu</h1>
      <div className='menu'>
        <FoodCard
        name="Pizza Margherita"
        description="Mozzarella pendiri, pomidor sousu və reyhan"
        price={10}
        image="https://www.thebeekmantowerny.com/wp-content/uploads/2016/12/200x200.png"/>
         <FoodCard
        name="Hamburger"
        description="Ət, pendir, kahı ve sous ilə hazirlanan klassik burger."
        price={8}
        image="https://www.thebeekmantowerny.com/wp-content/uploads/2016/12/200x200.png"/>
         <FoodCard
        name="Şorba"
        description="Gündəlik təzə tərəvəzlərdən hazırlanan isti şorba"
        price={5}
        image="https://www.thebeekmantowerny.com/wp-content/uploads/2016/12/200x200.png"/>
      </div>
    </div>
  )
}

export default Main