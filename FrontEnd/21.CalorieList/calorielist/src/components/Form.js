import Button from "./Button";
import Header from "./Header";
import React from "react";
import { useState } from "react";
import "./Form.css";
export default function Form() {
  const [values, setValues] = useState({
    foodName: "",
    calorieCount: "",
  });
  const handleFoodNameChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      foodName: event.target.value,
    }));
  };
  const handleCalorieCounterChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      calorieCount: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("ss");
  };
  return (
    <form id="form1" onSubmit={handleSubmit}>
      <Header>
        <input
          id="food-name"
          required
          className="input"
          placeholder="Food name"
          values={values.foodName}
          onChange={handleFoodNameChange}
        ></input>
        <input
          id="calories"
          className="input"
          placeholder="Number of calories"
          type="Number"
          required
          values={values.calorieCount}
          onChange={handleCalorieCounterChange}
        ></input>
      </Header>
      <Button title="Add Item" form="form1"></Button>
    </form>
  );
}
