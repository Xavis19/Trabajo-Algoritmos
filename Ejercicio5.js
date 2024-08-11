function calificarMaterias(notas) {
    const promedio = notas.reduce((a, b) => a + b, 0) / notas.length;
    if (promedio >= 0 && promedio <= 5.9) {
        console.log("La calificación es mala");
    } else if (promedio >= 6 && promedio <= 8) {
        console.log("La calificación es buena");
    } else if (promedio > 8) {
        console.log("La calificación es excelente");
    }
}

// Ejemplo de uso
calificarMaterias([7, 8, 9, 10, 6]);
