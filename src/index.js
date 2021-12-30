import "./style.css";
import getWeatherJSON from "./weather";

// async function getWeather(loc) {
//   const weather = await getWeatherJSON(loc);
//   console.log(weather);
// }

function convertTemp(kelvin, toCelcius) {
  if (toCelcius) {
    return `${Math.round(kelvin - 273.15)}ºC`;
  }
  return `${Math.round((kelvin - 273.15) * 1.8 + 32)}ºF`;
}

async function updateWeather(loc) {
  const isCelcius = document.getElementById("temp-switch").checked;

  const name = document.getElementById("city-name");
  const temp = document.getElementById("temp");
  const min = document.getElementById("min-temp");
  const max = document.getElementById("max-temp");
  const feels = document.getElementById("feels-like");
  const description = document.getElementById("description");
  const icon = document.getElementById("icon");
  const humidity = document.getElementById("humidity");

  try {
    const weather = await getWeatherJSON(loc);

    console.log(weather);

    name.innerText = weather.name;
    temp.innerText = convertTemp(weather.temp, isCelcius);
    min.innerText = `Min ${convertTemp(weather.tempMin, isCelcius)}`;
    max.innerText = `Max: ${convertTemp(weather.tempMax, isCelcius)}`;
    feels.innerText = `Feels like: ${convertTemp(
      weather.feelsLike,
      isCelcius
    )}`;
    description.innerText = weather.description;
    humidity.innerText = `Humidity: ${weather.humidity}`;
    icon.src = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;
  } catch (e) {
    alert("Invalid city name");
    throw e;
  }

  // if (weather === undefined) {
  //   alert("Invalid name!");
  //   return;
  // }
}

const button = document.getElementById("input-button");
const input = document.getElementById("input-field");
button.addEventListener("click", () => {
  updateWeather(input.value);
});

// console.log(getWeatherJSON("Porto Alegre"));

// getWeather("Porto Alegre");

// const json = getWeatherJSON("Porto Alegre");
// console.log(json.then((x) => console.log(x)));
