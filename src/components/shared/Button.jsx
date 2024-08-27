import { isDisabled } from "@testing-library/user-event/dist/utils";
import React from "react";

const Button = ({ children, type, isDisable, btnBg }) => {
  return (
    <div>
      <button type="{type}" disabled={isDisable} className={`btn btn-${btnBg}`}>
        {children}
      </button>
    </div>
  );
};

Button.defaultProps = {
  btnBg: "primary",
  isDisabled: false,
  type: "button",
};
export default Button;
