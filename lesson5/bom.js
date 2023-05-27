//Book of Mormon Chapter list

const button = document.getElementById("button");
const input = document.getElementById("input");
const ul = document.querySelector("ul");
const del = document.getElementsByClassName("delBtn");



function inputLength() {
	return input.value.length;
}

function createListElement() {
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
  
	//creates a button and adds it inside the li
	let btn = document.createElement("Button");
	btn.appendChild(document.createTextNode("❌"));
	btn.classList.add('delBtn');
	li.appendChild(btn);
	ul.appendChild(li);
	setButtons();
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

//toggles done class to strikethrough
function liClicked()
{
	console.log("li clicked");
	let element = document.querySelector("li");
  	element.classList.toggle("done");
}

//removes the li as parent element
function deleteLi(e){
	e.target.parentNode.remove();

}

function toggleStrike(e) {
		if (e.target.tagName === 'LI')
		{
      	e.target.classList.toggle("done");
  	}
}

//adds event listener to all buttons
function setButtons(){
	for (var i = 0; i <del.length; i++){
		del[i].addEventListener('click', deleteLi);
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

      
