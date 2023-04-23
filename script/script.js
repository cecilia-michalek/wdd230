//Current Year
/*function year() {
    let d = new Date();
    let b = d.getFullYear();
    document.getElementById("copyrightYear").innerHTML = b;
}*/

let date =  new Date().getFullYear();
document.getElementById("copyrightYear").innerHTML = date;

/*function lastUpdated() {
    let a = document.lastModified;
    document.getElementById("lastUpdated").innerHTML = a;
}*/
let currentYear = document.lastModified;
document.getElementById("lastUpdated").innerHTML = currentYear;
