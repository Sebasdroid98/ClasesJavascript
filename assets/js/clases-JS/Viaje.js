class Viaje {
    constructor() {
        this.id = 0;
        this.estado = 0;
        this.codigo = "";
        this.rutaId = 0;
        this.autobusId = 0;
        this.horaSalida = "";
        this.horaLlegada = "";
    }

    asignarId(id) {
        this.id = id;
    }

    cambiarEstado(estado) {
        this.estado = estado;
    }

    cambiarCodigo(codigo) {
        this.codigo = codigo;
    }

    asignarRutaId(rutaId) {
        this.rutaId = rutaId;
    }

    asignarAutobusId(autobusId) {
        this.autobusId = autobusId;
    }

    asignarHoraSalida(horaSalida) {
        this.horaSalida = horaSalida;
    }

    asignarHoraLlegada(horaLlegada) {
        this.horaLlegada = horaLlegada;
    }

    obtenerViaje() {
        return {
            id: this.id,
            estado: this.estado,
            rutaId: this.rutaId,
            autobusId: this.autobusId,
            horaSalida: this.horaSalida,
            horaLlegada: this.horaLlegada
        };
    }
}