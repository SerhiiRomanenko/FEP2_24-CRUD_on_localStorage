let $table = document.querySelector(".users");
const $homeButton = document.querySelector(".header__home");
const $openFormButton = document.querySelector(".addUser__button");
const $addUserContainer = document.querySelector(".addUser__form");
const $name = document.querySelector(".addUser__name");
const $surname = document.querySelector(".addUser__surname");
const $roleSelect = document.querySelector(".addUser__role");
const $phone = document.querySelector(".addUser__phone");
const $email = document.querySelector(".addUser__email");
const $about = document.querySelector(".addUser__about");
const $addSubmit = document.querySelector(".addUser__submit");
const $view = document.querySelector(".view");
const $viewName = document.querySelector(".view__name");
const $viewSurname = document.querySelector(".view__surname");
const $viewRole = document.querySelector(".view__role");
const $viewPhone = document.querySelector(".view__phone");
const $viewEmail = document.querySelector(".view__email");
const $viewAdd = document.querySelector(".view__additional");
const $edit = document.querySelector(".editBox");
const $closeEdit = document.querySelector(".edit__close");
const $editBoxForm = document.querySelector(".editBox__form");
const $editName = document.querySelector(".editBox__name");
const $editSurname = document.querySelector(".editBox__surname");
const $editRole = document.querySelector(".editBox__role");
const $editPhone = document.querySelector(".editBox__phone");
const $editEmail = document.querySelector(".editBox__email");
const $editAdd = document.querySelector(".editBox__about");
const $editUserButton = document.querySelector(".edit__submit");

