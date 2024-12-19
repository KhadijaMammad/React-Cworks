import React from 'react'
import  {useState} from 'react'
import { products } from '../../../mocData'
import "./main.css"
import Props from '../Proops/Props'

export default function Main() {
    const [myproducts,setMyProducts] = useState(products);
    const handleDelete = (productId)=>{
        const newProducts = myproducts.filter((product)=>product.id!==productId);
        console.log(newProducts)
        setMyProducts(newProducts)
    }
    return (
        <>
          <div className="row mx-auto container">
            {myproducts.map((product,index)=>(
             <Props
                key={index}
                image={product.image}
                title={product.title}
                category={product.category} 
                onDelete={()=>{handleDelete(product.id)}}         
                />
            ))};
          </div>
        </>
    )
}
