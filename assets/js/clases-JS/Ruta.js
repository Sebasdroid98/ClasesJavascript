class Ruta {
    constructor() {
        this.id = 0;
        this.estado = 0;
        this.lugarPartida = "";
        this.lugarDestino = "";
    }

    asignarId(id) {
        this.id = id;
    }

    cambiarEstado(estado) {
        this.estado = estado;
    }

    definirPartida(lugarPartida) {
        this.lugarPartida = lugarPartida;
    }

    definirDestino(lugarDestino) {
        this.lugarDestino = lugarDestino;
    }

    obtenerRuta() {
        return {
            id: this.id,
            estado: this.estado,
            lugarPartida: this.lugarPartida,
            lugarDestino: this.lugarDestino
        };
    }
}
