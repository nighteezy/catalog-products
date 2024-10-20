import React from "react";
import "./CartInfo.css";

const CartInfo = ({ cartCount, total }) => (
  <div className="cart-info">
    <p>Товары в корзине: {cartCount}</p>
    <p>Общая сумма: {total}</p>
  </div>
);

export default CartInfo;
