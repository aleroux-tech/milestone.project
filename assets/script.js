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

// Show/Hide Contact Form
const toggleForm = document.getElementById("toggleForm");
const contactFormElement = document.getElementById("contact-form");

if (toggleForm && contactFormElement) {
  toggleForm.addEventListener("click", () => {
    contactFormElement.classList.toggle("hidden");
  });
}

// 4. Contact Form Validation
const contactForm = document.getElementById("contact-form");
const formError = document.getElementById("form-error");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault(); // stop form from submitting

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    let valid = true;
    formError.textContent = ""; // clear previous errors
    formError.style.color = "#FADECF"; // default error color

    // Helper function to mark valid fields
    function markInvalid(field, message) {
      valid = false;
      field.style.borderColor = "#FADECF";
      formError.textContent = message;
      field.focus();
    }

    // Reset borders before checking
    [name, email, subject, message].forEach((field) => {
      field.style.borderColor = "#BFC8C5";
    });

    // Validation checks
    if (name.value.trim() === "") {
      markInvalid(name, "Please enter your name.");
      return;
    }

    if (email.value.trim() === "") {
      markInvalid(email, "Please enter your email.");
      return;
    }

    // Basic email format check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      markInvalid(email, "Please enter a valid email address.");
      return;
    }

    if (subject.value.trim() === "") {
      markInvalid(subject, "Please enter a subject.");
      return;
    }

    if (message.value.trim() === "") {
      markInvalid(message, "Please enter a message.");
      return;
    }

    // If everything is valid
    if (valid) {
      formError.style.color = "green";
      formError.textContent = "Message sent successfully!";
      contactForm.reset();
    }
  });
}
