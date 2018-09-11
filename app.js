// URLs
const URL = `http://localhost:3000/users`;

// UI Elements
const topicInput = document.getElementById("topic");
const addressInput = document.getElementById("address");
const descriptionInput = document.getElementById("description");
const dateInput = document.getElementById("date");
const startTimeInput = document.getElementById("start_time");
const endTimeInput = document.getElementById("end_time");
const meetUpForm = document.getElementById("meetup-form");

// Event Listeners
document.addEventListener("DOMContentLoaded", getUsers);
meetUpForm.addEventListener("submit", createMeetup);

// Functions for pop-up form
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

// Format Meetup Form Inputs to be used to persit data and add markers to the DOM
function createMeetup(e) {
  e.preventDefault();
  let coords = getCoords(addressInput.value);
}

// Get Coordinates from Address
function getCoords(address) {
  const location = address;
  fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyB0Qt4jCMA75sX8axKugOR-eAmvnw_x8zU`
  )
    .then(res => res.json())
    .then(addressObj => {
      coords = addressObj.results[0].geometry.location;
    });
}
