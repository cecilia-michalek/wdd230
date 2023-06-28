window.addEventListener('DOMContentLoaded', function() {
    let dateTimeField = document.getElementById('dateTime');
    let currentDate = new Date();
    let formattedDate = currentDate.toISOString(); // Convert date to string format

    dateTimeField.value = formattedDate;
  });