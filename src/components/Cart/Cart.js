import React, { useContext } from "react";
import { CartContext } from "../../App";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cart } = useContext(CartContext);

  let totalMeals = 0;

  for (const item of cart) {
    totalMeals += item.quantity;
  }

  return (
    <div className="my-3">
      <h2>Total selected meals : {totalMeals}</h2>
      {/* cart items */}
      <div className="my-5 md:block hidden">
        {cart.map(item => (
          <CartItem key={item.idMeal} meal={item}></CartItem>
        ))}
      </div>
    </div>
  );
};

export default Cart;
