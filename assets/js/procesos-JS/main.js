/* Listar los viajes registrados */
function listarViajes() {
    if (!localStorage.getItem('viajes')) {
        return false;
    }

    let rutasUL = document.getElementById('lista-viajes');

    /* Obtenemos el listado de rutas del localStorage */
    let viajesStorage = localStorage.getItem('viajes');
    let rutaStorage = localStorage.getItem('rutas');
    viajesStorage = JSON.parse(viajesStorage);
    var listaRutas = JSON.parse(rutaStorage);

    (viajesStorage.lista).forEach(viajeInfo => {
        var nuevoItem = document.createElement("li");

        let infoRuta = (listaRutas.lista).filter((elementos) => {
            return viajeInfo.id == elementos.id;
        });

        // console.log('infoRuta', infoRuta);

        let texto = viajeInfo.codigo+' -> '+infoRuta[0].lugarPartida+'-'+infoRuta[0].lugarDestino+' -> '+viajeInfo.horaSalida+'--'+viajeInfo.horaLlegada;

        var contenidoItem = document.createTextNode(texto);
        nuevoItem.appendChild(contenidoItem);
        rutasUL.appendChild(nuevoItem);
    });
}

/* Registrar viaje */
function registrarViaje(contexto, evento) {
    evento.preventDefault();

    // Obtener el formulario por su id
    var formulario = document.getElementById("form-viaje");

    // Obtener los valores de los campos del formulario
    var codigo = formulario.querySelector("#codigo").value;
    var rutaId = formulario.querySelector("#rutaId").value;
    var busId = formulario.querySelector("#busId").value;
    var horaSalida = formulario.querySelector("#horaSalida").value;
    var horaLlegada = formulario.querySelector("#horaLlegada").value;

    /* Se cuentan cuantos viajes existen */
    var viajesCantidad = 0;
    var nuevoId = 0;
    var registrosViajes = [];

    if (localStorage.getItem('viajes')) {
        let viajeStorage = localStorage.getItem('viajes');
        viajeStorage = JSON.parse(viajeStorage);
        console.log('viajeStorage', viajeStorage);
        viajesCantidad = (viajeStorage.lista).lenght;
        console.log(viajesCantidad);
        registrosViajes = viajeStorage.lista;
    }
    console.log('viajes', viajesCantidad);

    if (viajesCantidad == 0) {
        nuevoId = 1;
    }else{
        nuevoId = viajesCantidad++;
    }

    console.log('nuevoId', nuevoId);
    
    var viajeObj = new Viaje();
    viajeObj.asignarId(nuevoId);
    viajeObj.cambiarEstado(1);
    viajeObj.cambiarCodigo(codigo);
    viajeObj.asignarRutaId(parseInt(rutaId));
    viajeObj.asignarAutobusId(parseInt(busId));
    viajeObj.asignarHoraSalida(horaSalida);
    viajeObj.asignarHoraLlegada(horaLlegada);
    // console.log('nuevoViaje', viajeObj);
    registrosViajes.push(viajeObj);

    let viaje = {lista:registrosViajes};
    
    let lista = JSON.stringify(viaje);
    localStorage.setItem('viajes', lista);

    listarViajes();
}

listarViajes();