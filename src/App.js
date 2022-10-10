import { createContext, useState } from "react";
import { RouterProvider } from "react-router-dom";

import { router } from "./routes/routes";

export const CartContext = createContext([]);

function App() {
  const [cart, setCart] = useState([]);

  const addToCartHandler = item => {
    const exists = cart.find(meal => meal.idMeal === item.idMeal);

    let newCart;

    if (!exists) {
      item["quantity"] = 1;
      newCart = [...cart, item];
    } else {
      const rest = cart.filter(meal => meal.idMeal !== item.idMeal);
      exists["quantity"] = exists["quantity"] + 1;
      newCart = [...rest, item];
    }
    setCart(newCart);
  };

  return (
    <div className="text-center App">
      <CartContext.Provider value={{ cart, addToCartHandler }}>
        <RouterProvider router={router}></RouterProvider>
      </CartContext.Provider>
    </div>
  );
}

export default App;
