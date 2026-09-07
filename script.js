// Mobile Menu

function toggleMenu() {

    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");

}


// Contact Form

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;


    if (name === "" || email === "" || message === "") {

        alert("Please fill all fields.");

        return;
    }


    alert("Thank you! Your message has been submitted.");

    contactForm.reset();

});