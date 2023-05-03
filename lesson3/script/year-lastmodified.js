let date =  new Date().getFullYear();
document.getElementById("copyrightYear").innerHTML = date;

/*function lastUpdated() {
    let a = document.lastModified;
    document.getElementById("lastUpdated").innerHTML = a;
}*/
let currentYear = document.lastModified;
document.getElementById("lastUpdated").innerHTML = currentYear;
