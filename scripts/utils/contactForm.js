const backgroundForm = document.querySelector(".background-modal");
const modal = document.getElementById("contact_modal");
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const form = document.querySelector("form");
const contactButton = document.querySelector(".contact_button");
const closeButton = document.querySelector(".close-modal");
const main = document.getElementById("main");

async function getPhotographers() {
  const response = await fetch("./data/photographers.json");
  return await response.json();
}

async function displayData() {
  const data = await getPhotographers();
  const photographer = data.photographers.find(
    (photographer) => photographer.id === id
  );

  displayName(photographer);

  initModal();
}

function displayName() {
  const name = document.querySelector(".photographer-info > h2");
  document.querySelector(
    ".modal-title"
  ).innerHTML = `Contactez-moi <br> ${name.textContent}`;
  modal.setAttribute("aria-labelledby", `Contactez-moi ${name.textContent}`);
}

function initModal() {
  contactButton.addEventListener("click", () => {
    openModal();
  });
  closeButton.addEventListener("click", () => {
    closeModal();
  });
  document.addEventListener("keyup", (event) => {
    if (modal.ariaHidden === "false" && event.key === "Escape") {
      closeModal();
    }
  });
}

function openModal() {
  main.setAttribute("aria-hidden", true);
  modal.setAttribute("aria-hidden", false);
  modal.style.display = "block";
  backgroundForm.style.display = "block";
  getTabbableElements(document).forEach((tabbable) => (tabbable.tabIndex = -1));
  getTabbableElements(modal).forEach((tabbable) => (tabbable.tabIndex = 0));
}

function closeModal() {
  modal.style.display = "none";
  backgroundForm.style.display = "none";
  getTabbableElements(document).forEach((tabbable) => (tabbable.tabIndex = 0));
}

function getTabbableElements(zone) {
  return zone.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  console.log(firstName.value);
  console.log(lastName.value);
  console.log(email.value);
  console.log(message.value);
});

displayData();