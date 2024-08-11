function verificarDefectoModelo(modelo) {
    const defectuosos = [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780];
    if (defectuosos.includes(modelo)) {
        console.log("El automóvil está defectuoso, llevar a garantía.");
    } else {
        console.log("Su automóvil no está defectuoso.");
    }
}

// Ejemplo de uso
verificarDefectoModelo(179);
