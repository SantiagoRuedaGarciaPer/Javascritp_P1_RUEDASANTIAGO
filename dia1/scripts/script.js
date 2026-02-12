//nuestro primer comentario
console.log("Hola pendejo")
//Datos primitivos
numero1 = 1;
numero2 = 2;
console.log(typeof(numero1));
texto1 = "omae wa mou" //string
texto2 = "shindeiru!"

console.log(typeof(texto1))
operacionesBasicas = ((((5**6)+256)/5)*2)
console.log(operacionesBasicas)
console.log(texto1 + " " + texto2)

//funciones con parametros y sin retornos
function funcion1(x, y) {
    return x + y
}

//funciones con parametros y sin retornos
function funcion2(x, y) {
    console.log(x + y);
}

//funciones sin parametros y sin retornos
function funcion3(){
    console.log("nagz dor to mandara nagz dru she okata dur jaxz si po kolatrixz desjreo asdr eis woekd dweskemsow")
}


//funsiones sin parametros y con retornos
function funcion4(){
    x = 234;
    y = "sds";
    return x + y
}

console.log(funcion1(1, 2))
funcion2("D", "e")
funcion3()
console.log(funcion4())
nombrePersona = prompt("ingrese su nomrbe")
alert("Has sido hackead@ por el gran mago Guandal el negro, ten cuidado " + nombrePersona)