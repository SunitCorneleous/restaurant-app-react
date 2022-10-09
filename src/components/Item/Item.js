import React from "react";

const Item = ({ meal }) => {
  const name = meal.strMeal.split(" ");
  const { strMealThumb } = meal;
  console.log(name);
  return (
    <div className="border border-slate-400 rounded-xl p-2 flex bg-slate-300">
      <div className="basis-2/5">
        <img className="w-11/12 rounded-md" src={strMealThumb} alt="food" />
      </div>
      <div className="basis-3/5">
        <h1>{name[0] + " " + name[1]}</h1>
      </div>
    </div>
  );
};

export default Item;
