import React from "react";

import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";

const Burger = (props) => {
  let transfromedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => (
        <BurgerIngredient key={igKey + i} type={igKey} />
      ));
    })
    .reduce((arr, el) => {
        return arr.concat(el);
    }, []);


    if(transfromedIngredients.length === 0) {
        transfromedIngredients = <p> Please start adding ingredients</p>;
    }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transfromedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;