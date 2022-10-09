import React from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import Item from "../Item/Item";

const Home = () => {
  const { meals } = useLoaderData();

  return (
    <div className="flex md:flex-row flex-col-reverse">
      {/* all meals */}
      <div className="md:basis-6/7 bg-orange-300  m-2 p-2 rounded-md">
        <h1>Total Meals: {meals.length}</h1>
        <div className="grid md:grid-cols-3 gap-2 mt-3">
          {meals.map(meal => (
            <Item key={meal.idMeal} meal={meal}></Item>
          ))}
        </div>
      </div>
      {/* cart */}
      <div className="md:basis-1/7 drop-shadow-md md:filter-none bg-slate-200 m-2 md:ml-0 p-2 rounded-md md:static sticky top-5">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Home;
