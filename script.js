let userName = document.getElementById('userName');
let lastname = document.getElementById('lastname');
let userAge = document.getElementById('userAge');
let sentBtn = document.getElementById('sentBtn');
let tbody = document.getElementById('tbody');
window.addEventListener('DOMContentLoaded', () => {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    existingUsers.forEach((element, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <th>${index + 1}</th>
            <td>${element.name}</td>
            <td>${element.last}</td>
            <td>${element.userAge}</td>
        `;
        tbody.append(tr);
    });
});
sentBtn.addEventListener('click', () => {
    const user = {
        name: userName.value,
        userAge: userAge.value,
        last: lastname.value
    };
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    existingUsers.push(user);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    // Faqat oxirgi userni jadvalga qo‘shish
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <th>${existingUsers.length}</th>
        <td>${user.name}</td>
        <td>${user.last}</td>
        <td>${user.userAge}</td>
    `;
    tbody.append(tr);

    userName.value = "";
    lastname.value = "";
    userAge.value = "";
});
