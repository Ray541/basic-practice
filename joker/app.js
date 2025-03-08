const joke = document.querySelector(".joke");

const url =
  "https://v2.jokeapi.dev/joke/Programming,Dark?blacklistFlags=nsfw,religious,political,racist,explicit";

const getJoke = async () => {
  const raw = await fetch(url);
  const data = await raw.json();

  const { joke: onlyJoke, setup, delivery } = data;

  if (onlyJoke === undefined && setup === undefined && delivery === undefined) {
    return (joke.textContent = "Click Again!!!");
  } else if (setup && delivery) {
    return (joke.innerHTML = `${setup + delivery}`);
  } else {
    return (joke.textContent = `${onlyJoke}`);
  }
};
