const apiKey = '73e2b28753da83c109ebf8af22ca15b3';
const lat = '33.16';
const lon = '-117.35';

const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&cnt=3&appid=${apiKey}`;

apiFetch();

async function apiFetch() {
  try {
    const [currentResponse, forecastResponse] = await Promise.all([
      fetch(currentWeatherUrl),
      fetch(forecastUrl)
    ]);

    if (currentResponse.ok && forecastResponse.ok) {
      const currentData = await currentResponse.json();
      const forecastData = await forecastResponse.json();

      console.log(currentData); // Current weather data (for testing)
      console.log(forecastData); // Forecast data (for testing)

      displayCurrentWeather(currentData);
      displayForecast(forecastData);
    } else {
      throw new Error('Failed to fetch data.');
    }
  } catch (error) {
    console.log(error);
  }
}

function displayCurrentWeather(data) {
  const currentTemp = data.main.temp.toFixed(0);
  const condition = capitalizeFirstLetter(data.weather[0].description);
  const humidity = data.main.humidity;

  // Display current weather data
  document.getElementb('weatherCurrent-icon').setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`)
  document.getElementById('current-temp').innerHTML = currentTemp;
  document.getElementById('condition').innerHTML = condition;
  document.getElementById('humidity').innerHTML = humidity;
}
/*
function displayForecast(data) {
  const forecastContainer = document.getElementById('card1');

  // Clear previous forecast
  forecastContainer.innerHTML = '';

  // Iterate over forecast data for the next three days
  for (let i = 0; i < 3; i++) {
    const forecast = data.list[i];
    const temp = forecast.temp.day.toFixed(0);
    const date = new Date(forecast.dt * 1000);
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });

    // Create forecast card
    const forecastCard = document.createElement('div');
    forecastCard.classList.add('forecast-card');
    forecastCard.innerHTML = `
      <div class="forecast-date">${dayOfWeek}</div>
      <div class="forecast-temp">${temp}&deg;F</div>
    `;

    forecastContainer.appendChild(forecastCard);
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}*/
