const key = "387ddd18a77c5487de024e38681b0ecc";

async function getWeatherJSON(location) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`
  );

  const json = await response.json();
  //   console.log(json);
  const weather = {
    name: json.name,
    main: json.weather[0].main,
    description: json.weather[0].description,
    temp: json.main.temp,
    feelsLike: json.main.feels_like,
    tempMin: json.main.temp_min,
    tempMax: json.main.temp_max,
    pressure: json.main.pressure,
    humidity: json.main.humidity,
    icon: json.weather[0].icon,
  };
  //   console.log(weather);
  return weather;
}

export default getWeatherJSON;
