
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