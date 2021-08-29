function loadUser() {
    fetch('https://randomuser.me/api/?results=1')
    .then(res => res.json())
    .then(json=>displayUser(json))
}
loadUser();

function displayUser(data) {
    const users = data.results;
    const usersDiv = document.getElementById('user');
    user.innerHTML = "";
    for (const user of users) {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user')
        userDiv.innerHTML = `
        <img src=${user.picture.large}>
        <h4> ${user.name.title} ${user.name.first} ${user.name.last} </h4>
        <p>title: ${user.name.title} <br>
        First name: ${user.name.first}<br>
        Last name: ${user.name.last}</p>
        <button onclick= "loadUser()" class="button">Loade User</button>
        `
        usersDiv.appendChild(userDiv)
        
    }
}