import { createContext, useState } from "react";
import { RouterProvider } from "react-router-dom";

import { router } from "./routes/routes";

export const CartContext = createContext([]);

function App() {
  const [cart, setCart] = useState([]);

  const addToCartHandler = item => {
    setCart([...cart, item]);
  };

  return (
    <div className="text-center bg-green-600">
      <CartContext.Provider value={{ cart, addToCartHandler }}>
        <RouterProvider router={router}></RouterProvider>
      </CartContext.Provider>
    </div>
  );
}

export default App;
