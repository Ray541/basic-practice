import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");

  const allClear = () => {
    setResult("");
  };

  const deleteOne = () => {
    setResult(result.slice(0, -1));
  };

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const finalAnswer = () => {
    try {
      if (result.includes("/0")) {
        return setResult("Error");
      }
      if (result.includes("/")) {
        return setResult(Number.isInteger(eval(result)) ? eval(result) : eval(result).toFixed(3));
      }
      if (isNaN(result)) {
        setResult(eval(result));
      } else {
        setResult(0);
      }
    } catch (error) {
      setResult("Error");
    }
  };

  const handleEnter = (enterkey) => {
    if (enterkey.key === "Enter") finalAnswer();
  };

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
          <button
            name="7"
            className="button-design number-btn"
            onClick={handleClick}
          >
            7
          </button>
          <button
            name="8"
            className="button-design number-btn"
            onClick={handleClick}
          >
            8
          </button>
          <button
            name="9"
            className="button-design number-btn"
            onClick={handleClick}
          >
            9
          </button>
          <button
            name="/"
            className="button-design operation-btn"
            onClick={handleClick}
          >
            ÷
          </button>
          <button
            name="6"
            className="button-design number-btn"
            onClick={handleClick}
          >
            6
          </button>
          <button
            name="5"
            className="button-design number-btn"
            onClick={handleClick}
          >
            5
          </button>
          <button
            name="4"
            className="button-design number-btn"
            onClick={handleClick}
          >
            4
          </button>
          <button
            name="*"
            className="button-design operation-btn"
            onClick={handleClick}
          >
            x
          </button>
          <button
            name="3"
            className="button-design number-btn"
            onClick={handleClick}
          >
            3
          </button>
          <button
            name="2"
            className="button-design number-btn"
            onClick={handleClick}
          >
            2
          </button>
          <button
            name="1"
            className="button-design number-btn"
            onClick={handleClick}
          >
            1
          </button>
          <button
            name="-"
            className="button-design operation-btn"
            onClick={handleClick}
          >
            –
          </button>
          <button
            name="0"
            className="button-design number-btn"
            onClick={handleClick}
          >
            0
          </button>
          <button
            name="."
            className="button-design number-btn"
            onClick={handleClick}
          >
            .
          </button>
          <button className="button-design delete-btn" onClick={finalAnswer}>
            =
          </button>
          <button
            name="+"
            onClick={handleClick}
            className="button-design operation-btn"
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
