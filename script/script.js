//Current Year
function year() {
    let d = new Date();
    let b = d.getFullYear();
    document.getElementById("copyrightYear").innerHTML = b;
}

function lastUpdated() {
    let a = document.lastModified;
    document.getElementById("lastUpdated").innerHTML = a;
}