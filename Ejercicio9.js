function verificarTriangulo(a, b, c) {
    if (a + b + c === 180) {
        console.log("El triángulo es válido");
    } else {
        console.log("El triángulo no es válido");
    }
}

// Ejemplo de uso
verificarTriangulo(60, 60, 60);
