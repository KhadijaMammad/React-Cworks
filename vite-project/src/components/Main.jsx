import React from "react";
import Header from "./Header";

function Main() {
  const products = [{
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s.jpg",
    title: "Photographer",
    description: "Lorem ipsum dolor sit",
  }];

  return (
    <div className="cards">
        {products.map((product) =>{
           return <div className="card" key={product.title}>
            <img className="photo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s" alt="" />
                <h2 className="text">{product.title}</h2>
                <p className="desc">{product.description}</p>
            </div>
        })}
    </div>
  );
} 

export default Main;
