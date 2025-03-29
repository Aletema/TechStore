function iniciarMenu() {
    const burgerMenu = document.getElementById("burger-menu");
    const navLinks = document.getElementById("nav-links");

    if (!burgerMenu || !navLinks) {
        console.error("Error: No se encontró el menú de hamburguesa o la lista de navegación.");
        return;
    }

    burgerMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll("#nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
}
