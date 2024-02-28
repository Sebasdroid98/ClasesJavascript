class Tiquete {
    constructor() {
        this.id = 0;
        this.codigo = "";
        this.precio = 0;
        this.fecha = "";
        this.hora = "";
        this.cliente = "";
        this.viajeId = 0;
    }

    asignarId(id) {
        this.id = id;
    }

    asignarCodigo(codigo) {
        this.codigo = codigo;
    }

    asignarPrecio(precio) {
        this.precio = precio;
    }

    asignarFecha(fecha) {
        this.fecha = fecha;
    }

    asignarHora(hora) {
        this.hora = hora;
    }

    asignarCliente(cliente) {
        this.cliente = cliente;
    }

    asignarViajeId(viajeId) {
        this.viajeId = viajeId;
    }

    obtenerTiquete() {
        return {
            id: this.id,
            codigo: this.codigo,
            precio: this.precio,
            fecha: this.fecha,
            hora: this.hora,
            cliente: this.cliente,
            viajeId: this.viajeId
        };
    }
}