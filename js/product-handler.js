document.addEventListener('DOMContentLoaded', async () => {
    // Cargar productos desde JSON
    const response = await fetch('productos.json');
    const data = await response.json();
    const productosContainer = document.getElementById('productos-container');

    // Generar HTML para cada producto
    data.productos.forEach(producto => {
        const productoHTML = `
            <div class="producto ${producto.categoria}">
                <a href="detalle-producto.html?id=${producto.id}" class="enlace-producto">
                    <div class="producto-imagen" style="background-image: url('${producto.imagen}')"></div>
                    <div class="producto-info">
                        <h3>${producto.nombre}</h3>
                        <p>${producto.descripcion.substring(0, 50)}...</p>
                        <div class="precio">${producto.precio}</div>
                    </div>
                </a>
                <button class="boton-comprar">Añadir al carrito</button>
            </div>
        `;
        productosContainer.innerHTML += productoHTML;
    });

    // Opcional: Re-inicializar eventos de animación (si usas jvanim.js)
    if (typeof initAnimations === 'function') initAnimations();
}); 