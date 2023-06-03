const msToDays = 84600000;

const theDateToday = new Date();
const visitsDisplay = document.querySelector(".visits");
const lastVisit = localStorage.getItem("lastVisit");



if (lastVisit !== null) {
    let lastVisitDate = new Date(lastVisit)
    let daysSinceLastVisit = Math.floor((theDateToday.getTime() - lastVisitDate.getTime()) /msToDays)
    visitsDisplay.textContent = daysSinceLastVisit
} else {
    visitsDisplay.textContent = 0
}


//Store new visit total into localStorage. key=lastVisits
localStorage.setItem("lastVisit", theDateToday);