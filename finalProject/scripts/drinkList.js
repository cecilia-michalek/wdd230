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

  function displayDrinks(drinkLists) {
  const cards = document.querySelector('div.cards');

  drinkLists.forEach((drinks) => {
    // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let h3 = document.createElement('h3');
    let ingrediants = document.createElement('p');
    let imageurl = document.createElement('img');

    // Build the h3 content out to show the buisiness's name - finish the template string
    h3.textContent = drinks.name;
    ingrediants.innerHTML = `${drinks.ingrediants}`;
    

    // Build the image by setting all the relevant attribute
    imageurl.setAttribute('src', drinks.imageurl);
    imageurl.setAttribute('alt', `${drinks.name}`);
    imageurl.setAttribute('loading', 'lazy');
    imageurl.setAttribute('width', '220');
    imageurl.setAttribute('height', '320');

    // Append the section(card) with the created elements
    card.appendChild(h3);
    card.appendChild(imageurl);
    card.appendChild(ingrediants);

    cards.appendChild(card);

  }); // end of forEach loop
} //end of function expression

drinkLists = {};

const url = 'drinks.json';

async function getDrinksData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.drinks);  // note that we reference the drinks array of the data object given the structure of the json file
    drinkLists = data.drinks;
    displayDrinks(drinkLists);
  
}

getDrinksData();

