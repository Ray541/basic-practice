import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  /**What does password have
   * password length
   * alphanumeric
   * with special characters
   */
  const [length, setLength] = useState(8);
  const [allowNumbers, setAllowNumbers] = useState(false);
  const [allowCharacters, setAllowCharacters] = useState(false);
  const [password, setPassword] = useState("");

  /**stores the current value in a variable
   * like useState but major difference is it does not re-renders the component
   * means that the value will not be set to initial state again
   * best example is stop watch click start and stop when every you want
   * noe the useRef variable have the current value which by using we can set the timer from zero when user clicks start again
   */
  const toInput = useRef(null);

  /**function using useCallback hook
   * @returns a new password evry time the dependency changes
   */
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (allowNumbers) {
      str += "0123456789";
      toInput.current.focus();
    }
    if (allowCharacters) {
      str += "!@#$%^&*()_+";
      toInput.current.focus();
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, allowNumbers, allowCharacters]);
  /**the callback dependencies is for optimization
   * memoization - it will not recreate unless the dipendency is changed
   * callback memorises the function
   * any changes done in the dependencies will be cached
   * AIM:- Optimize and Store in cache
   */

  useEffect(() => {
    passwordGenerator();
  }, [length, allowNumbers, allowCharacters, passwordGenerator]);
  /**first time it gets called on first load
   * and if the dependencie array gets changed then it re-renders
   * the useEffect dependencies array is for re-rendering
   *any changes in the dependencies then the things related to the function will re-render it self with the changes required and associated with the dependencie
   AIM:- Run the function associated with the dependencie
   */

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);
    toInput.current.select();
  };

  return (
    <>
      <h1>Password Generator</h1>
      <div
        className="display"
        style={{
          backgroundColor: "#141414",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <div className="topdiv" style={{ display: "flex", gap: "10px" }}>
          <input
            type="text"
            ref={toInput}
            style={{
              width: "70%",
              backgroundColor: "whitesmoke",
              outline: "unset",
              color: "black",
              padding: "5px",
              marginBottom: "20px",
            }}
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            type="button"
            value="Copy"
            style={{ padding: "0 15px", height: "auto", cursor: "pointer" }}
            onClick={copyPassword}
          />
        </div>
        <div
          className="actions"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "40px",
          }}
        >
          <div className="password-length">
            <input
              type="range"
              name="password-length"
              id="password-length"
              min={6}
              max={100}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="password-length">Length: {length}</label>
          </div>
          <div className="numbersAllowed">
            <input
              type="checkbox"
              id="allow-numbers"
              name="allow-numbers"
              defaultChecked={allowNumbers}
              onChange={() => {
                setAllowNumbers((prev) => !prev);
              }}
            />
            <label htmlFor="allow-numbers" style={{ marginLeft: "5px" }}>
              Allow Number
            </label>
          </div>
          <div className="characterAllowed">
            <input
              type="checkbox"
              id="allow-characters"
              name="allow-characters"
              defaultChecked={allowNumbers}
              onChange={() => {
                setAllowCharacters((prev) => !prev);
              }}
            />
            <label htmlFor="allow-characters" style={{ marginLeft: "5px" }}>
              Allow Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
