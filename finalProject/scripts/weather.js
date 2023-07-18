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
    let temperature = weatherJSON.main.temp.toFixed(0);
    let description = weatherJSON.weather[0].description;
    let icon = weatherJSON.weather[0].icon;

    // Display the weather information
    displayWeather(temperature, description, icon);
  } catch (error) {
    console.error("Error parsing weather data:", error);
  }
};

let displayWeather = function (temperature, description, icon) {
  let out = `<div class="weatherInfo"><img src="http://openweathermap.org/img/wn/${icon}.png"/>`;
  out += `<h2>${temperature}F</h2>`;
  out += `<h3>${description}</h3>`;
  document.getElementById("forecast").innerHTML = out;
};


/*let getDayOfWeek = function (dayNum) {
  let weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  return weekday[dayNum];
};*/

const getDayOfWeek = new Date();
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function CheckDay(day) {
    return (day + getDayOfWeek.getDay()) % 7;
}

for (let i = 0; i < 3; i++) {
    document.getElementById("day" + (i + 1)).innerHTML = weekday[CheckDay(i)];
  }
  