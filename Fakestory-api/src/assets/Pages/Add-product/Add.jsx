import React from 'react'

export default function Add() {
  return (
    <div className='container'>
        <form>
            <label htmlFor="">Title:</label>
            <br />
            <input type="text" />
            <br />
            <label htmlFor="">Category:</label>
            <br />
            <input type="text" />
            <br />
            <label htmlFor="">Price:</label>
            <br />
            <input type="text" />
            <br />
            <button class='btn btn-warning'>Add Products</button>
        </form>

    
    </div>
  )
}
