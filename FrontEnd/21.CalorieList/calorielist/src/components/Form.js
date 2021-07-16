import Button from "./Button";
import Input from "./Input";
import Header from "./Header";
import React from "react";
import { useState } from "react";
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
  return (
    <form id="form1" onSubmit={() => console.log("Submitted")}>
      <Header>
        <Input
          id="calories"
          placeholder="Food name"
          values={values.foodName}
          onChange={handleFoodNameChange}
        ></Input>
        <Input
          id="calories"
          placeholder="Number of calories"
          type="Number"
          values={values.calorieCount}
          onChange={handleCalorieCounterChange}
        ></Input>
      </Header>
      <Button title="Add Item" form="form1"></Button>
    </form>
  );
}
