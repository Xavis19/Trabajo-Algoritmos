class CarritoCompras {
    constructor() {
        this.productos = [];
    }

    // Agregar producto al carrito
    agregarProducto(nombre, precio, cantidad, stock) {
        if (cantidad <= stock) {
            this.productos.push({ nombre, precio, cantidad });
            console.log(`Producto ${nombre} agregado al carrito.`);
        } else {
            console.log(`No hay suficiente stock de ${nombre}.`);
        }
    }

    // Mostrar los productos en el carrito
    mostrarCarrito() {
        if (this.productos.length > 0) {
            this.productos.forEach((producto, index) => {
                console.log(`${index + 1}. ${producto.nombre} - Cantidad: ${producto.cantidad}, Precio unitario: $${producto.precio}, Subtotal: $${producto.cantidad * producto.precio}`);
            });
        } else {
            console.log("El carrito está vacío.");
        }
    }

    // Calcular el total de la compra
    totalCompra() {
        let total = 0;
        this.productos.forEach(producto => {
            total += producto.precio * producto.cantidad;
        });
        console.log(`Total de la compra: $${total}`);
    }
}

// Ejemplo de uso
const carrito = new CarritoCompras();
carrito.agregarProducto("Manzanas", 2000, 3, 10);
carrito.agregarProducto("Pan", 1500, 2, 5);
carrito.mostrarCarrito();
carrito.totalCompra();
