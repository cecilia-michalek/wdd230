const url = 'directory.json';
getDirectoryData();

async function getDirectoryData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.directory);  // note that we reference the prophet array of the data object given the structure of the json file
    displayDirectory(data.directory);
}

    const displayDirectory = (business) => {
      const cards = document.querySelector('div.cards'); // select the output container element
    
      directory.forEach((business) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let location = document.createElement('p');
        let phoneNumber = document.createElement('p');
        let imageurl = document.createElement('img');
    
        // Build the h2 content out to show the prophet's full name - finish the template string
        h2.textContent = `${business.name}`;
        location.innerHTML = `<strong>Location</strong>: ${business.location}`;
        phoneNumber.innerHTML = `${prophet.phoneNumber}`;
        email.innerHTML = `${ business.email}`;
        
        // Build the image portrait by setting all the relevant attribute
        portrait.setAttribute('src', business.imageurl);
        portrait.setAttribute('alt', `Portait of ${business.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
    
        // Append the section(card) with the created elements
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(phoneNumber);
        card.appendChild(email);
    
        cards.appendChild(card);
      }); // end of forEach loop
    } // end of function expression
  
  

  