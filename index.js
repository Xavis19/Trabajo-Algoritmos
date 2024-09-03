function suscripcionGimnasio() {
    let edad = parseInt(prompt("Ingrese su edad:"));
    if (edad < 18) {
        console.log("No puede suscribirse al gimnasio porque es menor de edad.");
        return;
    }

    let tipoPlan = prompt("Ingrese el tipo de plan (mensual, trimestral, anual):").toLowerCase();
    let cuotas = 1;
    let costoMensual = 50; 
    let costoTotal = 0;

    switch (tipoPlan) {
        case 'mensual':
            costoTotal = costoMensual;
            break;
        case 'trimestral':
            cuotas = parseInt(prompt("Ingrese el número de cuotas:"));
            costoTotal = costoMensual * 3 * cuotas;
            break;
        case 'anual':
            cuotas = parseInt(prompt("Ingrese el número de cuotas:"));
            costoTotal = costoMensual * 12 * cuotas;
            break;
        default:
            console.log("Tipo de plan no válido.");
            return;
    }

    console.log(`Resumen de la suscripción:
    Tipo de plan: ${tipoPlan}
    Número de cuotas: ${cuotas}
    Costo total: $${costoTotal}`);

    let salir = prompt("¿Desea salir del programa? (s para salir)").toLowerCase();
    if (salir === 's') {
        return;
    } else {
        suscripcionGimnasio();
    }
}

suscripcionGimnasio();
