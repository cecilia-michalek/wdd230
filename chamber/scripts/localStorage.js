const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = 'This is your first visit. Welcome!';
}
//increment the number of visits by one.
numVisits++;

//Store new visit total into localStorage. key=numVisits-ls (with to paramethers)
localStorage.setItem("numVisits-ls", numVisits);