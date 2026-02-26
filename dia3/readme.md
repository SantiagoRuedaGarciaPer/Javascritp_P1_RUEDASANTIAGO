# Promesas

### una promesa en javascript es un objeto que representa la eventual finalizacion (o falla) de una operacion asincrona

"Te prometo entregar algo"
- Si cumplo hago algo ---> Resultado
- Si no cumplo ---> Error


## Estados de una promesa
1. Pendiente: aun no se cumplio ni fallo
2. fulfilled(cumplida): Ya tenemos un valor para usar
3. Rejected(rechazada): Ya tiene motivo de error


## Ciclo de vida de una promesa:
```Nace en pendiente ----> Pasara una sola vez a fulfilled o rejected ---> Quedara en asentada(settled) donde no cambiara jamas ---> Evitar doble entrega```


### Plantilla para promesa con delay que RESUELVE
```javascript
    const resolverEn = (ms, valor) =>  
        new Promise((resolve) => setTimeout(() => resolve(valor), ms))
```
### Plantilla para promesa con delat que RECHAZA
```javascript
    const RechazarEn = (ms, error) =>
        new Promise((_, reject) => setTimeout(() => reject(error), ms))
```
### Ejemplo de promesas
```javascript
const log = (...args) => console.log(...args);
const titulo = (n, nombre) => {
    log("\n"+"=".repeat(50))
    log(`EJERCICIO ${n}: ${nombre}`);
    log("=".repeat(50))
}

function runEjercicio1(){
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
}

runEjercicio1()
```
- [ejemplo trabajado en clase](./code/index.html)

- [Volver a inicio](../)