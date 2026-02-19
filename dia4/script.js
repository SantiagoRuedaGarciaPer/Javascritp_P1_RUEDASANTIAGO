//Variables
const LINK = 'https://www.dnd5eapi.co/api/2014/'
const Spell = 'spells'

const spellInput = document.getElementById("spellInput");
const searchButton = document.getElementById("searchButton");
const spellResult = document.getElementById("spell-result");

//llamar a las funciones
searchButton.addEventListener("click", ()=>{
    let spellName = spellInput.value.toLowerCase();
    getAllSpells(spellName)
    //getSpell(spellName)
})

//funciones
function getSpell(name){
    let spellData;
    url = LINK+Spell+"/"+name
    fetch(url).then((response)=>response.json()).then((data)=> {
        spellData = data;
        PrintSpell(spellData)
    })    
}
function PrintSpell(data){
    spellResult.innerHTML=`
        <h2>${data['name']}</h2>
        <p>${data['desc']}</p>
        <p>Damage:</p>
        <p>${data['damage']['damage_type']}</p>
        <li>
            <ul>${data['damage_at_slot_level']}</ul>
        </li>
    `;
}

function getAllSpells(name){
    const url = LINK+Spell;
    fetch(url).then((response)=>response.json()).then((data)=>{
        console.log(data) //Esta linea imprime toda la data, recomiendo usar solo si no sabes como se llama el hechizo
        let spellsData = data.results;
        let machedSpell = spellsData.find((spell)=>spell.name.toLowerCase()===name.toLowerCase())
        if(machedSpell){
            spellResult.innerHTML=`
            <h2>${machedSpell.name}</h2>
            <p>${machedSpell.level}</p>
            <button id="MoreButton">Ver Más</button>
        `
        const buttonMore = document.getElementById("MoreButton")
        buttonMore.addEventListener("click", ()=>{
            getSpell(name)
        })
        }else{
            spellResult.innerHTML=`
            <h2>No se encontro ese hechizo</h2>
            <p>¿seguro que esta bien escrito?</p>
            `
        }
    })
}

/*
async function getAllSpells(name){
    url = LINK+Spell;
    const response = await fetch(url);
    const data = await response.data.results;
    const machedSpell = data.find((spell)=>spell.name.toLowerCase()===name.toLowerCase())

    if(machedSpell){
        getSpell(machedSpell.url)        
    }
}
*/


