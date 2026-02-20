const send = document.getElementById("send").addEventListener("clik", ()=>{
    const container = document.getElementsById("parrafo_container")
    const nombre = document.getElementById("nombre")
    const gustos = document.getElementById("sobremi")
    container.innerHTML = `
        <h1>Nombre: ${nombre}</h1>
        <strong>hobbies y gustos: ${gustos} </strong>

    `
})