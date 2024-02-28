class AsientoViaje {
    constructor() {
        this.id = 0;
        this.asientoId = 0;
        this.viajeId = 0;
    }

    asignarId(id) {
        this.id = id;
    }

    asignarAsientoId(asientoId) {
        this.asientoId = asientoId;
    }

    asignarViajeId(viajeId) {
        this.viajeId = viajeId;
    }

    obtenerAsientoViaje() {
        return {
            id: this.id,
            asientoId: this.asientoId,
            viajeId: this.viajeId
        };
    }
}