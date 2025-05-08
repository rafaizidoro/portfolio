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