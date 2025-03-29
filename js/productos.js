document.addEventListener("DOMContentLoaded", () => {
    const productos = [
        { id: 1, nombre: "Mouse Gamer RGB", precio: 25 },
        { id: 2, nombre: "Teclado Mecánico RGB", precio: 50 },
        { id: 3, nombre: "Auriculares Inalámbricos", precio: 40 },
        { id: 4, nombre: "Monitor 24'' Full HD", precio: 180 }
    ];

    const carrito = [];

    function renderizarProductos() {
        document.getElementById("productos-container").innerHTML = productos.map(p => `
            <div class="card">
                <h3>${p.nombre}</h3>
                <p>$${p.precio}</p>
                <button onclick="agregarAlCarrito(${p.id}, '${p.nombre}', ${p.precio})">🛒 Agregar</button>
            </div>
        `).join("");
    }

    window.agregarAlCarrito = (id, nombre, precio) => {
        carrito.push({ id, nombre, precio });
        actualizarCarrito();
    };

    function actualizarCarrito() {
        document.getElementById("cart-list").innerHTML = carrito.map((p, index) => `
            <li>${p.nombre} - $${p.precio} <button onclick="eliminarDelCarrito(${index})">❌</button></li>
        `).join("");
        document.getElementById("cart-total").textContent = carrito.reduce((total, p) => total + p.precio, 0);
    }

    window.eliminarDelCarrito = (index) => {
        carrito.splice(index, 1);
        actualizarCarrito();
    };

    renderizarProductos();
});
