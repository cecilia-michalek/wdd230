// Event listener for form submission
document.getElementById('shoppingForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
  
    // Get input values
    var itemName = document.getElementById('itemName').value;
    var itemPrice = document.getElementById('itemPrice').value;
  
    // Create item object
    var item = {
      name: itemName,
      price: itemPrice
    };
  
    // Add item to list
    addItemToList(item);
  
    // Clear input fields
    document.getElementById('itemName').value = '';
    document.getElementById('itemPrice').value = '';
  
    // Save list to file
    saveListToFile();
  });
  
  // Function to add item to list
  function addItemToList(item) {
    var itemList = document.getElementById('itemList');
    var listItem = document.createElement('li');
    listItem.textContent = item.name + ' - $' + item.price;
    itemList.appendChild(listItem);
  }
  
  // Function to save list to file
  function saveListToFile() {
    var items = Array.from(document.querySelectorAll('#itemList li'));
    var listData = items.map(function (item) {
      return item.textContent;
    }).join('\n');
  
    var blob = new Blob([listData], { type: 'text/plain' });
    var url = URL.createObjectURL(blob);
    var link = document.createElement('a');
    link.href = url;
    link.download = 'shopping_list.txt';
    link.click();
    URL.revokeObjectURL(url);

    // Variable to store the total price
var totalPrice = 0;

// Event listener for form submission
document.getElementById('shoppingForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  var itemName = document.getElementById('itemName').value;
  var itemPrice = parseFloat(document.getElementById('itemPrice').value);

  // Create item object
  var item = {
    name: itemName,
    price: itemPrice
  };

  // Add item to list
  addItemToList(item);

  // Update total price
  totalPrice += itemPrice;
  updateTotalPrice();

  // Clear input fields
  document.getElementById('itemName').value = '';
  document.getElementById('itemPrice').value = '';
});

// Function to add item to list
function addItemToList(item) {
  var itemList = document.getElementById('itemList');
  var listItem = document.createElement('li');
  listItem.textContent = item.name + ' - $' + item.price.toFixed(2);
  itemList.appendChild(listItem);
}

// Function to update total price
function updateTotalPrice() {
  var totalElement = document.getElementById('totalPrice');
  totalElement.textContent = 'Total Price: $' + totalPrice.toFixed(2);
}

// Function to add item to list
function addItemToList(item) {
  var itemList = document.getElementById('itemList');
  var listItem = document.createElement('li');
  var itemText = document.createElement('span');
  itemText.textContent = item.name + ' - $' + item.price.toFixed(2);
  var deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  
  // Event listener for delete button
  deleteButton.addEventListener('click', function() {
    listItem.remove();
  });

  listItem.appendChild(itemText);
  listItem.appendChild(deleteButton);
  itemList.appendChild(listItem);
}