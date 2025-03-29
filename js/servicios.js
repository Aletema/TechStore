document.addEventListener("DOMContentLoaded", () => {
    const servicios = [
        { id: 1, nombre: "Instalación de Cámaras de Seguridad", descripcion: "Montaje y configuración de cámaras CCTV y sistemas de videovigilancia.", icono: "fas fa-video" },
        { id: 2, nombre: "Configuración de Redes", descripcion: "Instalamos y optimizamos redes domésticas y empresariales.", icono: "fas fa-network-wired" },
        { id: 3, nombre: "Instalación de Software", descripcion: "Instalamos y configuramos software para optimizar tu equipo.", icono: "fas fa-laptop-code" },
        { id: 4, nombre: "Mantenimiento de Computadoras", descripcion: "Limpieza, reparación y mejora del rendimiento de PCs y laptops.", icono: "fas fa-tools" }
    ];

    function renderizarServicios() {
        document.getElementById("servicios-container").innerHTML = servicios.map(s => `
            <div class="servicio-card">
                <i class="${s.icono}"></i>
                <h3>${s.nombre}</h3>
                <p>${s.descripcion}</p>
            </div>
        `).join("");
    }

    renderizarServicios();
});
