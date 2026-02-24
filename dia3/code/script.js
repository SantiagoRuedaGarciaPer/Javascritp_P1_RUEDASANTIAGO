const log = (...args) => console.log(...args);

/*
//Plantilla para promesa con delay que RESUELVE
const resolverEn = (ms, valor) =>  
    new Promise((resolve) => setTimeout(() => resolve(valor), ms))
//Plantilla para promesa con delat que RECHAZA
const RechazarEn = (ms, error) =>
    new Promise((_, reject) => setTimeout(() => reject(error), ms))
const titulo = (n, nombre) => {
    log("\n"+"=".repeat(50))
    log(`EJERCICIO ${n}: ${nombre}`);
    log("=".repeat(50))
}

function runEjemplo1(){
    titulo(1, "Mi primera promesa (resolver)")
    function saludarAsync(nombre){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(`hola ${nombre}`)
            }, 1200)
        })
    }
    log("Antes de llamar saludarAsync...");
    saludarAsync("Pedro").then((msg)=>log("Ok Then", msg))
    .catch((err)=> log("X Catch", err.message))
    .finally(()=>log("Finalizado"))
} */

//Ejercicio 1
    function messajeAsync(texto, ms){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(texto)
            }, ms)
        })
    }
log("Iniciando...")
messajeAsync("El cuerdas gratis llego vendiendo... hielo azul por dos esmeraldas. y adivina que, estamos en los glaciares. o sea, wow", 1000)
.then((msg)=>log(msg))
.catch((err)=>log("Error", err.message))
.finally(()=>log("Proceso Finalizado"))

function verificarNumeroAsync(numero){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (numero % 2 === 0){
                resolve("El numero es valido")
            }else{
                reject(new Error("El numero es invalido"))
            }
        }, 500)
    })
}
verificarNumeroAsync(3).then((msg)=>log(msg))
.catch((err)=>log(err.message))
.finally(()=>log("El programa ha finalizado"))