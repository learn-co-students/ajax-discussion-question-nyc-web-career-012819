document.addEventListener("DOMContentLoaded", () => {
  function fetchInfo() {
    return fetch("https://randomuser.me/api/")
      .then(response => response.json())
      .then(json => json.results)
  }

  function setFields(person) {
    document.querySelector("#profile_picture").src = `${person.picture.medium}`
    document.querySelector("#fullname").innerText = `${person.name.title} ${person.name.first} ${person.name.last}`
    document.querySelector("#email").innerText = `${person.email}`
    document.querySelector("#street").innerText = `${person.location.street}`
    document.querySelector("#city").innerText = `${person.location.city}`
    document.querySelector("#state").innerText = `${person.location.state}`
    document.querySelector("#postcode").innerText = `${person.location.postcode}`
    document.querySelector("#phone").innerText = `${person.phone}`
    document.querySelector("#cell").innerText = `${person.cell}`
    document.querySelector("#date_of_birth").innerText = `${new Date(person.dob.date).toDateString()}`
  }

  const button = document.querySelector("button.btn.btn-primary")
  button.addEventListener("click", function() {
    fetchInfo().then(people => setFields(people[0]))
  })
})
