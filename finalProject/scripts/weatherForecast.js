fetch("https://api.openweathermap.org/data/2.5/forecast?lat=33&lon=-117&units=imperial&cnt=3&appid=73e2b28753da83c109ebf8af22ca15b3")
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < 3; i++) {
      document.getElementById("day" + (i + 1) + "temp").innerHTML = "temp" + Number(data.list[i].main.temp - 85.35).toFixed(1);
      document.getElementById("img" + (i + 1)).src = "http://openweathermap.org/omg/wn/" + data.list[i].weather[0].icon + ".png";
    }
  })
  //.catch(err => alert("Something went wrong"));

const d = new Date();
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function CheckDay(day) {
  if (day == d.getDay() > 6) {
    return day + d.getDay() - 7;
  } else {
    return day + d.getDay();
  }
}

for (let i = 0; i < 3; i++) {
  document.getElementById("day" + (i + 1)).innerHTML = weekday[CheckDay(i)];
}
