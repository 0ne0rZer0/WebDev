import React, { useEffect, useState } from "react";
import Calorie from "./Calorie";

export default function CalorieList() {
  const [calorieList, setCalorieList] = useState([]);

  useEffect(() => {
    const newList = [
      {
        title: "Coke",
        value: 500,
      },
      {
        title: "Brownie",
        value: 500,
      },
      {
        title: "Fried Rice",
        value: 500,
      },
      {
        title: "Lasagna",
        value: 500,
      },
      {
        title: "Pani puri",
        value: 500,
      },
    ];
    setCalorieList(newList);
  }, []);

  return (
    <div className="calorie-list">
      <h1 style={{ textAlign: "center" }}>Calorie Read Only</h1>
      {calorieList.map((calorie, idx) => {
        return (
          <Calorie
            key={idx}
            id={idx}
            name={calorie.title}
            calorieValue={calorie.value}
            setCalories={setCalorieList}
          />
        );
      })}
    </div>
  );
}
