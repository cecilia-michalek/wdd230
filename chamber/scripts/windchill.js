

document.addEventListener("DOMContentLoader", function() {
    const s = 25;
    const t = 30;
    let windchill = document.getElementById("windchill");

    windchill.innerHTML = buildWC(s, t);
});

function buildWC(s, t) {
    


//Windchill calculation
    let wc = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
    if (t >= 50 && s > 3.0) {
        windchill = wc.toFixed(2);
      } else {
        windchill = "N/A";
      }
      document.getElementById("windChill").innerHTML = windchill;

//Round answer
    wc = Math.floor(wc);
    }
//windchill
return wc;