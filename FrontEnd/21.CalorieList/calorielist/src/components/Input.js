import React from "react";
import "./Input.css";
export default function Input(props) {
  const { placeholder, onChange, type = "Text" } = props;
  return (
    <input
      className="input"
      placeholder={placeholder}
      type={type}
      onChange={() => onChange()}
    ></input>
  );
}
