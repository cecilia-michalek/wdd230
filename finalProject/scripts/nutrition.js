const fruitDataUrl = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

// Fetch fruit data from the JSON source
fetch(fruitDataUrl)
  .then(response => response.json())
  .then(data => {
    const fruitOptions = data;
    populateSelectElements(fruitOptions);

    // Handle form submission
    const form = document.getElementById('orderForm');
    const outputArea = document.getElementById('outputArea');
    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const firstName = document.getElementById('fName').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const fruit1 = document.getElementById('fruit1').value;
      const fruit2 = document.getElementById('fruit2').value;
      const fruit3 = document.getElementById('fruit3').value;
      const specialInstructions = document.getElementById('specialInstructions').value;

      // Calculate total nutrition based on selected fruits...
      const totalCarbs = calculateTotalNutrition([fruit1, fruit2, fruit3], "carbohydrates", fruitOptions);
      const totalProtein = calculateTotalNutrition([fruit1, fruit2, fruit3], "protein", fruitOptions);
      const totalFat = calculateTotalNutrition([fruit1, fruit2, fruit3], "fat", fruitOptions);
      const totalSugar = calculateTotalNutrition([fruit1, fruit2, fruit3], "sugar", fruitOptions);
      const totalCalories = calculateTotalNutrition([fruit1, fruit2, fruit3], "calories", fruitOptions);

      // Prepare the formatted output...
      const formattedOutput = `
        <h2>Order Details:</h2>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Fruit Selection:</strong> ${fruit1}, ${fruit2}, ${fruit3}</p>
        <p><strong>Special Instructions:</strong> ${specialInstructions}</p>
        <h2>Total Nutrition:</h2>
        <p><strong>Total Carbs:</strong> ${totalCarbs}g</p>
        <p><strong>Total Protein:</strong> ${totalProtein}g</p>
        <p><strong>Total Fat:</strong> ${totalFat}g</p>
        <p><strong>Total Sugar:</strong> ${totalSugar}g</p>
        <p><strong>Total Calories:</strong> ${totalCalories}kcal</p>
      `;

      // Display the formatted output in the output area...
      outputArea.innerHTML = formattedOutput;
      outputArea.style.display = 'block';

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

function calculateTotalNutrition(fruits, nutrient, fruitOptions) {
  let total = 0;
  for (const fruit of fruits) {
    const fruitData = fruitOptions.find(item => item.name === fruit);
    if (fruitData && fruitData.nutritions && fruitData.nutritions[nutrient]) {
      total += fruitData.nutritions[nutrient];
    }
  }
  return total;
}
