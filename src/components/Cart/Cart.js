import React, { useContext } from "react";
import { CartContext } from "../../App";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="my-3">
      <h2>Total selected meals : {cart.length}</h2>
      {/* cart items */}
      <div>
        {cart.map(item => (
          <div>
            <h3>{item.strMeal}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
