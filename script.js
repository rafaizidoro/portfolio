console.log("JavaScript is working!");

// Declare some variables
let username = "Rafael Izidoro";
let course = "Systems Analysis and Development";
let learning = true;
let projects = 3;

console.log("Name:", username);
console.log("Course:", course);
console.log("Learning JavaScript?", learning);
console.log("Projects completed:", projects);

// Get current year
let year = new Date().getFullYear();

// Set year and text on footer
document.getElementById("copyright").textContent =
  `© ${year} Rafael Izidoro — All rights reserved.`;


// Dark Mode Config
  // Select the toggle button
    const toggleButton = document.getElementById("theme-toggle");

    // When the button is clicked...
    toggleButton.addEventListener("click", function () {
    // Toggle the 'dark-mode' class on the <body>
    document.body.classList.toggle("dark-mode");

    // Update button text and style
    if (document.body.classList.contains("dark-mode")) {
        toggleButton.textContent = "☀️ Light Mode";
        toggleButton.classList.remove("btn-outline-light");
        toggleButton.classList.add("btn-outline-dark");
    } else {
        toggleButton.textContent = "🌙 Dark Mode";
        toggleButton.classList.remove("btn-outline-dark");
        toggleButton.classList.add("btn-outline-light");
    }
    });

// Form submission handling
    function handleFormSubmit(event) {
  event.preventDefault(); // prevent default submit

  const form = event.target;

  // Send the form data manually using fetch
  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      form.reset();
      form.style.display = 'none';
      document.getElementById("thankyou").style.display = 'block';
    } else {
      alert("Oops! Something went wrong. Please try again.");
    }
  }).catch(error => {
    alert("Error: Unable to send. Please try again later.");
  });
}

// Get the input fields
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

// Load saved data on page load
window.addEventListener("DOMContentLoaded", () => {
  nameInput.value = localStorage.getItem("contactName") || "";
  emailInput.value = localStorage.getItem("contactEmail") || "";
  messageInput.value = localStorage.getItem("contactMessage") || "";
});

// Save data on input
nameInput.addEventListener("input", () => {
  localStorage.setItem("contactName", nameInput.value);
});

emailInput.addEventListener("input", () => {
  localStorage.setItem("contactEmail", emailInput.value);
});

messageInput.addEventListener("input", () => {
  localStorage.setItem("contactMessage", messageInput.value);
});

// Clear local storage on form submission
localStorage.removeItem("contactName");
localStorage.removeItem("contactEmail");
localStorage.removeItem("contactMessage");
