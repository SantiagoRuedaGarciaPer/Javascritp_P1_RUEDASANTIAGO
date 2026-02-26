const pokemonName = document.querySelector(".pokemon_name");
const pokemonNumber = document.querySelector(".pokemon_number");
const pokemonImage = document.querySelector(".pokemon__image");

const form = document.querySelector(".form");
const input = document.querySelector(".input_search")
const btn_prev = document.querySelector(".btn-prev")
const btn_next = document.querySelector(".btn-next")

const pokemonMedia = document.querySelector(".gritos")

let searchPokemon = 1;

const fetchPokemon = async (pokemon)=>{
    const respuestaApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    if (respuestaApi.status == 200){
        const data = respuestaApi.json()
        return data
    }
}

const renderPokemon = async (pokemon)=>{
    pokemonName.innerHTML = "Loading..."
    pokemonNumber.innerHTML = ""
    
    const data = await fetchPokemon(pokemon)

    if(data){
        console.log(data)
        pokemonImage.style.display='block'
        pokemonName.innerHTML=data['name']
        pokemonNumber.innerHTML=data['id']
        if(data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'] === null && data['sprites']['other']['showdown']['front_default'] !== null){
            
            pokemonImage.src = data["sprites"]['other']['showdown']['front_default']

        }else if(data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'] === null && data["sprites"]['other']['showdown']['front_default'] === null){
            
            pokemonImage.src = data["sprites"]['front_default']

        }else{

            pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
        }
        input.value = ""
        searchPokemon = data['id']
        pokemonMedia.src=data['cries']['latest'];
    }else{
        pokemonImage.sytle.display='none'
        pokemonName.innerHTML="No se encontro el pokemon"
    }
}

form.addEventListener("submit", (event)=>{
    event.preventDefault()
    renderPokemon(input.value.toLowerCase())
})

    
btn_prev.addEventListener("click", ()=>{
    if(searchPokemon > 1){
        searchPokemon -= 1
        renderPokemon(searchPokemon)
    }
})

btn_next.addEventListener("click", ()=>{
    if(searchPokemon < 1025){
        searchPokemon ++;
        renderPokemon(searchPokemon)
    }
})

renderPokemon(searchPokemon)

