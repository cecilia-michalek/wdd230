function validateTitle() {
    let titleInput = document.getElementById("title");
    let titleValue = titleInput.value.trim();

    let regex = /^[A-Za-z\s\-]{7,}$/;
    
    if (titleValue === "" || regex.test(titleValue)) {
      // Valid input
      titleInput.setCustomValidity("");
    } else {
      // Invalid input
      titleInput.setCustomValidity("Please enter a valid title with a minimum of seven alpha characters, hyphens, and spaces.");
    }
  }