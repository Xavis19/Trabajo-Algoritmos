class Hotel {
    constructor() {
        this.habitaciones = {
            individual: { total: 10, maxPersonas: 2, reservadas: 0, fumadores: false },
            doble: { total: 10, maxPersonas: 4, reservadas: 0, fumadores: false },
            familiar: { total: 5, maxPersonas: 6, reservadas: 0, fumadores: false, aceptaMascotas: true }
        };
        this.reservas = [];
    }

    // Realizar una reserva
    reservar(nombre, tipoHabitacion, numPersonas, fumador, mascota, periodo) {
        const habitacion = this.habitaciones[tipoHabitacion];
        if (habitacion && habitacion.reservadas < habitacion.total && numPersonas <= habitacion.maxPersonas) {
            if (tipoHabitacion !== "familiar" && mascota) {
                console.log("Solo se permiten mascotas en habitaciones familiares.");
                return;
            }
            habitacion.reservadas++;
            this.reservas.push({ nombre, tipoHabitacion, numPersonas, fumador, mascota, periodo });
            console.log(`Reserva exitosa para ${nombre} en una habitación ${tipoHabitacion}.`);
        } else {
            console.log("No se puede realizar la reserva. Verifique la disponibilidad o el número de personas.");
        }
    }

    // Mostrar el número de habitaciones reservadas
    habitacionesReservadas() {
        const totalReservadas = this.reservas.length;
        console.log(`Total de habitaciones reservadas: ${totalReservadas}`);
    }
}

// Ejemplo de uso
const hotel = new Hotel();
hotel.reservar("Juan Pérez", "familiar", 4, false, true, "3 noches");
hotel.reservar("Ana Gómez", "doble", 2, true, false, "2 noches");
hotel.habitacionesReservadas();
