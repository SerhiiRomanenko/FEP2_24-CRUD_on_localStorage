let users = [
  {
    id: Math.floor(Math.random() * 10000000000000),
    name: "Andrew Rayel",
    age: 27,
    role: "admin",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book. " +
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " +
      "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, " +
      "and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: Math.floor(Math.random() * 10000000000000),
    name: "Serhio Conseisao",
    age: 32,
    role: "admin",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book. " +
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " +
      "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, " +
      "and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: Math.floor(Math.random() * 10000000000000),
    name: "Hose Antonio Reyes",
    age: 41,
    role: "user",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book. " +
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " +
      "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, " +
      "and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: Math.floor(Math.random() * 10000000000000),
    name: "Steven Gerard",
    age: 23,
    role: "user",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book. " +
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " +
      "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, " +
      "and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: Math.floor(Math.random() * 10000000000000),
    name: "Zlatan ibrahimovich",
    age: 40,
    role: "user",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book. " +
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " +
      "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, " +
      "and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: Math.floor(Math.random() * 10000000000000),
    name: "Divid Alaba",
    age: 33,
    role: "user",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book. " +
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " +
      "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, " +
      "and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

let ul = document.querySelector(".users");

let usersLS = JSON.parse(window.localStorage.getItem("users"));
if (!usersLS) {
  usersLS = [];
} else {
  addUsersToList(users);
}

function addUsersToList(usersLS) {
  console.log(usersLS);
  usersLS.forEach((user) => {
    let li = `
      <li class="${user.role} users__item">
        <input type="checkbox">
        <p class="users__name">${user.name}</p>
        <p class="users__age">${user.age}</p>
        <p class="users__role">${user.role}</p>
      </li>`;
    ul.innerHTML = ul.innerHTML + li;
  });
}
