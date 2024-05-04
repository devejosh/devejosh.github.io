// Hamburger icon click animation and sidemenu view
function toggleMenu(element) {
    element.classList.toggle("change");
}


document.addEventListener('DOMContentLoaded', function () {
    // Get the modal element
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var modalButton = document.getElementById('closeModal');

    // Show the modal when the page loads
    modal.style.display = 'block';

    // Close the modal when the close button is clicked
    modalButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });
});