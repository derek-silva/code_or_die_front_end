// URLs
const URL = `http://localhost:3000/users`;

// Event Listeners
document.addEventListener("DOMContentLoaded", getUsers);

// Functions for pop-up forms
function openForm() {
  document.getElementById("myForm").style.display = "block";
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// GET users from API
function getUsers() {
  fetch(URL)
    .then(res => res.json())
    .then(console.log);
}

function initMap() {
  const options = {
    zoom: 12,
    center: { lat: 29.7604, lng: -95.3698 }
  };

  const map = new google.maps.Map(document.getElementById("map"), options);
}
