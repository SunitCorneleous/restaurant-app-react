import React from "react";

const CartItem = ({ meal }) => {
  const name = meal.strMeal.split(" ");
  const { strMealThumb } = meal;
  return (
    <div className="bg-slate-400 rounded-md my-2 flex items-center">
      <img src={strMealThumb} alt="cart meal" className="w-1/5 rounded-md" />
      <h3 className="ml-4">{name[0] + " " + name[1]}</h3>
    </div>
  );
};

export default CartItem;
