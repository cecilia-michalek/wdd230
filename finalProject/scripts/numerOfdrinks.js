const msToDays = 84600000;

const theDateToday = new Date();
const drinksDisplay = document.querySelector(".submitBtn");
const lastdrink = localStorage.getItem("lastdrink");



if (lastdrink !== null) {
    let lastdrinkDate = new Date(lastdrink)
    let daysSincelastdrink = Math.floor((theDateToday.getTime() - lastdrinkDate.getTime()) /msToDays)
    drinksDisplay.textContent = daysSincelastdrink
} else {
    drinksDisplay.textContent = 0
}


//Store new visit total into localStorage. key=lastdrink
localStorage.setItem("lastdrink", theDateToday);