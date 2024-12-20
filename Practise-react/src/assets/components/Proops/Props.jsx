import React from 'react'

export default function Props({image,title,category,onDelete}) {
  return (
          <div className='col col-3'>
     
                    <div className="card" style={{ width: "18rem", height: "25rem", display: 'flex', gap: "1rem", marginBottom: "10px"}}>
                        <img src={image} height={180} className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{category}</p>
                            <div className="buttons">
                            <a href="#" className="btn btn-primary">Details</a>
                            <a href="#" className="btn btn-danger" onClick={onDelete}>Delete</a>
                            </div>
                        </div>
                    </div>
         
        </div>
  )
}
