class Asiento {
    constructor() {
        this.id = 0;
        this.codigo = "";
        this.estado = 0;
    }

    asignarId(id) {
        this.id = id;
    }

    asignarCodigo(codigo) {
        this.codigo = codigo;
    }

    cambiarEstado(estado) {
        this.estado = estado;
    }

    obtenerAsiento() {
        return {
            id: this.id,
            codigo: this.codigo,
            estado: this.estado
        };
    }
}
