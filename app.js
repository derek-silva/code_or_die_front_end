// // URLs
// const URL = `http://localhost:3000/users`;

// // Event Listeners
// document.addEventListener("DOMContentLoaded", getUsers);

// // GET users from API
// function getUsers() {
//   fetch(URL)
//     .then(res => res.json())
//     .then(console.log);
// }

// const homeContainer = document.querySelector('.home-container')

// homeContainer.innerHTML += `
// <form id="user-login" accept-charset="utf-8">
//         <div class="field has-addons">
//           <div class="control">
//             <input type="text" name="username" class="input" id="username" placeholder="Enter Your Name" autocomplete="off">
//           </div>
//           <div class="control">
//             <input type="submit" name="submit" class="button is-primary" id="submit" value="Submit">
//           </div>
//         </div>
//       </form>
// `
// const createForm = document.querySelector('#user-login')
// createForm.addEventListener('submit', createUser)

// function createUser(event) {
  
//   event.preventDefault()
//   const inputValue = event.target.children[0].children[0].children[0].value
//   const topNav = document.querySelector('.topnav')
//   topNav.innerHTML = `
//   <a>Hello ${capitalizeFirstLetter(inputValue)}!</a>
//   <a>Create Meet Up</a>
//   `
//   createForm.innerHTML = ''

//   fetch(URL, {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Body': 'application/json'
//     },
//     body: JSON.stringify({
//       name: name,
//       email: email,
//       bio: bio
//     })
//   })
// }

// function capitalizeFirstLetter(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }


// URLs
const URL = `http://localhost:3000/users`;

// Event Listeners
document.addEventListener("DOMContentLoaded", getUsers);
document.addEventListener("DOMContentLoaded", login);
document.addEventListener("DOMContentLoaded", initMap);

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


function login() {
  const loginPage = document.querySelector('#login-page')
  const background = document.querySelector('#background')
  loginPage.addEventListener('submit', createUser)
  function createUser(event) {
    event.preventDefault()
    
    // console.log('clicked')
    loginPage.innerHTML=''
    background.innerHTML = ''
    let houstonMap = `<!DOCTYPE html>
    <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
     crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <title>Code Or Die!</title>
  </head>
  
  <body class="grey darken-3">
  
    <!-- NAV BAR HTML -->
    <nav>
      <div class="nav-wrapper grey darken-3">
        <a href="#" class="brand-logo center">Code or Die!</a>
        <i class="large material-icons left" style="padding-left:1%">code</i>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="#">Hello, User!</a></li>
          <li><a href="#">About</a></li>
          <li>
            <a href="#" class="btn-floating pulse red">
              <i class="material-icons" onclick="openForm()">add</i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  
    <!-- GOOGLE MAPS DIV -->
    <div id="map"></div>
  
    <!-- FORM HTML -->
    <div class="form-popup row white" id="myForm">
      <h5 class="left col s12" style="padding:1%;font-weight:bold;">Create Code Meet Up</h5>
      <form class="form-container col s12">
        <div class="row">
          <div class="input-field col s6">
            <input id="name" type="text" required>
            <label for="name">Name</label>
          </div>
          <div class="input-field col s6">
            <input id="topic" type="text" required>
            <label for="topic">Topic</label>
          </div>
          <div class="input-field col s12">
            <input id="address" type="text" required>
            <label for="address">Address</label>
          </div>
          <div class="input-field col s12">
            <input id="description" type="text" required>
            <label for="description">Description</label>
          </div>
          <div class="input-field col s12">
            <input id="date" type="date" required>
            <label for="date">Date</label>
          </div>
          <div class="input-field col s6">
            <input id="start_time" type="time" required>
            <label for="start_time">Start Time</label>
          </div>
          <div class="input-field col s6">
            <input id="end_time" type="time" required>
            <label for="end_time">End Time</label>
          </div>
        </div>
        <div class="center">
          <button type="submit" class="btn red">Create Code Meet Up</button>
        </div>
        <div class="center">
          <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
        </div>
      </form>
    </div>
   
    <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
     crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB0Qt4jCMA75sX8axKugOR-eAmvnw_x8zU&callback=initMap"></script>
    <script src="app.js"></script>
  </body>
  
  </html>`

  loginPage.innerHTML = houstonMap

  }
}


function initMap() {
  var options = {
    zoom: 12,
    center: { lat: 29.7604, lng: -95.3698 }
  };
  var map = new google.maps.Map(document.getElementById("map"), options)

}
 






