
document.addEventListener("DOMContentLoaded", function() {
    var citiesElement = document.getElementById("cities");
    var dropdownContent = document.querySelector(".dropdown-content");

    citiesElement.addEventListener("click", function() {
        if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
            dropdownContent.style.display = "block";
        } else {
            dropdownContent.style.display = "none";
        }
    });
});

function verifyEmails() {
    var email = document.getElementById("email").value;
    var confirmEmail = document.getElementById("confirm_email").value;

    if (email && confirmEmail && email !== confirmEmail) {
        alert("Email addresses do not match!");
    }
}
