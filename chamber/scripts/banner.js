const today = new Date().getDay();


if (today=== 1|| today ===2) {
    document.querySelector(".banner").style.display="flex";
}
else {
    document.querySelector('.banner').style.display="none";
    
};

document.querySelector(".banner-close").addEventListener("click", function() {
    document.querySelector(".banner").style.display = "none";
})