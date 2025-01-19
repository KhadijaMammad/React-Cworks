import React from "react";
import {useEffect, useState} from "react";
import "./effects.css"

function Effect() {
  const [store, setStore] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://676924e5cbf3d7cefd39be10.mockapi.io/api/users")
      .then((response) => response.json())
      .then((data) => setStore(data));
      setIsLoading(false)  
  }, []);
 

  async function deletePost(id) {
    await axios.delete(
      `https://676924e5cbf3d7cefd39be10.mockapi.io/api/users/${id}`
    );
    setStore((item) => item.filter((product) => product.id !== id));
  }
  return (
    <div>
      <p className="load">{isLoading ? <p>Loading...</p> : null}</p>
      <div
        className="card"
        style={{
          width: "18rem",
          height: "25rem",
          display: "flex",
          gap: "1rem",
          marginBottom: "10px",
        }}
      >
        <div className="col">
          <div className="card">
            {store.map((product) => (
              <>
                <div className="card-body">
                  <h5 className="title">{product.title}</h5>
                  <p className="price">{product.price}</p>
                  <p className="category">{product.description}</p>
                </div>
                <div className="buttons">
                  <button className="btn btn-primary">Details</button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deletePost(product.id)}
                  >
                    Delete
                  </button>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Effect;
