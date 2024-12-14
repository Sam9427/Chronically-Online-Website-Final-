const text = "Are you chronically online?...";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typed-text").textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

function navigateToMain() {
    const landingPage = document.querySelector(".landing-page"); // Select the landing page
    landingPage.classList.add("fade-out"); // Add the fade-out class

    // Wait for the animation to complete before hiding the landing page
    setTimeout(() => {
        landingPage.style.display = "none"; // Hide the landing page
        document.querySelector(".main-page").style.display = "block"; // Show the main page
    }, 1000); // Match the duration of the fade-out animation
}


function showTab(index) {
    document.querySelectorAll(".tab").forEach((tab, idx) => {
        tab.style.display = idx === index ? "block" : "none";
    });
}

function calculateQuizScore() {
    // Count only the "Yes" answers
    const yesAnswers = document.querySelectorAll("#quiz-form .yes-answer:checked").length;
    // Calculate the percentage
    const percentage = (yesAnswers / 10) * 100; // Adjust denominator to the number of questions
    // Display the result
    document.getElementById("quiz-result").textContent = `You are ${percentage}% chronically online.`;
    // Show the retry button
    document.getElementById("retry-button").style.display = "block";
}

function resetQuiz() {
    // Uncheck all checkboxes
    const checkboxes = document.querySelectorAll("#quiz-form input[type='checkbox']");
    checkboxes.forEach(checkbox => checkbox.checked = false);
    // Clear the quiz result
    document.getElementById("quiz-result").textContent = "";
    // Hide the retry button
    document.getElementById("retry-button").style.display = "none";
}




window.onload = typeEffect;
