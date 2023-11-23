// import React from "react";

const Button = ({ value, onClick }) => {
  if (value === "=") {
    return (
      <button
        name={value}
        className="button-design delete-btn"
        onClick={() => onClick(value)}
      >
        {value}
      </button>
    );
  }
  return (
    <button
      name={value}
      className={
        ["/", "*", "-", "+"].includes(value)
          ? "button-design operation-btn"
          : "button-design number-btn"
      }
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  );
};

export default Button;
