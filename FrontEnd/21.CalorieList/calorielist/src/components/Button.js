import React from "react";
import "./Button.css";
export default function Button(props) {
  const { title, form } = props;
  return (
    <button type="submit" className="button" form={form}>
      {title}
    </button>
  );
}
