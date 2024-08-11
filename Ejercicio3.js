function calcularCostoLavadora(tipo, horas, cantidad) {
    let costoHora;
    if (tipo === 1) {
        costoHora = 4000;
    } else if (tipo === 2) {
        costoHora = 3000;
    } else {
        console.log("Tipo de lavadora no válido");
        return;
    }
    
    let costoTotal = horas * costoHora;
    if (cantidad > 3) {
        costoTotal *= 0.97; // Aplicar descuento del 3%
    }
    
    console.log(`El costo total es ${costoTotal}`);
}

// Ejemplo de uso
calcularCostoLavadora(1, 5, 4);
