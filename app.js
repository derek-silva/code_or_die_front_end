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
const logInForm = document.querySelector('.login');
const logInStyle = document.querySelector('#login-style');
const navMobile = document.getElementById("nav-mobile");

// Event Listeners
document.addEventListener("DOMContentLoaded", getUsers);
meetUpForm.addEventListener("submit", createMeetup);
logInForm.addEventListener("submit", createLogin);

//User Login
function createLogin(e) {
  e.preventDefault();
  logInForm.style.display = "none";
  // logInStyle.remove();
  document.getElementById('map').style.display = "block";
  document.querySelector('nav').style.display = "block";
  firstName = event.target.children[0].value
  lastName = event.target.children[1].value
  userName = event.target.children[2].value
  userEmail = event.target.children[3].value
  navMobile.children[0].innerHTML = `<a href="#">Hello, ${userName}!</a>`
  persistUsers()
}

//Persist User Data
function persistUsers() {
  fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        user_name: userName,
        email: userEmail
    }),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
  })
}


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
  getCoords(addressInput.value)
    .then(position => myMap.addMarker(position))
    .then(closeForm())
    .then(alert("Meet Up Created!"));
}

// Get Coordinates from Address
function getCoords(address) {
  const location = address;
  return fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyB0Qt4jCMA75sX8axKugOR-eAmvnw_x8zU`
  )
    .then(res => res.json())
    .then(addressObj => {
      return addressObj.results[0].geometry.location;
    });
}





