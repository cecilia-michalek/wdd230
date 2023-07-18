  
  /*function displayImages(images) {
    const imageContainer = document.getElementById('image-container');
    const image = document.createElement('img');
  
    if (displayImages.index >= images.length) {
      // Reset the index if all images have been displayed
      displayImages.index = 0;
    }
  
    const imageIndex = displayImages.index;
    image.src = images[imageIndex];
  
    // Remove the previous image if any
    if (imageContainer.firstChild) {
      imageContainer.firstChild.remove();
    }
  
    // Append the new image to the container
    imageContainer.appendChild(image);
  
    // Increment the index for the next image
    displayImages.index++;
  
    // Set a timeout to display the next image
    setTimeout(displayImages(images), 2000); // Change the delay (in milliseconds) as needed
  }
  
  // Initialize the index
  displayImages.index = 0;
  
  // Fetch the JSON file
fetch('drinks.json')
.then(response => response.json())
.then(data => {
  const images = []
  data.drinks.forEach(element => {
    images.push(element.image)
  });
  // Start displaying images
  displayImages(images);
})
.catch(error => {
  console.error('Error fetching images:', error);
});*/
  