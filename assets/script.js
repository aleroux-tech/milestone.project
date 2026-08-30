const toggleCards = document.querySelector("#toggleCards");
const cardContainer = document.querySelector(".card-container");

toggleCards.addEventListener("click", () => {
  cardContainer.classList.toggle("hidden");
});
