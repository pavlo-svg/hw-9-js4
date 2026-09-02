const nameRef = document.querySelector("#first-name");
const surnameRef = document.querySelector("#last-name");
const phoneRef = document.querySelector("#phone");
const emailRef = document.querySelector("#email");
const formRef = document.querySelector("#contact-form");
const listRef = document.querySelector("#contact-list");

let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
let editIndex = null;

function renderContacts() {
  listRef.innerHTML = contacts
    .map(
      (contact, index) => `
        <li>
          <h2>${contact.name} ${contact.surname}</h2>
          <p>Email: ${contact.email}</p>
          <p>Телефон: ${contact.phone}</p>
          <button class="edit-btn" data-index="${index}">
            Редагувати
          </button>
          <button class="delete-btn" data-index="${index}">
            Видалити
          </button>
        </li>
      `
    )
    .join("");
}

formRef.addEventListener("submit", (event) => {
  event.preventDefault();

  const contact = {
    name: nameRef.value.trim(),
    surname: surnameRef.value.trim(),
    phone: phoneRef.value.trim(),
    email: emailRef.value.trim(),
  };

  if (editIndex === null) {
    contacts.push(contact);
  } else {
    contacts[editIndex] = contact;
    editIndex = null;
  }

  localStorage.setItem("contacts", JSON.stringify(contacts));

  renderContacts();
  formRef.reset();
});

listRef.addEventListener("click", (event) => {
  const index = event.target.dataset.index;

  if (event.target.classList.contains("delete-btn")) {
    contacts.splice(index, 1);

    localStorage.setItem("contacts", JSON.stringify(contacts));
    renderContacts();
  }

  if (event.target.classList.contains("edit-btn")) {
    const contact = contacts[index];

    nameRef.value = contact.name;
    surnameRef.value = contact.surname;
    phoneRef.value = contact.phone;
    emailRef.value = contact.email;

    editIndex = index;
  }
});

renderContacts();