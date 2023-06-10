import React from "react";
import { useSelector } from "react-redux";

const ComponentC = () => {
  const inputValue = useSelector((state) => state.inputValue);

  return (
    <div
      style={{ backgroundColor: "#fff2e6", padding: "10px", margin: "10px" }}
    >
      <h2>Component C</h2>
      <p>Input Value: {inputValue}</p>
    </div>
  );
};

export default ComponentC;
