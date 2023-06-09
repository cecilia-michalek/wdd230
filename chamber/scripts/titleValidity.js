function validateTitle() {
    var titleInput = document.getElementById("title");
    var titleValue = titleInput.value.trim();

    var regex = /^[A-Za-z\s\-]{7,}$/;
    
    if (titleValue === "" || regex.test(titleValue)) {
      // Valid input
      titleInput.setCustomValidity("");
    } else {
      // Invalid input
      titleInput.setCustomValidity("Please enter a valid title with a minimum of seven alpha characters, hyphens, and spaces.");
    }
  }