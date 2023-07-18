const fruitDataUrl = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

// Fetch fruit data from the JSON source
fetch(fruitDataUrl)
  .then(response => response.json())
  .then(data => {
    const fruitOptions = data;
    populateSelectElements(fruitOptions);

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
      const instructions = document.getElementById('specialInstructions').value;

      // Perform any necessary form validation or further processing
      // ...

      // Output the form data
      displayFormData(firstName, email, phone, fruit1, fruit2, fruit3, instructions);

      // Reset the form
      form.reset();
    });
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

function displayFormData(firstName, email, phone, fruit1, fruit2, fruit3, instructions) {
  const outputContainer = document.getElementById('outputArea');
  outputContainer.innerHTML = ''; // Clear previous content

  const title = document.createElement('h2');
  title.textContent = 'Order Details:';
  outputContainer.appendChild(title);

  const firstNamePara = document.createElement('p');
  firstNamePara.innerHTML = `<strong>First Name:</strong> ${firstName}`;
  outputContainer.appendChild(firstNamePara);

  const emailPara = document.createElement('p');
  emailPara.innerHTML = `<strong>Email:</strong> ${email}`;
  outputContainer.appendChild(emailPara);

  const phonePara = document.createElement('p');
  phonePara.innerHTML = `<strong>Phone:</strong> ${phone}`;
  outputContainer.appendChild(phonePara);

  const fruitSelectionPara = document.createElement('p');
  fruitSelectionPara.innerHTML = `<strong>Fruit Selection:</strong> ${fruit1}, ${fruit2}, ${fruit3}`;
  outputContainer.appendChild(fruitSelectionPara);

  const instructionsPara = document.createElement('p');
  instructionsPara.innerHTML = `<strong>Special Instructions:</strong> ${instructions}`;
  outputContainer.appendChild(instructionsPara);
}
