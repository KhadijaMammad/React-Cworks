import React, { useEffect, useState } from 'react'
import './card.css'

export default function Card() {
    const[card, setCard] = useState([])

    function getData(){
        fetch("http://localhost:8080/categories/")
        .then(res=>res.json())
        .then(data=>setCard(data))
    }
    useEffect(()=>{
        getData()
    },[])

    return (
        <>
            <div className="container">
                <div className="card-page">
                    <div className="card-heading">
                        <h1>Requirements to be Immigrants</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className="cards">
                    
                </div>
            </div>
        </>
    )
}
