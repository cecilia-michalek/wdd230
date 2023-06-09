/*function toggleParagraph() {
    var paragraph = document.getElementsById("myParagraph");
    if (paragraph.style.display === "none") {
      paragraph.style.display = "block";
    } else {
      paragraph.style.display = "none";
    }
  }*/
  function toggleParagraph(paragraphId) {
    var paragraph = document.getElementById(paragraphId);
    paragraph.classList.toggle('hidden');
  }