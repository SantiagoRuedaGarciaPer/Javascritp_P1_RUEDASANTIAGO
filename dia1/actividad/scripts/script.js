trainers = [{'nombre':'pedro', 'ruta':'NodeJS'}, {'nombre':"jolver", 'ruta':'Java'}]

//Camper
let datos = 0;
function camper() {
    while (true) {
        console.clear()
        console.log("1. Registrarse");
        console.log("2. Ver Estado");
        console.log("3. Salir");
        option = prompt("Ingrese su seleccion")
        if (option == "3"){
            break
        }
        else if (option == "1") {
            if(datos == 0){
                datos=pedirDatos(datos)
            }
            else{
                console.log("Ya esta registrado");
            }
        } else if (option == "2"){
            if(datos != 0){
                console.log(datos[6]);
            }
            else{
                console.clear()
                console.log("En progreso de ingreso");
            }
        }else if(option == "3"){
            break
        }
    }
}

function pedirDatos(datos){
    id = prompt("Ingrese su documento")
    nombre =prompt("ingrese su nombre")
    apellidos=prompt("Ingrese sus apellidos")
    direccion=prompt("Ingrese su direccion")
    acudiente=prompt("Ingrese el nombre del acudiente")
    telefonos=[];
    telefonos[0] = prompt("ingrese su telefono celular")
    telefonos[1] = prompt("Ingrese su telefono fijo")
    Estado="Inscrito"
    Riesgo=prompt("ingrese su riesgo")
    return datos = [id, nombre, apellidos, direccion, acudiente, telefonos, Estado, Riesgo]
}

//Coordinador
let rutas = ["Node JS", "Java", "NetCore"]
function Coordinador(){
    while (true){
        
        console.log("1. Ver estudiante");
        console.log("2. Calificar estudiante");
        console.log("3. Asignar ruta a estudiante");
        console.log("4. crear nueva ruta");
        console.log("5. Asignar ruta a profesor");
        console.log("6. Salir");
        option = prompt("Ingrese su seleccion")
        if(option == "1"){
            verEstudiante(datos)
        }else if(option == "2"){
            nota1 = Number(prompt("ingrese la primera nota"));
            nota2 = Number(prompt("ingrese la segunda nota"));
            data = calificarEstudiante(datos, nota1, nota2);
        }else if(option =="3"){
            data = asignarRuta(datos)
        }else if(option == "4"){
            rutas.push(prompt("ingrese el nombre de la nueva ruta"))
            console.clear()
        }else if(option == "5"){
            for (let index = 0; index < trainers.length; index++) {
                console.log(index +" " + trainers[index]);

            }
            opcionTrainer = Number(prompt("A que trainer desea cambiar de ruta?"));
            trainers[opcionTrainer]['ruta']=prompt("a que ruta lo desea cambiar?")
            for (let index = 0; index < rutas.length; index++) {
                console.log(rutas[index]);
            }console.clear()
            
        }else if(option == "6"){
            break
        }
    }
}
function asignarRuta(datos){
    for (let index = 0; index < rutas.length; index++) {
        console.log(rutas[index]);
    }
    ruta = prompt("A que ruta desea agregar al camper?")

    datos.push(ruta)
}

function verEstudiante(datos){
    console.clear()
    if (datos != 0){
        for (let index = 0; index < datos.length; index++) {
            console.log(datos[index]);            
        }
    }else{
        console.log("Aun no hay estudiantes registrados");
    }
}
function calificarEstudiante(datos, nota1, nota2){
    console.clear()
    if (datos.length > 0){
        if ((nota1 + nota2) / 2 >= 60) {
            datos[6] = "Aprobado"
        }else{
            datos[6] = "Retirado";
        }
        return datos;
    }else{
        console.log("Aun no hay estudiantes registrados")
    }
    
}





function inicioSecion(){
    while (true){
        
        console.log("Para ingresar seleccione su rol")
        console.log("1. Camper");
        console.log("2. Trainer");
        console.log("3. Coordinador");
        console.log("4. Salir");
        
        option = prompt("Ingrese su seleccion")
        if (option == "4"){
            break;
        }
        else if (option == "1") {
            camper()
        }else if (option == "2"){
            //trainer
            console.clear()
            for (let index = 0; index < trainers.length; index++) {
                console.log(trainers[index]['nombre'])
                console.log(trainers[index]['ruta'])
            }
        }else if(option == "3"){
            Coordinador()
        }
    }
}


inicioSecion();