class UniversidadAtencion {
    constructor() {
        this.usuariosAtendidos = 0;
        this.atenciones = {
            llamada: 0,
            asesoria: {
                estudiante: 0,
                directivo: 0
            }
        };
    }

    // Registrar atención
    registrarAtencion(cedula, tipoAtencion, tipoAsesoria = null) {
        this.usuariosAtendidos++;
        if (tipoAtencion === "llamada") {
            this.atenciones.llamada++;
        } else if (tipoAtencion === "asesoria" && tipoAsesoria) {
            this.atenciones.asesoria[tipoAsesoria]++;
        }
        console.log(`Atención registrada para cédula ${cedula} en ${tipoAtencion}.`);
    }

    // Transferir asesoría a llamada telefónica
    transferirAsesoriaALlamada() {
        this.atenciones.llamada++;
        console.log("Asesoría transferida a llamada telefónica.");
    }

    // Mostrar estadísticas de atención
    mostrarEstadisticas() {
        console.log(`Total de usuarios atendidos: ${this.usuariosAtendidos}`);
        console.log(`Atenciones por llamada: ${this.atenciones.llamada}`);
        console.log(`Asesorías a estudiantes: ${this.atenciones.asesoria.estudiante}`);
        console.log(`Asesorías a directivos: ${this.atenciones.asesoria.directivo}`);
    }
}

// Ejemplo de uso
const universidad = new UniversidadAtencion();
universidad.registrarAtencion("12345678", "llamada");
universidad.registrarAtencion("87654321", "asesoria", "estudiante");
universidad.transferirAsesoriaALlamada();
universidad.mostrarEstadisticas();
