function calcularCostoServicios(op, minutos) {
    let cargoFijo, valorMinuto, valorDatos;
    switch (op) {
        case 'Tigo':
            cargoFijo = 45000;
            valorMinuto = 200;
            valorDatos = 12000;
            break;
        case 'Claro':
            cargoFijo = 30000;
            valorMinuto = 100;
            valorDatos = 18000;
            break;
        case 'Movistar':
            cargoFijo = 40000;
            valorMinuto = 250;
            valorDatos = 8000;
            break;
        default:
            console.log("Operador no válido");
            return;
    }
    
    let costoTotal = cargoFijo + (minutos * valorMinuto);
    console.log(`El costo total es ${costoTotal}`);
}

// Ejemplo de uso
calcularCostoServicios('Tigo', 50);
