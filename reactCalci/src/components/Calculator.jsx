import { useState } from "react";
import Button from "../components/Button";
import "../App.css";

function Calculator() {
  const [result, setResult] = useState("");

  const handleEnter = (enterkey) => {
    if (enterkey.key === "Enter") {
      calculatedResult();
    }
  };

  const deleteOne = () => {
    setResult(result.slice(0, -1));
  };

  const allClear = () => {
    setResult("");
  };

  const handleButtonClick = (value) => {
    if (value === "=") {
      return calculatedResult();
    } else {
      setResult((prevResult) => prevResult + value);
    }
  };

  const calculatedResult = () => {
    try {
      if (result === "") {
        setResult("");
      } else if (result.includes("/0")) {
        setResult("Error Divide by Zero");
      } else if (result.includes("/")) {
        setResult(eval(result).toFixed(3).toString());
      } else {
        setResult(eval(result).toString());
      }
    } catch (error) {
      setResult("Error");
    }
  };

  const buttonValues = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
  ];

  return (
    <>
      <div className="calculator">
        <input
          type="text"
          className="display"
          placeholder="0"
          value={result}
          onChange={(e) => setResult(e.target.value)}
          onKeyUp={handleEnter}
        />
        <div className="delete-buttons">
          <button className="button-design delete-btn" onClick={deleteOne}>
            Del
          </button>
          <button className="button-design delete-btn" onClick={allClear}>
            Ac
          </button>
        </div>
        <div className="button-holder">
          {buttonValues.map((value) => (
            <Button key={value} value={value} onClick={handleButtonClick} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Calculator;
