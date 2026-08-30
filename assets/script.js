const form = document.querySelector("#contact-form");
const errorMessage = document.querySelector("#form-error");

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

// Clear error when typing
document
  .querySelectorAll("#name, #email, #subject, #message")
  .forEach((input) => {
    input.addEventListener("input", () => {
      errorMessage.style.display = "none";
    });
  });

const toggleCards = document.querySelector("#toggleCards");
const cardContainer = document.querySelector(".card-container");

toggleCards.addEventListener("click", () => {
  cardContainer.classList.toggle("hidden");
});
