document.addEventListener("DOMContentLoaded", function () {
    // Obtener la URL actual
    let currentPage = window.location.pathname.split("/").pop();

    // Seleccionar todos los enlaces del menú
    let menuLinks = document.querySelectorAll("nav ul li a");

    // Recorrer los enlaces y comparar con la URL actual
    menuLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active"); // Agregar la clase 'active' al enlace actual
        }
    });
});
