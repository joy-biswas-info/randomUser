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
        <p>Title: ${user.name.title} <br>
        First name: ${user.name.first}<br>
        Last name: ${user.name.last}<br>
        Gender: ${user.gender}<br>
        Age: ${user.dob.age}</p>
        <p>Email: ${user.email}<br>
        User name: ${user.login.username}<br>
        Password: ${user.login.password}</p>
        <button onclick= "loadUser()" class="button">Load User</button>
        `
        usersDiv.appendChild(userDiv)
        
    }
}