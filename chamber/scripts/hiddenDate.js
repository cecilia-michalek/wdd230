window.addEventListener('DOMContentLoaded', function() {
    var dateTimeField = document.getElementById('dateTime');
    var currentDate = new Date();
    var formattedDate = currentDate.toISOString(); // Convert date to string format

    dateTimeField.value = formattedDate;
  });