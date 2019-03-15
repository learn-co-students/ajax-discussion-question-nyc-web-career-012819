const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  fetch("https://randomuser.me/api/")
  .then(res => res.json())
  .then(users => {
    users.results.forEach(function(user) {
      displayUser(user)
    })
  })
});

let streetH4 = document.getElementById('street');
function displayUser(user) {
  streetH4.innerHTML += `<p>${user.gender}</p>`
}
