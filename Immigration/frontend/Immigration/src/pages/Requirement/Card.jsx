import React, {useEffect, useState} from "react";
import "./card.css";

export default function Card() {
  const [card, setCard] = useState([]);
  const [searchCountry, setSearchCountry] = useState("")

  function getData() {
    fetch("http://localhost:8080/categories/")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }
  useEffect(() => {
    getData();
  }, []);

  function deleteCard(id) {
    fetch(`http://localhost:8080/categories/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          setCard(card.filter((card) => card._id !== id));
        } else {
          console.error("Failed to delete card");
        }
      })
      .catch((error) => console.error("Error deleting card:", error));
  }

  const filteredCards = card.filter((x) =>
    x.country.toLowerCase().includes(searchCountry.toLowerCase())
  );

  return (
    <>
      <div className="container">
        <div className="card-page">
          <div className="card-heading">
            <h1>Requirements to be Immigrants</h1>
            <p
              style={{
                opacity: "70%",
                lineHeight: "3.5rem",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="search">
          <input type="text" placeholder="Search.." value={searchCountry} onChange={(e)=>setSearchCountry(e.target.value)} />
          </div>
        </div>
        <div className="card-container">
          {filteredCards.map((x) => (
            <div key={x.id} className="card">
              <img src={x.image} alt={x.title} className="card-image" />
              <div className="card-body">
               <div className="card-buttons">
               <button className="card-country">{x.country}</button>
                <button className="delete" onClick={()=>deleteCard(x._id)}><i class="fa-regular fa-trash-can"></i></button>
               </div>
                
                <h3 className="card-title">{x.title}</h3>
                <p className="card-description">{x.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
