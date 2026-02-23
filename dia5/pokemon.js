//Este codigo lo realize yo, por eso esta tan mal hecho. el de sript.js fue hecho con apoyo del profesor

let nombre;
const LINK = "https://pokeapi.co/api/v2/pokemon/"
let linksito = "https://pokeapi.co/api/v2/pokemon/1"

function imprimirImagen(datos){
    if(datos["sprites"]['versions']['generation-v']['black-white']['animated']['front_default'] == null){
        return datos["sprites"]['versions']['generation-v']['black-white']['animated']['front_default']
    }else{
        return datos["sprites"]['other']['showdown']['front_default']
    }
};

const buscador = document.getElementById("input_search").addEventListener("keydown",(e)=>{
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
                        <img src="${imprimirImagen(data)}" alt="">
                        <div>
                            <span class="pokemon-id">${data['id']}-</span><span class="pokemon-name">${data['forms']['0']['name']}</span>
                        </div>
                `;
                id_or_name = document.getElementById('id_or_name').value = ""
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
        if(id == 1023){
            alert("No hay mas pokemons despues de este :)")
        }
        else{
            newLink = LINK + (id+1)
            linksito = newLink
            siguiente(newLink)
        }
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
                        <img src="${imprimirImagen(data)}" alt="">
                        <div>
                            <span class="pokemon-id">${data['id']}-</span><span class="pokemon-name">${data['forms']['0']['name']}</span>
                        </div>
                `;
                id_or_name = document.getElementById('id_or_name').value = ""

            }else{
                contenedor.innerHTML="<p>No hay resultados</p>";
            }
    })
}

document.getElementById('Previous').addEventListener("click", function(){
    averiguar_anterior(linksito)
});

function averiguar_anterior(link){
    let newLink
    fetch(link)
    .then(function (res){return res.json()})
    .then((data)=>{
        let id = data['id']
        if(id == 1){
            alert("No hay mas pokemons antes que este :)")
        }else{
            newLink = LINK + (id-1)
            linksito = newLink
            anterior(newLink)
        }
    })
}

function anterior(link){
    fetch(link)
    .then(function (res){return res.json()})
    .then((data)=>{
        console.log(data);
            let contenedor = document.getElementById("pokemon-result");
            contenedor.innerHTML="";
            if(data){
                
                contenedor.innerHTML+=`
                    
                        <img src="${imprimirImagen(data)}" alt="">
                        <div>
                            <span class="pokemon-id">${data['id']}-</span><span class="pokemon-name">${data['forms']['0']['name']}</span>
                        </div>
                `;
                id_or_name = document.getElementById('id_or_name').value = ""

            }else{
                contenedor.innerHTML="<p>No hay resultados</p>";
            }
    })
}
