// Function to display the current time and date
function displayTime() {
  // Create a new Date object to get the current date and time
  let dateTime = new Date();

  // Retrieve hours, minutes, and seconds from the Date object
  let hrs = dateTime.getHours();
  let min = dateTime.getMinutes();
  let sec = dateTime.getSeconds();

  // Get the session element to display AM/PM
  let session = document.getElementById("session");

  // Get the current date in a readable format
  let dateToday = dateTime.toDateString();

  // Determine AM or PM and update the session element
  if (hrs >= 12) {
    session.innerHTML = "PM";
  } else {
    session.innerHTML = "AM";
  }

  // Convert hours from 24-hour format to 12-hour format
  if (hrs >= 12) {
    hrs = hrs - 12;
  }

  // Ensure seconds are displayed in two-digit format
  if (sec < 10) {
    sec = "0" + sec;
  }

  // Ensure minutes are displayed in two-digit format
  if (min < 10) {
    min = "0" + min;
  }

  // Ensure hours are displayed in two-digit format
  if (hrs < 10) {
    hrs = "0" + hrs;
  }

  // Update the HTML elements with the formatted time and date
  document.getElementById("hours").innerHTML = hrs;
  document.getElementById("minutes").innerHTML = min;
  document.getElementById("seconds").innerHTML = sec;
  document.querySelector(".day").innerHTML = dateToday;
}

// Set an interval to call displayTime every second (1000 milliseconds)
setInterval(displayTime, 1000);

// COPYRIGHT NOTICE
// Select DOM element
const copyright = document.getElementById("copy");

// Dynamically generate copyright information
copyright.innerHTML =
  "Copyright &copy; " + // Start of the copyright string
  new Date().getFullYear() + // Get the current year
  ` <a href="https://www.gaz41.com">gaz41.com</a>. <span class="copy2">All Rights Reserved</span>`;
