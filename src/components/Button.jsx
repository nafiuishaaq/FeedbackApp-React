import React from "react";
import "./Button.css";

const Button = ({ number, bgcolor }) => {
  return (
    <div>
      <button
        type="button"
        style={{
          borderRadius: "50%",
          border: "1px solid #121212",
          width: "40px",
          height: "40px",
          cursor: "pointer",
        }}
      >
        {number}
      </button>
    </div>
  );
};

export default Button;
