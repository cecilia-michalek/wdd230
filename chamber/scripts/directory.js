const url = 'data.json';
getDirectoryData();

async function getDirectoryData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.directory);  // note that we reference the prophet array of the data object given the structure of the json file
    displayDirectory(data.directory);
  } catch (error) {
    console.error('Error:', error);
  }
}

    const displayDirectory = (business) => {
      const cards = document.querySelector('div.cards'); // select the output container element
    
      directory.forEach((business) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let location = document.createElement('p');
        let phoneNumber = document.createElement('p');
        let email = document.createElement('p');
        let imageurl = document.createElement('img');
    
        // Build the h2 content out to show the buisiness's name - finish the template string
        name.textContent = `${business.name}`;
        location.innerHTML = `${business.location}`;
        phoneNumber.innerHTML = `${business.phoneNumber}`;
        email.innerHTML = `${business.email}`;
        
        // Build the image by setting all the relevant attribute
        imageurl.setAttribute('src', business.imageurl);
        imageurl.setAttribute('alt', `${business.name}`);
        imageurl.setAttribute('loading', 'lazy');
        imageurl.setAttribute('width', '340');
        imageurl.setAttribute('height', '440');
    
        // Append the section(card) with the created elements
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(phoneNumber);
        card.appendChild(email);
        card.appendChild(imageurl);
    
        cards.appendChild(card);
      }); // end of forEach loop
    } // end of function expression
  
  

  