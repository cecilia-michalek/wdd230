function toggleParagraph() {
    var paragraph = document.getElementsById("myParagraph1");
    if (paragraph.style.display === "none") {
      paragraph.style.display = "block";
    } else {
      paragraph.style.display = "none";
    }
  }