//Current Year
let fullYear = new Date(document.getFullYear)
document.querySelector("#copyrightYear").textContent = new Date.getFullYear();

let lastUpdated = new Date(document.lastModified);
document.querySelector("#lastUpdated").textContent = document.lastUpdated;