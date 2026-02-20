let nombre;
document.getElementById("id_or_name").addEventListener("keydown",(e)=>{
    if(e.key === 'Enter'){
        nombre = document.getElementById("id_or_name").value;
        let linksito="https://pokeapi.co/api/v2/pokemon/"+nombre;
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
                        <img src="${data["sprites"]['other']['showdown']['front_default']}" alt="">
                    </div>
                `;
            }else{
                contenedor.innerHTML="<p>No hay resultados</p>";
            }
        
    })
        
    }
   
})
document.getElementById('Next').addEventListener("click", function(){
    if(nombre){
        
    }
})