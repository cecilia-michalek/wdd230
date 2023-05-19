const today = newDate().getDate();

if (today=== 1|| today ===2) {
    document.querySelector(".banner").textContent = today
}
else (today!==1 || today!== 2) {
    document.querySelector('.banner').style.display="none";
    
};

document.querySelector(".banner-close").addEventListener("click", function() {
    document.querySelector(".banner").style.display = "none";
})