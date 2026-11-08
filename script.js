const form = document.getElementById("userForm");
const surveyBody = document.getElementById("surveyBody");
const clearButton = document.getElementById("clearButton");

// Restore previously saved survey responses.
surveyBody.innerHTML = localStorage.getItem("surveyResponses") || "";

// Display an error beside an input.
function showError(fieldName, message) {
    const errorField = document.getElementById(`${fieldName}Error`);
    errorField.textContent = message;
}

// Remove previous error messages.
function clearErrors() {
    document.querySelectorAll(".error-message").forEach((errorField) => {
        errorField.textContent = "";
    });
}

// Reusable validation functions.
function isNotEmpty(value) {
    return value.trim() !== "";
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidUsername(username) {
    return /^[A-Za-z0-9]+$/.test(username);
}

function hasCheckedOption(name) {
    return document.querySelector(`input[name="${name}"]:checked`) !== null;
}

function isSelected(value) {
    return value !== "";
}

// Handle form submission.
form.addEventListener("submit", function (event) {
    event.preventDefault();
    clearErrors();

    // BREAKPOINT 1: Capture form values.
    const userName = document.getElementById("userName").value.trim();
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const studyTime = document.getElementById("studyTime").value;
    const age = document.getElementById("age").value;
    const comments = document.getElementById("comments").value.trim();

    const selectedStudy = document.querySelector(
        'input[name="enjoyStudy"]:checked'
    );

    const hobbies = Array.from(
        document.querySelectorAll('input[name="hobbies"]:checked')
    ).map((checkbox) => checkbox.value);

    let valid = true;

    // BREAKPOINT 2: Validate the input.
    if (!isNotEmpty(userName)) {
        showError("userName", "Name is required.");
        valid = false;
    }

    if (!isNotEmpty(email) || !isValidEmail(email)) {
        showError("email", "Enter a valid email address.");
        valid = false;
    }

    if (!isValidUsername(username)) {
        showError("username", "Use letters and numbers only.");
        valid = false;
    }

    if (!hasCheckedOption("enjoyStudy")) {
        showError("enjoyStudy", "Please select Yes or No.");
        valid = false;
    }

    if (hobbies.length === 0) {
        showError("hobbies", "Select at least one hobby.");
        valid = false;
    }

    if (!isSelected(studyTime)) {
        showError("studyTime", "Please select a study time.");
        valid = false;
    }

    if (age === "" || Number(age) <= 0) {
        showError("age", "Enter a valid age.");
        valid = false;
    }

    if (!isNotEmpty(comments)) {
        showError("comments", "Please enter a comment.");
        valid = false;
    }

    // BREAKPOINT 3: Check the validation result.
    if (!valid) {
        return;
    }

    // Create a new table row.
    const row = document.createElement("tr");

    const values = [
        userName,
        email,
        username,
        selectedStudy.value,
        hobbies.join(", "),
        studyTime,
        age,
        comments
    ];

    // Create table cells safely.
    values.forEach((value) => {
        const cell = document.createElement("td");
        cell.textContent = value;
        row.appendChild(cell);
    });

    surveyBody.appendChild(row);

    // Save the table body to localStorage.
    localStorage.setItem("surveyResponses", surveyBody.innerHTML);

    form.reset();
    clearErrors();
});

// Clear saved responses.
clearButton.addEventListener("click", function () {
    surveyBody.innerHTML = "";
    localStorage.removeItem("surveyResponses");
});





