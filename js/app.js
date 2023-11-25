// Hamburger icon click animation and sidemenu view
function toggleMenu(element) {
    element.classList.toggle("change");

    var sidebar = document.getElementById('mySidebar');
    sidebar.style.width = sidebar.style.width === '200px' ? '0' : '200px';
}
