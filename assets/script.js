// 1. Fun Fact Button
const factButton = document.getElementById("factButton");
const funFact = document.getElementById("funFact");

if (factButton && funFact) {
  const funFacts = [
    "I'm a mom of five boys.",
    "I've always been good with technology.",
    "I love learning new things.",
    "Web design is something I honestly enjoy.",
    "People always come to me when they need tech help.",
  ];

  factButton.addEventListener("click", () => {
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    funFact.textContent = randomFact;
  });
}

// 2. Color Input
const colorInput = document.getElementById("colorInput");
const colorPreview = document.getElementById("colorPreview");

if (colorInput && colorPreview) {
  colorInput.addEventListener("input", () => {
    colorPreview.style.color = colorInput.value;
  });
}

// 3. Dynamic List (Fun Facts About the User)
const listInput = document.getElementById("listInput");
const addItem = document.getElementById("addItem");
const itemList = document.getElementById("itemList");

if (listInput && addItem && itemList) {
  addItem.addEventListener("click", () => {
    const newItem = listInput.value.trim();

    if (newItem !== "") {
      const li = document.createElement("li");
      li.textContent = newItem;
      itemList.appendChild(li);
      listInput.value = "";
    }
  });
}
