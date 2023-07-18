//const fruitDataUrl = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

// Fetch and parse the fruits.json file
fetch(fruitDataUrl)
  .then(response => response.json())
  .then(data => {
    const fruitNutritionData = data;
    populateSelectElements(fruitNutritionData);

    // Add event listener to the form, calculate total nutrition, and display output
    document.getElementById("orderForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission and page reload

      // Get input values from the form...
      const firstName = document.getElementById("fName").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const fruit1 = document.getElementById("fruit1").value;
      const fruit2 = document.getElementById("fruit2").value;
      const fruit3 = document.getElementById("fruit3").value;
      const specialInstructions = document.getElementById("specialInstructions").value;

      // Calculate total nutrition based on selected fruits...
      const totalCarbs = calculateTotalNutrition([fruit1, fruit2, fruit3], "carbs");
      const totalProtein = calculateTotalNutrition([fruit1, fruit2, fruit3], "protein");
      const totalFat = calculateTotalNutrition([fruit1, fruit2, fruit3], "fat");
      const totalSugar = calculateTotalNutrition([fruit1, fruit2, fruit3], "sugar");
      const totalCalories = calculateTotalNutrition([fruit1, fruit2, fruit3], "calories");

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
      document.getElementById("outputArea").innerHTML = formattedOutput;
    });
  })
  .catch(error => {
    console.error("Error fetching or parsing the fruits data:", error);
  });

  function calculateTotalNutrition(fruits, nutrient, fruitNutritionData) {
    let total = 0;
    for (const fruit of fruits) {
      const fruitData = fruitNutritionData.find(item => item.name === fruit);
      if (fruitData) {
        total += fruitData[nutrient];
      }
    }
    return total;
}
