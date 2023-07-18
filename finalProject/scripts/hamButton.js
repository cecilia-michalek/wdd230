const hamButton = document.querySelector('#hamButton');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('responsive');
	document.querySelector("#open").classList.toggle('active')
	document.querySelector("#close").classList.toggle('active')
});

let date =  new Date().getFullYear();
document.getElementById("copyrightYear").innerHTML = date;