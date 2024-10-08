class GestionCitasMedicas {
    constructor() {
        this.citas = [];
    }

    // Programar una nueva cita
    programarCita(nombrePaciente, fecha, hora, medico) {
        this.citas.push({ nombrePaciente, fecha, hora, medico });
        console.log(`Cita programada para ${nombrePaciente} con el Dr. ${medico} el ${fecha} a las ${hora}.`);
    }

    // Ver todas las citas programadas
    verCitasProgramadas() {
        if (this.citas.length > 0) {
            this.citas.sort((a, b) => new Date(a.fecha + ' ' + a.hora) - new Date(b.fecha + ' ' + b.hora));
            this.citas.forEach(cita => {
                console.log(`Paciente: ${cita.nombrePaciente}, Fecha: ${cita.fecha}, Hora: ${cita.hora}, Médico: ${cita.medico}`);
            });
        } else {
            console.log("No hay citas programadas.");
        }
    }

    // Cancelar una cita
    cancelarCita(nombrePaciente) {
        const index = this.citas.findIndex(cita => cita.nombrePaciente === nombrePaciente);
        if (index !== -1) {
            this.citas.splice(index, 1);
            console.log(`Cita de ${nombrePaciente} cancelada.`);
        } else {
            console.log("No se encontró la cita.");
        }
    }
}

// Ejemplo de uso
const gestionCitas = new GestionCitasMedicas();
gestionCitas.programarCita("Juan Pérez", "2024-10-10", "09:00", "Dr. Martínez");
gestionCitas.programarCita("Ana Gómez", "2024-10-11", "10:30", "Dr. López");
gestionCitas.verCitasProgramadas();
gestionCitas.cancelarCita("Juan Pérez");
gestionCitas.verCitasProgramadas();