let users = [
  {
    id: Math.floor(Math.random() * 10000000000000),
    name: "Andrew",
    surname: "Rayel",
    phone: "0965356746",
    role: "admin",
    email: "example@gmail.com",
    about:
      "12313t of the printing and typesetting industry. " +
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: Math.floor(Math.random() * 10000000000000),
    name: "Serhio ",
    surname: "Conseisao",
    phone: "0667651268",
    role: "admin",
    email: "example@gmail.com",
    about:
      "qweqwrefsadf mmy text of the printing and typesetting industry. " +
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: Math.floor(Math.random() * 10000000000000),
    name: "Antonio",
    surname: "Reyes",
    phone: "0500953785",
    role: "user",
    email: "example@gmail.com",
    about:
      "13 v3 423423text of the printing and typesetting industry. " +
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: Math.floor(Math.random() * 10000000000000),
    name: "Steven",
    surname: "Gerard",
    phone: "0936818473",
    role: "user",
    email: "example@gmail.com",
    about:
      " r we rfsfr se4  55643 t of the printing and typesetting industry. " +
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: Math.floor(Math.random() * 10000000000000),
    name: "Zlatan",
    surname: "Ibahimovich",
    phone: "0678946737",
    role: "user",
    email: "example@gmail.com",
    about:
      " 4324 rew 34423 42 printing and typesetting industry. " +
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: Math.floor(Math.random() * 10000000000000),
    name: "Divid",
    surname: "Alaba",
    phone: "0997583764",
    role: "user",
    email: "example@gmail.com",
    about:
      " 234 234wer r w435yt u6 u6 nting and typesetting industry. " +
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: Math.floor(Math.random() * 10000000000000),
    name: "Zinedine",
    surname: "Zidane",
    phone: "0951783956",
    role: "user",
    email: "example@gmail.com",
    about:
      " 345 3mmy text ever since the 1500s, " +
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: Math.floor(Math.random() * 10000000000000),
    name: "Andrii",
    surname: "Shevchenko",
    phone: "0675930495",
    role: "user",
    email: "example@gmail.com",
    about:
      " 345 ry's standard dummy text ever since the 1500s, " +
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];
let usersLS = JSON.parse(window.localStorage.getItem("users"));

if (!usersLS) {
  usersLS = [];
  console.log(users);
} else {
  usersLS = JSON.parse(window.localStorage.getItem("users"));
  render();
}

//--------------------------------------+++RENDER+++---------------------//
function render() {
  if (usersLS.length > 0) {
    $table.style.display = "block";
    $table.innerHTML = "";
    const firstTR = `
                <tr class="users__tableNames">
                    <th>USERNAME</th>
                    <th>SURNAME</th>
                    <th>ROLE</th>
                    <th>PHONE</th>
                    <th>E-MAIL</th>
                    <th>EDIT</th>
                    <th>REMOVE</th>
                    <th>VIEW</th>
                </tr>`;
    $table.innerHTML = firstTR + $table.innerHTML;
    usersLS.forEach((user) => {
      const tr = `
        <tr id="${user.id}" class="${user.role} users__item">
            <td class="users__name users__cell">${user.name}</td>
            <td class="users__surname users__cell">${user.surname}</td>
            <td class="users__role users__cell">${user.role}</td>
            <td class="users__phone users__cell">${user.phone}</td>
            <td class="users__email users__cell"><a href = "mailto:${user.email}">${user.email}</a></td>
            <td class="edit users__cell" data-id="${user.id}">
                <button class="users__editBtn" data-id="${user.id}">Edit</button>
            </td>
            <td class="remove users__cell">
                <button class="users__removeBtn">Remove</button>
            </td>
            <td class="viewBtn users__cell">
                <button class="users__viewBtn" data-id="${user.id}" onblur=hideView()>View</button>
            </td>
        </tr>
    `;
      $table.innerHTML = $table.innerHTML + tr;
    });
  } else {
    $table.style.display = "none";
  }
}

//--------------------------------------IS UNIQUE USER---------------------//
function isUnique(newUser) {
  let flag = true;
  usersLS.forEach((user) => {
    if (
      user.name === newUser.name &&
      user.surname === newUser.surname &&
      user.phone === newUser.phone &&
      user.email === newUser.email
    ) {
      alert("Такий користувач вже є");
      flag = false;
    }
  });
  return flag;
}

//--------------------------------------ADD USER---------------------//
function addUser(user) {
  usersLS.push(user);
  window.localStorage.setItem("users", JSON.stringify(usersLS));
  render();
  alert("Користувача успішно додано!");
  $addUserContainer.parentNode.style.display = "none";
}

//--------------------------------------EDIT USER---------------------//
function editUser(user) {
  usersLS = usersLS.filter((item) => item.id !== user.id);
  usersLS.push(user);
  window.localStorage.setItem("users", JSON.stringify(usersLS));
  render();
  $edit.style.display = "none";
  alert("Користувача успішно змінено!");
}

//--------------------------------------DELETE USER---------------------//
function deleteUser(id) {
  if (window.confirm("Ви дійсно хочете видалити користувача?")) {
    usersLS = usersLS.filter((user) => user.id !== +id);
    window.localStorage.setItem("users", JSON.stringify(usersLS));
  }
}

//----------------------------HIDE VIEW BLOCK ON BLUR BUTTON---------------------//
function hideView() {
  $view.style.display = "none";
}

//--------------------------------------VALIDATE NAME---------------------//
function validateName(name) {
  const regExp = /^([а-щА-ЩЬьЮюЯяЇїІіЄєҐґ'a-zA-Z-]{1,50})$/u;
  return regExp.test(name.trim());
}

//--------------------------------------VALIDATE EMAIL---------------------//
function validateEmail(email) {
  const regExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return !!email.toLowerCase().trim().match(regExp);
}

//--------------------------------------VALIDATE PHONE---------------------//
function validatePhone(phone) {
  const regExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return !!phone.trim().match(regExp);
}

//--------------------------------------VALIDATE ROLE---------------------//
function validateRole(select) {
  return select.value !== "";
}

//---------------------------++++++++++ДЕЛЕГУЮ ІВЕНТИ+++++++++++++----------//
$table.addEventListener("click", function (event) {
  //--------------------------------------EDIT CLICK---------------------//
  if (event.target.className === "users__editBtn") {
    $edit.style.display = "block";

    let targetUser = usersLS.filter(
      (user) => user.id === +event.target.parentNode.getAttribute("data-id")
    )[0];
    $editBoxForm.setAttribute(
      "data-id",
      +event.target.parentNode.getAttribute("data-id")
    );
    $editName.value = targetUser.name;
    $editSurname.value = targetUser.surname;
    $editRole.value = targetUser.role;
    $editPhone.value = targetUser.phone;
    $editEmail.value = targetUser.email;
    $editAdd.value = targetUser.about;
  }
  //--------------------------------------REMOVE CLICK---------------------//
  if (event.target.className === "users__removeBtn") {
    deleteUser(event.target.parentNode.parentNode.id);
    render();
  }
  //--------------------------------------VIEW CLICK---------------------//
  if (event.target.className === "users__viewBtn") {
    const $parent = event.target.parentNode.parentNode;
    $viewName.textContent = $parent.querySelector(".users__name").textContent;
    $viewSurname.textContent =
      $parent.querySelector(".users__surname").textContent;
    $viewRole.textContent = $parent.querySelector(".users__role").textContent;
    $viewPhone.textContent = $parent.querySelector(".users__phone").textContent;
    $viewEmail.textContent = $parent.querySelector(".users__email").textContent;
    $viewAdd.textContent = usersLS.filter(
      (user) => +event.target.getAttribute("data-id") === user.id
    )[0].about;
    $view.style.display = "flex";
  }
});
//--------------------------------------HOME CLICK---------------------//
$homeButton.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.assign("index.html");
});
//--------------------------------------OPEN FORM BUTTON CLICK---------------------//
$openFormButton.addEventListener("click", function (event) {
  event.preventDefault();
  $table.style.display = "none";
  $addUserContainer.parentNode.style.display = "block";
});
//--------------------------------------CLOSE EDIT FORM - BUTTON CLICK---------------------//
$closeEdit.addEventListener("click", function () {
  $edit.style.display = "none";
});
//--------------------------------------EDIT USER - BUTTON CLICK FOR SEND---------------------//
$editUserButton.addEventListener("click", function (event) {
  event.preventDefault();
  if (!validateName($editName.value.trim())) {
    $editName.style.border = "2px solid red";
  } else {
    $editName.style.border = "1px solid black";
  }

  if (!validateName($editSurname.value.trim())) {
    $editSurname.style.border = "2px solid red";
  } else {
    $editSurname.style.border = "1px solid black";
  }

  if (!validateRole($editRole)) {
    $editRole.style.border = "2px solid red";
  } else {
    $editRole.style.border = "1px solid black";
  }

  if (!validateEmail($editEmail.value.trim())) {
    $editEmail.style.border = "2px solid red";
  } else {
    $editEmail.style.border = "1px solid black";
  }

  if (!validatePhone($editPhone.value.trim())) {
    $editPhone.style.border = "2px solid red";
  } else {
    $editPhone.style.border = "1px solid black";
  }

  if ($editAdd.value.trim().length <= 10) {
    $editAdd.style.border = "2px solid red";
  } else {
    $editAdd.style.border = "1px solid black";
  }

  let changedUser = {
    id: +event.target.parentNode.getAttribute("data-id"),
    name: $editName.value.trim(),
    surname: $editSurname.value.trim(),
    phone: $editPhone.value.trim(),
    role: $editRole.value,
    email: $editEmail.value.trim(),
    about: $editAdd.value.trim(),
  };
  if (
    isUnique(changedUser) &&
    validateName($editName.value) &&
    validateName($editSurname.value) &&
    validateRole($editRole) &&
    validateEmail($editEmail.value) &&
    validatePhone($editPhone.value) &&
    $editAdd.value.trim().length > 10
  ) {
    editUser(changedUser);
    $editName.value = "";
    $editSurname.value = "";
    $editPhone.value = "";
    $editRole.value = "";
    $editEmail.value = "";
    $editAdd.value = "";
  }
});
//--------------------------------------ADD USER BUTTON CLICK---------------------//
$addSubmit.addEventListener("click", function (event) {
  event.preventDefault();

  if (!validateName($name.value.trim())) {
    $name.style.border = "2px solid red";
  } else {
    $name.style.border = "1px solid black";
  }
  if (!validateName($surname.value.trim())) {
    $surname.style.border = "2px solid red";
  } else {
    $surname.style.border = "1px solid black";
  }
  if (!validateRole($roleSelect)) {
    $roleSelect.style.border = "2px solid red";
  } else {
    $roleSelect.style.border = "1px solid black";
  }
  if (!validateEmail($email.value.trim())) {
    $email.style.border = "2px solid red";
  } else {
    $email.style.border = "1px solid black";
  }
  if (!validatePhone($phone.value.trim())) {
    $phone.style.border = "2px solid red";
  } else {
    $phone.style.border = "1px solid black";
  }

  if ($about.value.trim().length <= 10) {
    $about.style.border = "2px solid red";
  } else {
    $about.style.border = "1px solid black";
  }

  let addingUser = {
    id: Math.floor(Math.random() * 10000000000000), // generate id
    name: $name.value.trim(),
    surname: $surname.value.trim(),
    phone: $phone.value.trim(),
    role: $roleSelect.value,
    email: $email.value.trim(),
    about: $about.value.trim(),
  };

  if (
    isUnique(addingUser) &&
    validateName($name.value) &&
    validateName($surname.value) &&
    validateRole($roleSelect) &&
    validateEmail($email.value) &&
    validatePhone($phone.value) &&
    $about.value.trim().length > 10
  ) {
    addUser(addingUser);
    $name.value = "";
    $surname.value = "";
    $phone.value = "";
    $roleSelect.value = "";
    $email.value = "";
    $about.value = "";
  }
});
