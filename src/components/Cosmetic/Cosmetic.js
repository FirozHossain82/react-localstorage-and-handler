import React from "react";
import { addToDb } from "../../utilities/storage";

const Cosmetic = (props) => {
  const { name, price, id } = props.cosmetic;
  const addToCart = (id) =>{
    addToDb(id)
  }
  return (
    <div
      style={{
        border: "3px solid red",
        margin: "30px",
        padding: "15px",
        borderRadius: "9px",
        background: "",
      }}
    >
      <h1>Product Name: {name}</h1>
      <h3>Price: ${price}</h3>
      <p>
        <small>Id Is: {id}</small>
      </p>
      <button onClick={() => addToCart(id)} style={{border:'2px solid green',padding:'7px',borderRadius:'2px'}}>Add To Cart</button>
    </div>
  );
};

export default Cosmetic;
