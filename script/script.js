const h1 = document.querySelector("h1");
const copyright = document.querySelector("#copyright")

h1.textContent = "Cecilia Michalek";
const currentYear = new Date().getFullYear();
copyright.textContent = `${currentYear}`;
let quantity = document.querySelector("#q").value;

const oLastModif = document.querySelector("#olastModif")
let oLastModif = new Date(document.lastModified);