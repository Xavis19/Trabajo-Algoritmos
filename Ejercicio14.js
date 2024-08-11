function calcularCostoSandwich(tamaño, ingredientes) {
    // Definir el costo base según el tamaño
    let costoBase = tamaño === 'grande' ? 12000 : 6000;
    
    // Definir el costo de cada ingrediente
    const preciosIngredientes = {
        tocineta: 3000,
        pavo: 3000,
        queso: 2500,
        jalapeno: 0 // Jalapeño es gratis, por lo tanto, su costo es 0
    };

    // Calcular el costo de los ingredientes seleccionados
    let costoIngredientes = 0;
    
    for (const ingrediente of ingredientes) {
        if (preciosIngredientes[ingrediente] !== undefined) {
            costoIngredientes += preciosIngredientes[ingrediente];
        }
    }
    
    // Calcular el costo total
    let costoTotal = costoBase + costoIngredientes;

    // Mostrar el resultado en la consola
    console.log(`El costo total del sándwich es ${costoTotal} pesos.`);
}

// Ejemplo de uso de la función
const tamaño = 'grande'; // Puede ser 'pequeño' o 'grande'
const ingredientes = ['tocineta', 'queso']; // Ingredientes seleccionados

calcularCostoSandwich(tamaño, ingredientes);
