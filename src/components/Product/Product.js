import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, price, seller, ratings, img } = props.data;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
        <h3>{name}</h3>
        <p>Price : ${price}</p>
        <p>Manufacture by : {seller}</p>
        <p>Ratings: {ratings}</p>
      </div>
      <button onClick={() => props.addToCart(props.data)} className="btn">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
