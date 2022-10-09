import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { CartContext } from "../../App";
import Item from "../Item/Item";

const Home = () => {
  const { meals } = useLoaderData();

  const { cart } = useContext(CartContext);

  return (
    <div className="flex md:flex-row flex-col-reverse">
      {/* all meals */}
      <div className="md:basis-4/5 bg-orange-600  m-2 p-2 rounded-md">
        <h1>Total Meals: {meals.length}</h1>
        <div className="grid md:grid-cols-3 gap-2 mt-3">
          {meals.map(meal => (
            <Item key={meal.idMeal} meal={meal}></Item>
          ))}
        </div>
      </div>
      {/* cart */}
      <div className="md:basis-1/5 bg-slate-200 m-2 md:ml-0 p-2 rounded-md md:static sticky top-5">
        <h2>Cart</h2>
        <h4>Total added meals: {cart.length}</h4>
      </div>
    </div>
  );
};

export default Home;
