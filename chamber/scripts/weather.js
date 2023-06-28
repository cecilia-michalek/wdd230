// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const windspeed = document.querySelector('#windspeed')
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40&lon=-112&units=imperial&appid=ba34c705a75514f0abbadde989206bb5';

apiFetch();

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function  displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    windspeed.innerHTML = `<strong>${weatherData.wind.speed.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    const desc = capitalizeFirstLetter(weatherData.weather[0].description);

  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
  }

const t = parseFloat(document.getElementById("current-temp").innerHTML);
const s = parseFloat(document.getElementById("windspeed").innerHTML);
const f = 35.74 + 0.6215*t - 35.75*(Math.pow(s,0.16)) + 0.4275*t*(Math.pow(s,0.16))
if (t<=50 && s>3.0){
        windchill=f.toFixed(2);
    }
else{
    windchill = "N/A";
}

document.getElementById('windchill').innerHTML = windchill;


  