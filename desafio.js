debugger
let username = prompt ("ingrese su nombre")
username.toUpperCase
let huespedes = parseInt (prompt ("Ingrese cantidad de huespedes"))

 if (huespedes >4) {
    console.warn ("No tenemos disponibles cabanas para mas de 4 personas")
   
} else if (huespedes <=4){
    console.log ("bienvenidos a Cabana Verde")
}



function Cabana (nombre, huespedes, precio, servicio) {
    this.nombre = nombre
    this.huespedes = huespedes
    this.precio = precio
    this.servicio = servicio
    this.precioFinal = function () {
        return this.precio + this.servicio
    }
    this.allInclusive = function () {
        return this.precio + (this.servicio *2)
    }
}

const desayuno = 500
const traslados = 500




const cabanatutuca = new Cabana ("tutuca", 2, 2500, desayuno)
const cabanatata = new Cabana ("tata", 4, 4500, traslados)
const cabanamonte = new Cabana ("monte", 4, 6000, traslados)




const provincias = ["la rioja", "san juan", "cordoba", "mendoza", "santa fe","formosa"]
provincias.sort ()



function listarProvincias () {
    debugger
    for ( let i = 0; i <= provincias.length; i++) {
        console.log (provincias [i])
        console.table (provincias)
    }
}
 function agregarProvincias () {
    console.clear ()
       
        let nuevaProvincia = prompt ("ingrese provincia faltante")
        provincias.push (nuevaProvincia)
        console.table (provincias)
}
class Excursiones {
    constructor (cod, nombre, precio) {
        this.codigo = cod
        this.nombre = nombre
        this.precio = precio
    }
}
const excursiones = []

function nuevaExcursion() {
    excursiones.push(new Excursiones(1, "Sanagasta full experience", 2500))
    excursiones.push(new Excursiones(2, "Dique de los Sauces", 2000))
    excursiones.push(new Excursiones(3, "Centro full experience", 1500))
    
}
nuevaExcursion ()

function filtrarExcursion () {
    debugger
    const aBuscar = prompt ("ingrese excursion que desea filtrar")
    const respuesta = excursiones.filter ( e =>  excursiones.nombre.includes("full"))
    if (respuesta != undefined) {
        console.table (respuesta)
    }
}
