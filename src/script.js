const form = document.querySelector("form");
const tableBody = document.querySelector("tbody");
const APIUserBtn = document.getElementById("APIUser");

const users = [
  {
    id: "1",
    first_name: "Hollis",
    last_name: "Jamison",
    username: "hollis_jamison",
    social_insurance_number: "555-22-2211",
    phone: "706271271",
    gender: "male",
    city: "Jacksonville",
    state: "FL",
    avatar: "https://robohash.org/optiosuscipitperferendis.png",
  },
];

function addUser(user) {
  users.push(user);
  refreshTable();
}

function refreshTable() {
  tableBody.innerHTML = "";

  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    const row = document.createElement("tr");

    const avatarCell = document.createElement("td");
    const avatarImg = document.createElement("img");
    avatarImg.src = user.avatar;
    avatarCell.appendChild(avatarImg);
    row.appendChild(avatarCell);

    const idCell = document.createElement("td");
    idCell.textContent = user.id;
    row.appendChild(idCell);

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = user.first_name;
    row.appendChild(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = user.last_name;
    row.appendChild(lastNameCell);

    const usernameCell = document.createElement("td");
    usernameCell.textContent = user.username;
    row.appendChild(usernameCell);

    const sinCell = document.createElement("td");
    sinCell.textContent = user.social_insurance_number;
    row.appendChild(sinCell);

    const phoneCell = document.createElement("td");
    phoneCell.textContent = user.phone;
    row.appendChild(phoneCell);

    const genderCell = document.createElement("td");
    genderCell.textContent = user.gender;
    row.appendChild(genderCell);

    const cityCell = document.createElement("td");
    cityCell.textContent = user.city;
    row.appendChild(cityCell);

    const stateCell = document.createElement("td");
    stateCell.textContent = user.state;
    row.appendChild(stateCell);

    tableBody.appendChild(row);
  }
}

async function fetchUser() {
  const response = await fetch("https://random-data-api.com/api/v2/users");
  const userData = await response.json();
  let APIUser = {
    ...userData,
    phone: userData.phone_number,
    city: userData.address.city,
    state: userData.address.state,
  };
  addUser(APIUser);
  refreshTable();
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const user = {
    id: form.elements.id.value,
    firstName: form.elements.first_name.value,
    lastName: form.elements.last_name.value,
    username: form.elements.username.value,
    sin: form.elements.social_insurance_number.value,
    phone: form.elements.phone.value,
    gender: form.elements.gender.value,
    city: form.elements.city.value,
    state: form.elements.state.value,
    avatar: form.elements.avatar.value,
  };

  addUser(user);
  form.reset();
});

APIUserBtn.addEventListener("click", fetchUser);

refreshTable();
