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
const meetUpFormDiv = document.getElementById("myFormDiv");

// Event Listeners
// document.addEventListener("DOMContentLoaded", getUsers);
meetUpForm.addEventListener("submit", createMeetup);

// Functions for pop-up form
function openForm() {
  meetUpForm.reset();
  meetUpFormDiv.style.display = "block";
}
function closeForm() {
  meetUpFormDiv.style.display = "none";
}

// Format Meetup Form Inputs to be used to persit data and add markers to the DOM
function createMeetup(e) {
  e.preventDefault();
  getLocationObj(addressInput.value)
    .then(locationObj => myMap.addMarker(locationObj))
    .then(closeForm());
}

// Get Coordinates from Address
function getLocationObj(address) {
  const location = address;
  return fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyB0Qt4jCMA75sX8axKugOR-eAmvnw_x8zU`
  )
    .then(res => res.json())
    .then(addressObj => {
      return {
        coords: addressObj.results[0].geometry.location,
        address: addressObj.results[0].formatted_address
      };
    });
}
