//Link de la api
const LINK = "https://rickandmortyapi.com/api/"
const personajes = "character"



//donde se imprimiran los resultados
const result = document.getElementById("results");

//Variables de busqueda
const nameInput = document.getElementById("name");          //nombre del personaje
const statusInput = document.getElementById("status");      //Estatus del personaje (Vivo, muerto o desconocido)
const specieInput = document.getElementById("species");     //Su raza (humano o alien)
//Interfaz
const search = document.getElementById("searchBtn")         //Buscar
const clear = document.getElementById("clearBtn")           //Limpiar

const loader = document.getElementById("loader")            //Circulito de carga

const prevBtn = document.getElementById("prevBtn");         //Boton de siguiente personaje
const nextBtn = document.getElementById("nextBtn")          //Boton de anterior personaje
const pageInfo = document.getElementById("pageInfo")        //Informacion de la pagina(no se que hace aun la verdad)

let currentPage = 1;
let totalPages = 1;

//Funciones
async function fetchCharacters(page = 1) {
    const name = nameInput.value;
    const status = statusInput.value;
    const specie = specieInput.value

    loader.classList.remove("hidden")

    result.innerHTML = ``;
    try {        
        const response = await fetch(`${LINK}${personajes}/?page=${page}&name=${name}&status=${status}&species=${specie}`);

        if(!response.ok){
            throw new Error("No se encontraron resultados")
        }
        data = await response.json();
        totalPages = data.info.pages
        currentPage = page;        
        displayCharacters(data.results);
        
        updatePagination();
    } catch (error) {
        result.innerHTML = `
            <p>${error.message}</p>
        `
    }finally{
        loader.classList.add("hidden")
    }
}

function displayCharacters(data){
    result.innerHTML = ``

    data.forEach(character => {
        const card = document.createElement("div")
        card.classList.add("card")
        
        card.innerHTML = `
            <img src="${character.image}" alt="${character.name}">
            <h3>${character.name}</h3>
            <p><strong>Estado:</strong>${character.status}</p>
            <p><strong>Especie:</strong>${character.species}</p>
            <p><strong>Origen:</strong>${character.origin.name}</p>
        `
        result.appendChild(card)
    });
}

function updatePagination(){
    pageInfo.textContent = `Pagina ${currentPage} de ${totalPages}`
    prevBtn.disable = currentPage === 1;
    nextBtn.disble = currentPage === totalPages;
}

search.addEventListener("click", ()=>{
    fetchCharacters(1)
})
clear.addEventListener("click", ()=>{
    nameInput.value="";
    statusInput.value="";
    specieInput.value="";
    result.innerHTML="";
    pageInfo.textContent=""
})

nextBtn.addEventListener("click", ()=>{
    if (currentPage < totalPages){
        fetchCharacters(currentPage+1)
    }
})
prevBtn.addEventListener("click", ()=>{
    if(currentPage > 1){
        fetchCharacters(currentPage-1)
    }
})

fetchCharacters()
