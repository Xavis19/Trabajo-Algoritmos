class CajeroATM {
    constructor() {
        this.clientes = new Map(); // Almacenar clientes como {id: {pin, cuentas}}
        this.clienteActual = null;
        this.intentosActuales = 0;
    }

    // Añadir clientes simulados
    agregarCliente(id, pin, cuentas) {
        this.clientes.set(id, { pin, cuentas });
    }

    // Validar el PIN del cliente
    validarPin(id, pin) {
        const cliente = this.clientes.get(id);
        if (cliente && cliente.pin === pin) {
            this.clienteActual = cliente;
            this.intentosActuales = 0;
            console.log("PIN válido. Bienvenido.");
            return true;
        } else {
            this.intentosActuales++;
            if (this.intentosActuales >= 3) {
                console.log("PIN incorrecto. Se ha bloqueado el acceso.");
                return false;
            }
            console.log("PIN incorrecto. Inténtelo nuevamente.");
            return false;
        }
    }

    // Realizar retiro
    retirar(cuenta, monto) {
        if (this.clienteActual && this.clienteActual.cuentas[cuenta] >= monto && monto % 50000 === 0) {
            this.clienteActual.cuentas[cuenta] -= monto;
            console.log(`Retiro exitoso. Puede tomar ${monto} de la bandeja principal.`);
        } else {
            console.log("Retiro fallido. Verifique el monto o el saldo.");
        }
    }

    // Realizar depósito
    depositar(cuenta, monto, tipo) {
        if (this.clienteActual) {
            this.clienteActual.cuentas[cuenta] += monto;
            console.log(`Depósito exitoso de ${monto} en ${tipo}.`);
        }
    }

    // Transferencia entre cuentas
    transferir(cuentaOrigen, cuentaDestino, monto) {
        if (this.clienteActual && this.clienteActual.cuentas[cuentaOrigen] >= monto) {
            this.clienteActual.cuentas[cuentaOrigen] -= monto;
            this.clienteActual.cuentas[cuentaDestino] += monto;
            console.log(`Transferencia exitosa de ${monto} de la cuenta ${cuentaOrigen} a ${cuentaDestino}.`);
        } else {
            console.log("Transferencia fallida. Verifique el saldo.");
        }
    }

    // Consultar saldo
    consultarSaldo(cuenta) {
        if (this.clienteActual) {
            console.log(`El saldo de la cuenta ${cuenta} es ${this.clienteActual.cuentas[cuenta]}.`);
        }
    }

    // Finalizar sesión
    salir() {
        this.clienteActual = null;
        console.log("Sesión finalizada.");
    }
}

// Ejemplo de uso
const cajero = new CajeroATM();
cajero.agregarCliente("12345678", "1234", { ahorro: 500000, corriente: 200000 });
if (cajero.validarPin("12345678", "1234")) {
    cajero.consultarSaldo("ahorro");
    cajero.retirar("ahorro", 100000);
    cajero.depositar("corriente", 50000, "efectivo");
    cajero.transferir("ahorro", "corriente", 20000);
    cajero.consultarSaldo("corriente");
    cajero.salir();
}
