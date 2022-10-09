import React from "react";

const CartItem = ({ meal }) => {
  const name = meal.strMeal.split(" ");
  const { strMealThumb, quantity } = meal;

  return (
    <div className="bg-slate-400 rounded-md my-2 flex items-center">
      <img src={strMealThumb} alt="cart meal" className="w-1/5 rounded-md" />
      <div className="flex justify-around w-full px-1">
        <h3 className="ml-1 text-xl font-semibold">
          {name[0] + " " + name[1]}
        </h3>

        <div className="text-purple-600 font-bold bg-orange-500 rounded-full px-2">
          {quantity}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
