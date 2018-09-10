// URLs
const URL = `http://localhost:3000/users`;

// Event Listeners
document.addEventListener("DOMContentLoaded", getUsers);

// GET users from API
function getUsers() {
  fetch(URL)
    .then(res => res.json())
    .then(console.log);
}
