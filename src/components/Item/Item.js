import React, { useContext } from "react";
import { CartContext } from "../../App";

const Item = ({ meal, price }) => {
  const name = meal.strMeal.split(" ");
  const { strMealThumb } = meal;

  const { addToCartHandler } = useContext(CartContext);

  return (
    <div className="rounded-xl p-2 flex bg-teal-50">
      <div className="basis-2/5">
        <img className="w-11/12 rounded-md" src={strMealThumb} alt="food" />
      </div>
      <div className="basis-3/5 h-full flex flex-col justify-between">
        <h1 className="text-xl">{name[0] + " " + name[1]}</h1>
        <h4 className="text-lg">$ {price}</h4>
        <button
          onClick={() => addToCartHandler(meal)}
          className="py-1 bg-lime-600 hover:bg-orange-500 rounded-md text-white text-sm"
        >
          Add Meal
        </button>
      </div>
    </div>
  );
};

export default Item;
