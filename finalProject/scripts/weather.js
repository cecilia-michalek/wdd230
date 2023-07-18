const apiKey = '73e2b28753da83c109ebf8af22ca15b3';
const lat = '33.16';
const lon = '-117.35';

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&cnt=4&appid=${apiKey}`;
getWeatherText(url);

async function getWeatherText(url) {
  try {
    let weatherObject = await fetch(url);
    let weatherText = await weatherObject.text();
    console.log(weatherObject);
    console.log(weatherText);
    parseWeather(weatherText);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

const parseWeather = function (weatherText) {
  try {
    let weatherJSON = JSON.parse(weatherText);

    // Extract the necessary weather information from weatherJSON object
    let forecastList = weatherJSON.list;
    let forecastData = [];

    for (let i = 0; i < forecastList.length; i++) {
      let forecast = forecastList[i];
      let temperature = forecast.main.temp.toFixed(0);
      let description = forecast.weather[0].description;
      let icon = forecast.weather[0].icon;
      let humidity = forecast.main.humidity;
      forecastData.push({ temperature, description, icon, humidity });
    }

    // Display the weather information
    displayWeather(forecastData);
  } catch (error) {
    console.error("Error parsing weather data:", error);
  }
};

let displayWeather = function (forecastData) {
  let out = '';

  for (let i = 0; i < forecastData.length; i++) {
    let forecast = forecastData[i];
    let dayIndex = CheckDay(i);
    let dayOfWeek = getDayOfWeek(dayIndex);
    out += `<h2>${dayOfWeek}</h2></div>`;
    out += `<div class="weatherInfo"><img src="http://openweathermap.org/img/wn/${forecast.icon}.png"/>`;
    out += `<h3>${forecast.description}</h3>`;
    out += `<h3>${forecast.temperature}F</h3>`;
    out += `<h3>${forecast.humidity}%</h3>`;
    
    
    
  }

  document.getElementById("forecast").innerHTML = out;
};

const getDayOfWeek = function (dayNum) {
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return weekday[dayNum];
};

const CheckDay = function (day) {
  const today = new Date().getDay();
  return (today + day) % 7;
};

for (let i = 0; i < 3; i++) {
  document.getElementById("day" + (i + 1)).innerHTML = getDayOfWeek(CheckDay(i));
}
