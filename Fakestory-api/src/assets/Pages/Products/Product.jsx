import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


export default function Product() {
    const [table, setTable] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                setTable(data)
                setIsLoading(false)
            })
    }, [])
    return (
        <div className='container'>
            <p>
                {isLoading ? <h2>loading</h2> : <div className="user-table">
                    <table className='table table-striped-columns'>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {table.map((product) => (
                                <tr key={product.id} >
                                    <td><img style={{ width: "150px" }} src={product.image} alt="" /></td>
                                    <td>{product.id}</td>
                                    <td>{product.title}</td>
                                    <td>{product.category}</td>
                                    <td>{product.price}$</td>
                                    <button className='btn btn-danger'>Delete</button>
                                    <button className='btn btn-primary'><Link to="/details">Details</Link></button>
                                    <button className='btn btn-success'><Link to="/add">Edit</Link></button>
                                    <button className='btn btn-danger'><i class="fa-regular fa-heart"></i></button>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>}
            </p>
        </div>
    )
}
