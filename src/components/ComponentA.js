import React from "react";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

const ComponentA = () => {
  return (
    <div
      style={{
        backgroundColor: "#f2f2f2",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1>Component A</h1>
      <ComponentB />
      <ComponentC />
    </div>
  );
};

export default ComponentA;
