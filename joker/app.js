const joke = document.querySelector(".joke");

const url =
  "https://v2.jokeapi.dev/joke/Programming,Dark?blacklistFlags=nsfw,religious,political,racist,explicit";

const getJoke = () => {
  fetch(url)
    .then((raw) => raw.json())
    .then((data) => (joke.innerHTML = `${data.joke}`));
};
