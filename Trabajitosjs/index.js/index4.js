class BancoTurnos {
    constructor() {
        this.turnos = [];
        this.contadorTurnos = 0;
    }

    // Tomar un turno
    tomarTurno() {
        this.contadorTurnos++;
        this.turnos.push(this.contadorTurnos);
        console.log(`Turno ${this.contadorTurnos} asignado.`);
    }

    // Llamar al siguiente cliente
    llamarCliente() {
        if (this.turnos.length > 0) {
            const turnoLlamado = this.turnos.shift();
            console.log(`Llamando al turno ${turnoLlamado}.`);
        } else {
            console.log("No hay clientes en la cola.");
        }
    }

    // Mostrar la cola de espera
    mostrarCola() {
        if (this.turnos.length > 0) {
            console.log(`Cola actual: ${this.turnos.join(", ")}`);
        } else {
            console.log("No hay clientes en la cola.");
        }
    }

    // Mostrar el contador de turnos
    mostrarContadorTurnos() {
        console.log(`Se han tomado ${this.contadorTurnos} turnos hasta el momento.`);
    }
}

// Ejemplo de uso
const banco = new BancoTurnos();
banco.tomarTurno();
banco.tomarTurno();
banco.mostrarCola();
banco.llamarCliente();
banco.mostrarCola();
banco.mostrarContadorTurnos();
