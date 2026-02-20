let nombre;
const LINK = "https://pokeapi.co/api/v2/pokemon/"
let linksito;
const buscador = document.getElementById("id_or_name").addEventListener("keydown",(e)=>{
    if(e.key === 'Enter'){
        nombre = document.getElementById("id_or_name").value;
        linksito = LINK + nombre;
        console.log(linksito);
        fetch(linksito)
        .then(function (res){return res.json()})
        .then((data)=>{
            console.log(data);
            let contenedor = document.getElementById("pokemon-result");
            contenedor.innerHTML="";
            if(data){
                
                contenedor.innerHTML+=`
                    <div class="card">
                        <img src="${imprimirImagen(data)}" alt="">
                    </div>
                `;
            }else{
                contenedor.innerHTML="<p>No hay resultados</p>";
            }
    })    
    } 
})

document.getElementById('Next').addEventListener("click", function(){
    averiguar_siguiente(linksito)
});

function averiguar_siguiente(link){
    let newLink
    fetch(link)
    .then(function (res){return res.json()})
    .then((data)=>{
        let id = data['id']
        newLink = LINK + (id+1)
        siguiente(newLink)
    })
}

function siguiente(link){
    fetch(link)
    .then(function (res){return res.json()})
    .then((data)=>{
        console.log(data);
            let contenedor = document.getElementById("pokemon-result");
            contenedor.innerHTML="";
            if(data){
                
                contenedor.innerHTML+=`
                    <div class="card">
                        <img src="${imprimirImagen(data)}" alt="">
                    </div>
                `;
            }else{
                contenedor.innerHTML="<p>No hay resultados</p>";
            }
    })
}

function imprimirImagen(datos){
    if(datos["sprites"]['other']['showdown']['front_default'] == null){
        return datos['sprites']['front_default']
    }else{
        return datos["sprites"]['other']['showdown']['front_default']
    }
};