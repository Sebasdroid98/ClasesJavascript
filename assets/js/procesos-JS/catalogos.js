/* Se listan las rutas disponibles */
function listarRutas() {
    let rutasUL = document.getElementById('lista-rutas');

    /* Obtenemos el listado de rutas del localStorage */
    let rutaStorage = localStorage.getItem('rutas');
    rutaStorage = JSON.parse(rutaStorage);

    (rutaStorage.lista).forEach(rutaInfo => {
        var nuevoItem = document.createElement("li");
        var contenidoItem = document.createTextNode(rutaInfo.lugarPartida+' - '+rutaInfo.lugarDestino);
        nuevoItem.appendChild(contenidoItem);
        rutasUL.appendChild(nuevoItem);
    });
}

/* Se llenan las rutas */
function llenarRutas() {
    if (localStorage.getItem('rutas')) {
        listarRutas();
        console.log('Rutas ya definidas');
        return false;
    }
    
    let rutaObj1 = new Ruta();
    rutaObj1.asignarId(1);
    rutaObj1.cambiarEstado(1);
    rutaObj1.definirPartida('Cali');
    rutaObj1.definirDestino('Bogotá');
    
    let rutaObj2 = new Ruta();
    rutaObj2.asignarId(2);
    rutaObj2.cambiarEstado(1);
    rutaObj2.definirPartida('Popayán');
    rutaObj2.definirDestino('Cali');
    
    let rutaObj3 = new Ruta();
    rutaObj3.asignarId(3);
    rutaObj3.cambiarEstado(1);
    rutaObj3.definirPartida('Bogotá');
    rutaObj3.definirDestino('Medellín');
    
    let rutas = {lista:[rutaObj1,rutaObj2,rutaObj3]};
    
    let lista = JSON.stringify(rutas);
    localStorage.setItem('rutas', lista);
    listarRutas();
}

/* Se listan los autobuses disponibles */
function listarBuses() {
    let rutasUL = document.getElementById('lista-autobuses');

    /* Obtenemos el listado de rutas del localStorage */
    let busStorage = localStorage.getItem('buses');
    busStorage = JSON.parse(busStorage);

    (busStorage.lista).forEach(busInfo => {
        var nuevoItem = document.createElement("li");
        var contenidoItem = document.createTextNode(busInfo.codigo);
        nuevoItem.appendChild(contenidoItem);
        rutasUL.appendChild(nuevoItem);
    });
}

/* Se llenan los autobuses */
function llenarAutobuses() {
    if (localStorage.getItem('buses')) {
        listarBuses();
        console.log('Autobuses ya definidos');
        return false;
    }

    var listaBuses = [];

    for (let i = 1; i < 10; i++) {
        let busObj = new Autobus();
        busObj.asignarId(i);
        busObj.cambiarEstado(1);
        busObj.cambiarCodigo("BS-N"+i);
        listaBuses.push(busObj);
    }

    let buses = {lista:listaBuses};

    let lista = JSON.stringify(buses);
    localStorage.setItem('buses', lista);

    listarBuses();
}



function cargarSelectRutas() {
    if (!localStorage.getItem('rutas')) {
        console.log('Rutas no definidas');
        return false;
    }

    let listaUL = document.getElementById('rutaId');

    /* Obtenemos el listado de rutas del localStorage */
    let rutaStorage = localStorage.getItem('rutas');
    rutaStorage = JSON.parse(rutaStorage);

    (rutaStorage.lista).forEach(rutaInfo => {
        var nuevoItem = document.createElement("option");
        nuevoItem.value = rutaInfo.id;
        nuevoItem.textContent = rutaInfo.lugarPartida+' - '+rutaInfo.lugarDestino;
        listaUL.appendChild(nuevoItem);
    });
}

function cargarSelectBuses() {
    if (!localStorage.getItem('buses')) {
        console.log('Buses no definidos');
        return false;
    }

    let listaUL = document.getElementById('busId');

    /* Obtenemos el listado de rutas del localStorage */
    let autoStorage = localStorage.getItem('buses');
    autoStorage = JSON.parse(autoStorage);

    (autoStorage.lista).forEach(rutaInfo => {
        var nuevoItem = document.createElement("option");
        nuevoItem.value = rutaInfo.id;
        nuevoItem.textContent = rutaInfo.codigo;
        listaUL.appendChild(nuevoItem);
    });
}

/* Se inicializan los catalogos las clases */

/* Listamos las rutas */
llenarRutas();

/* Listamos los autobuses */
llenarAutobuses();

/* Cargamos los select de registrar viajes */
cargarSelectRutas();
cargarSelectBuses();