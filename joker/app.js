const joke = document.querySelector(".joke");

const url =
  "https://v2.jokeapi.dev/joke/Programming,Dark?blacklistFlags=nsfw,religious,political,racist,explicit";

const getJoke = async () => {
  const raw = await fetch(url);
  const data = await raw.json();

  if (data.joke === undefined && data.setup === undefined && data.delivery) {
    return (joke.innerHTML = "Click Again!!!");
  } else if (data.setup && data.delivery) {
    return (joke.innerHTML = `${data.setup + data.delivery}`);
  } else {
    return (joke.innerHTML = `${data.joke}`);
  }
};
