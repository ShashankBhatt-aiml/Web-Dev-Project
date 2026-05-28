// Simple form submit message
let bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Inquiry Submitted Successfully!");

    bookingForm.reset();
});

// Small button interaction for student-style JavaScript practice
let exploreButton = document.querySelector(".hero-btn");

exploreButton.addEventListener("click", function() {
    console.log("Explore button clicked");
});

