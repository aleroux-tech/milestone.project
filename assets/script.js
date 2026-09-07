// =========================
// FORM VALIDATION (about.html only)
// =========================

const form = document.querySelector("#contact-form");
const errorMessage = document.querySelector("#form-error");

if (form) {
  form.addEventListener("submit", (event) => {
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const subject = document.querySelector("#subject").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (!name || !email || !subject || !message) {
      event.preventDefault();
      errorMessage.textContent =
        "Please complete every required field before sending.";
      errorMessage.style.display = "block";
    }
  });

  // Clear errors when typing
  document
    .querySelectorAll("#name, #email, #subject, #message")
    .forEach((input) => {
      input.addEventListener("input", () => {
        errorMessage.style.display = "none";
      });
    });
}

// =========================
// SHOW/HIDE CONTACT FORM (about.html)
// =========================

const toggleForm = document.querySelector("#toggleForm");
const contactForm = document.querySelector("#contact-form");

if (toggleForm && contactForm) {
  toggleForm.addEventListener("click", () => {
    contactForm.classList.toggle("hidden");
  });
}

// =========================
// SHOW/HIDE SECTIONS (index.html)
// =========================

const toggleCards = document.querySelector("#toggleCards");
const cardContainer = document.querySelector(".card-container");

if (toggleCards && cardContainer) {
  toggleCards.addEventListener("click", () => {
    cardContainer.classList.toggle("hidden");
  });
}

// =========================
// Homework 7 Interactions
// =========================

// 1. button content
const factButton = document.querySelector("#factButton");
const beachFact = document.querySelector("#beachFact");

if (factButton && beachFact) {
  factButton.addEventListener("click", () => {
    beachFact.textContent =
      "Fun fact: Beaches can be made of coral, lava, shells, or even glass!";
  });
}

// 2. Style changes on input
const colorInput = document.querySelector("#colorInput");
const colorPreview = document.querySelector("#colorPreview");

if (colorInput && colorPreview) {
  colorInput.addEventListener("input", () => {
    colorPreview.style.color = colorInput.value;
  });
}

// 3. Dynamic list
const listInput = document.querySelector("#listInput");
const addItem = document.querySelector("#addItem");
const itemList = document.querySelector("#itemList");

if (listInput && addItem && itemList) {
  addItem.addEventListener("click", () => {
    const newItemText = listInput.value.trim();
    if (newItemText === "") return;

    const li = document.createElement("li");
    li.textContent = newItemText;

    itemList.appendChild(li);
    listInput.value = "";
  });
}
