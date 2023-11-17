const key = "e74787c902a330d93639e594e6ebe0e6";

const main = document.querySelector(".main");
const input = document.querySelector(".input");
const search = document.querySelector(".search-btn");
const result = document.querySelector(".result");

const getWeather = () => {
  var city = input.value.trim();

  // if the city input text is empty
  if (city === "") {
    result.innerHTML = `<h3 class="enter-city">Please Enter a City</h3>`;
  }
  // if user enters correct city
  else {
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

    fetch(url)
      // first then gives the raw data which is not readable
      .then((raw) => raw.json())
      // first then gives the actual data in the form of object which is readable
      .then((data) => {
        result.innerHTML = `<h3 class="city-name">${data.name}</h3>
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" class="weather-icon">
        <p class="weather-description">${data.weather[0].description}</p>
        <p class="weather-main">${data.weather[0].main}</p>
        <div class="main-description">
            <span class="temp-humi">Temp: ${data.main.temp}&#176</span>
            <span class="temp-humi">Humidity: ${data.main.humidity}</span>
        </div>
        <div class="sub-description mt-2">
            <span class="min-max">Min: ${data.main.temp_min}</span>
            <span class="min-max">Max: ${data.main.temp_max}</span>
            <span class=""></span>
        </div>`;
        // console.log(data);
      })
      // if  the user enters wrong city name
      .catch(() => {
        result.innerHTML = `<h3 class="wrong-city">City Not Found</h3>`;
      });
  }
};

window.addEventListener("load", getWeather);

const darkbtn = document.querySelector(".dark-mode");
const icon = document.querySelector(".dark-mode i");
const modeText = document.querySelector(".mode-text");

darkbtn.onclick = () => {
  main.classList.toggle("dark-color");
  if (main.classList.contains("dark-color")) {
    icon.classList.replace("bi-moon-fill", "bi-brightness-high-fill");
    icon.style.color = "#c4c4c4";
    modeText.innerHTML = "Dark Mode";
    modeText.style.color = "#c4c4c4";
  } else {
    icon.classList.replace("bi-brightness-high-fill", "bi-moon-fill");
    icon.style.color = "#141414";
    modeText.innerHTML = "Light Mode";
    modeText.style.color = "#141414";
  }
};
