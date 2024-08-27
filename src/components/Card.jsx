import React from "react";
import Button from "./Button";

const Card = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const buttonsStyle = {
    backgroundColor: "red",
    color: "white",
  };
  return (
    <div
      style={{
        width: "45.3125rem",
        height: "18.75rem",
        borderRadius: ".3125rem",
        backgroundColor: "white",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "3.125rem",
      }}
    >
      <div
        className="buttons"
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "1.875rem",
          padding: "1.25rem",
          margin: "1.25rem",
        }}
      >
        {numbers.map((number, index) => (
          <Button key={index} number={number} bgcolor={buttonsStyle} />
        ))}
      </div>
    </div>
  );
};

export default Card;
