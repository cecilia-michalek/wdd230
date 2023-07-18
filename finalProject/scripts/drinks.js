const url = 'drinks.json';
getDrinksData();

async function getDrinksData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.drinks);  // note that we reference the drinks array of the data object given the structure of the json file
    displayDrinks(data.drinks);
}

    const displayDrinks = (drinks) => {
      const cards = document.querySelector('div.cards'); // select the output container element
    
      drinks.forEach((drink) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let ingrediants = document.createElement('p');
        let image = document.createElement('img');
    
        // Build the h2 content out to show the drinks's name - finish the template string
        name.textContent = `${drink.name}`;
        ingrediants.innerHTML = `<strong>Ingrediates</strong>: ${drink.ingrediants}`;
        
        // Build the image by setting all the relevant attribute
        image.setAttribute('src', drink.image);
        image.setAttribute('alt',  `${drink.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '340');
        image.setAttribute('height', '440');
    
        // Append the section(card) with the created elements
        card.appendChild(name);
        card.appendChild(ingrediants);
        card.appendChild(image);
    
        cards.appendChild(card);
      }); // end of forEach loop
    } // end of function expression

  