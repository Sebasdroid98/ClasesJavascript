class Autobus {
    constructor() {
        this.id = 0;
        this.codigo = "";
        this.estado = 0;
    }

    asignarId(id) {
        this.id = id;
    }

    cambiarCodigo(codigo) {
        this.codigo = codigo;
    }

    cambiarEstado(estado) {
        this.estado = estado;
    }

    obtenerBus() {
        return {
            id: this.id,
            codigo: this.codigo,
            estado: this.estado
        };
    }
}