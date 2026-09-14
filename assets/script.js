document.addEventListener("DOMContentLoaded", () => {
  // Fact generator
  const facts = [
    "The first video game was created in the 1950s.",
    "Speedrunning communities time games to the millisecond.",
    "Cooperative gaming can improve teamwork and communication.",
    "The original arcade era helped shape modern game design.",
    "Indie games often push creative boundaries with small teams.",
  ];
  const factButton = document.getElementById("factButton");
  const beachFact = document.getElementById("beachFact");
  if (factButton && beachFact) {
    factButton.addEventListener("click", () => {
      const f = facts[Math.floor(Math.random() * facts.length)];
      beachFact.textContent = f;
    });
  }

  // Color preview for gamer tag
  const colorInput = document.getElementById("colorInput");
  const previewText = document.getElementById("previewText");
  if (colorInput && previewText) {
    colorInput.addEventListener("input", () => {
      // Apply the value as a color; invalid values will be ignored by the browser
      previewText.style.color = colorInput.value || "";
    });
  }

  // Add favorite game to list
  const addItem = document.getElementById("addItem");
  const listInput = document.getElementById("listInput");
  const itemList = document.getElementById("itemList");
  if (addItem && listInput && itemList) {
    addItem.addEventListener("click", () => {
      const val = listInput.value.trim();
      if (!val) return;
      const li = document.createElement("li");
      li.textContent = val;
      itemList.appendChild(li);
      listInput.value = "";
      // Move focus back to input for quick entry
      listInput.focus();
    });

    // Allow Enter key to add item
    listInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        addItem.click();
      }
    });
  }
});
