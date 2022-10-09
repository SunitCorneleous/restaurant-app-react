import React, { useContext } from "react";
import { CartContext } from "../../App";

const Item = ({ meal }) => {
  const name = meal.strMeal.split(" ");
  const { strMealThumb } = meal;

  const { addToCartHandler } = useContext(CartContext);

  return (
    <div className="border border-black rounded-xl p-2 flex bg-slate-300">
      <div className="basis-2/5">
        <img className="w-11/12 rounded-md" src={strMealThumb} alt="food" />
      </div>
      <div className="basis-3/5 h-full">
        <h1>{name[0] + " " + name[1]}</h1>
        <button
          onClick={() => addToCartHandler(meal)}
          className="px-3 py-1 bg-green-700 rounded-md text-sm mt-5"
        >
          Add Meal
        </button>
      </div>
    </div>
  );
};

export default Item;
