import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * quantity;
    totalShipping = totalShipping + product.shipping * product.quantity;
  }
  let tax = parseInt((total * 0.1).toFixed(2));
  const grandTotal = total + totalShipping + tax;

  return (
    <div className="cart">
      <h2>Order Summary</h2>
      <p>Order Item : {quantity}</p>
      <p>Total Price : $ {total} </p>
      <p>Total Shipping Charge : $ {totalShipping} </p>
      <p>Tax : $ {tax}</p>
      <h3>Grand Total : ${grandTotal} </h3>
    </div>
  );
};

export default Cart;
