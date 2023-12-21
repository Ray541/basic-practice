import { useState } from "react";
import "./App.css";

function App() {
  const [jokes, setJoke] = useState("");

  const generateJoke = async () => {
    const response = await fetch(
      "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas"
    );

    const data = await response.json();

    if (data.type === "twopart") {
      setJoke({
        category: data.category,
        content: `${data.setup} ${data.delivery}`,
      });
    } else {
      setJoke({ category: data.category, content: data.joke });
    }
  };

  return (
    <>
      <section className="main">
        <div className="display">
          <span>Category: {jokes.category}</span>
          <i className="fa-regular fa-face-grin-tears"></i>
          <p className="joke">
            {jokes.content ? jokes.content : "Click the button to get a Joke"}
          </p>
          <button className="generateJoke mt-3" onClick={generateJoke}>
            Random Jokes
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
