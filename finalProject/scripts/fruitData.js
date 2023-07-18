const fruitDataUrl = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

// Fetch fruit data from the JSON source
fetch(fruitDataUrl)
  .then(response => response.json())
  .then(data => {
    const fruitOptions = data;
    populateSelectElements(fruitOptions);
  })
  .catch(error => {
    console.error('Error fetching fruit data:', error);
  });

function populateSelectElements(fruitOptions) {
  const selectElements = document.querySelectorAll('select[id^="fruit"]');
  
  selectElements.forEach(select => {
    fruitOptions.forEach(fruit => {
      const option = document.createElement('option');
      option.value = fruit.name;
      option.text = fruit.name;
      select.appendChild(option);
    });
  });
}

// Handle form submission
const form = document.getElementById('orderForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const firstName = document.getElementById('fName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const fruit1 = document.getElementById('fruit1').value;
  const fruit2 = document.getElementById('fruit2').value;
  const fruit3 = document.getElementById('fruit3').value;
  const instructions = document.getElementById('instructions').value;

  // Perform any necessary form validation or further processing
  // ...

  // Output the form data
  console.log('First Name:', firstName);
  console.log('Email:', email);
  console.log('Phone Number:', phone);
  console.log('Fruit 1:', fruit1);
  console.log('Fruit 2:', fruit2);
  console.log('Fruit 3:', fruit3);
  console.log('Special Instructions:', instructions);

  // Reset the form
  form.reset();
});
