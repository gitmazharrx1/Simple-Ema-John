import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getStoredCart();
    const saveCart = [];
    for (const id in storedCart) {
      const addedCart = products.find((product) => product.id === id);
      if (addedCart) {
        const quantity = storedCart[id];
        addedCart.quantity = quantity;
        saveCart.push(addedCart);
      }
    }
    setCart(saveCart);
  }, [products]);

  const addToCart = (data) => {
    let newCart = [];
    const exist = cart.find((product) => product.id === data.id);
    if (!exist) {
      data.quantity = 1;
      newCart = [...cart, data];
    } else {
      const rest = cart.filter((product) => product.id !== data.id);
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, exist];
    }
    setCart(newCart);

    addToDb(data.id);
  };
  return (
    <div className="container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            data={product}
            key={product.id}
            addToCart={addToCart}
          ></Product>
        ))}
      </div>
      <div className="order-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
