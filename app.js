// URLs
const USERS_URL = `http://localhost:3000/users`;
const MEETUPS_URL = `http://localhost:3000/meetups`;

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
document.addEventListener("DOMContentLoaded", getUsers);
meetUpForm.addEventListener("submit", createMeetup);
logInForm.addEventListener("submit", createLogin);

//User Login
function createLogin(e) {
  e.preventDefault();
  // document.styleSheets[5].disabled = true
  logInForm.style.display = "none";
  logInStyle.remove();
  document.getElementById('map').style.display = "block";
  document.querySelector('nav').style.display = "block";
  firstName = event.target.children[0].value
  lastName = event.target.children[1].value
  userName = event.target.children[2].value
  userEmail = event.target.children[3].value
  navMobile.children[0].innerHTML = `<a href="#">Hello, ${userName}!</a>`
  if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("username", userName);
    localStorage.setItem("email", userEmail);
    localStorage.setItem("firstname", firstName);
    localStorage.setItem("lastname", lastName);
    if (document.getElementById(userName) === null && document.getElementById(userEmail) === null && document.getElementById(firstName) === null && document.getElementById(lastName) === null) {
      // debugger
      persistUsers()
      document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
    else if (userName === document.getElementById(userName).innerText && userEmail === document.getElementById(userEmail).innerText && firstName === document.getElementById(firstName).innerText && lastName === document.getElementById(lastName).innerText) {
    // Retrieve
    document.getElementById("result").innerHTML = localStorage.getItem("username");
    document.getElementById("result").innerHTML = localStorage.getItem("email");
    document.getElementById("result").innerHTML = localStorage.getItem("firstname");
    document.getElementById("result").innerHTML = localStorage.getItem("lastname");
    } 
  }
}

//Persist User Data
function persistUsers() {
  fetch(USERS_URL, {
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

//Local Storage 


// Functions for pop-up form
function openForm() {
  document.getElementById("myForm").style.display = "block";
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// GET users from API
function getUsers() {
  fetch(USERS_URL)
    .then(res => res.json())
    .then(displayUsers);
}

// GET meetups from API
function getMeetups() {
  fetch(MEETUPS_URL)
    .then(res => res.json())
    .then(addressObj => {
      return {
        coords: addressObj.results[0].geometry.location,
        address: addressObj.results[0].formatted_address
      };
    });
}

// START DEREK

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
}

// END DEREK


// Display Users
function displayUsers(data) {
  const container = document.getElementById("result")
  data.forEach((user) => {
    return container.innerHTML += `<ul id=${user.user_name}> ${user.user_name} </ul>
                                  <ul id=${user.email}> ${user.email} </ul>
                                  <ul id=${user.first_name}> ${user.first_name} </ul>
                                  <ul id=${user.last_name}> ${user.last_name} </ul>
                                  `
  })
  container.style.display = 'none'
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





