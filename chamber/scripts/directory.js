const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".cards");

listbutton.addEventListener("click", () => {
  display.classList.add("list");
  display.classList.remove("grid");
});

gridbutton.addEventListener("click", () => {
  display.classList.remove("list");
  display.classList.add("grid");
});

//Business grid

  function displayDirectory(directoryLists) {
  const cards = document.querySelector('div.cards');

  directoryLists.forEach((directory) => {
    // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let h3 = document.createElement('h3');
    let location = document.createElement('p');
    let phoneNumber = document.createElement('p');
    let email = document.createElement('p');
    let imageurl = document.createElement('img');

    // Build the h3 content out to show the buisiness's name - finish the template string
    h3.textContent = directory.name;
    location.innerHTML = `${directory.location}`;
    phoneNumber.innerHTML = `${directory.phoneNumber}`;
    email.innerHTML = `${directory.email}`;

    // Build the image by setting all the relevant attribute
    imageurl.setAttribute('src', directory.imageurl);
    imageurl.setAttribute('alt', `${directory.name}`);
    imageurl.setAttribute('loading', 'lazy');
    imageurl.setAttribute('width', '220');
    imageurl.setAttribute('height', '320');

    // Append the section(card) with the created elements
    card.appendChild(h3);
    card.appendChild(location);
    card.appendChild(phoneNumber);
    card.appendChild(email);
    card.appendChild(imageurl);

    cards.appendChild(card);

  }); // end of forEach loop
} //end of function expression

directoryList = {};

const url = 'data.json';

async function getDirectoryData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.directory);  // note that we reference the directory array of the data object given the structure of the json file
    directoryList = data.directory;
    displayDirectory(directoryList);
  
}


getDirectoryData();

