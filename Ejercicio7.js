function calcularAyuda(genero, edad) {
    let ayuda;
    if (genero === 'femenino') {
        if (edad > 50) {
            ayuda = 120000;
        } else if (edad >= 30 && edad <= 50) {
            ayuda = 100000;
        }
    } else if (genero === 'masculino') {
        ayuda = 40000;
    }
    
    console.log(`La ayuda es ${ayuda}`);
}

// Ejemplo de uso
calcularAyuda('femenino', 55);
