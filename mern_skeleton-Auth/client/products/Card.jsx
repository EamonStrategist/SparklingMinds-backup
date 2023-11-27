import React, { useState, useEffect } from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img
        src={"../images/" + props.productInfo.imageURL}
        alt={props.productInfo.name}
      />
      <h3>Name</h3>
      <p>{props.productInfo.name}</p>
      <h4>Description</h4>
      <p>{props.productInfo.description}</p>
      <h4>Price:</h4>
      <p>{props.productInfo.price}</p>
      <h4>Category</h4>
      <p>{props.productInfo.category}</p>
      <h4>Collection</h4>
      <p>{props.productInfo.coll}</p>
      <h4>Quantity</h4>
      <p>{props.productInfo.quantity}</p>
    </div>
  );
};

export default Card;
