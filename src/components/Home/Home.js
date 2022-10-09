import React from "react";
import { useLoaderData } from "react-router-dom";
import Item from "../Item/Item";

const Home = () => {
  const { meals } = useLoaderData();

  return (
    <div className="flex md:">
      {/* all meals */}
      <div className="md:basis-4/5 border bg-orange-600  m-2 p-2 rounded-md">
        <h1>Total Meals: {meals.length}</h1>
        <div className="grid grid-cols-3 gap-2 mt-3">
          {meals.map(meal => (
            <Item key={meal.idMeal} meal={meal}></Item>
          ))}
        </div>
      </div>
      {/* cart */}
      <div className="md:basis-1/5 bg-slate-400 m-2 ml-0 p-2 rounded-md">
        <h2>Cart</h2>
      </div>
    </div>
  );
};

export default Home;
