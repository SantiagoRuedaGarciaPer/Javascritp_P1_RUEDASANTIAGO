const comer = document.querySelector(".comer");
const pasar = document.querySelector(".pasar");
const jugador = document.querySelector(".jugador")
const casa = document.querySelector(".repartidor")

let cartasJugador = [];
let cartasCasa = [];

let deck;


const getDeck = async ()=>{
    const respuestaApi = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    if(respuestaApi.status == 200){
        const data = respuestaApi.json();
        return data;
    }
}

const getCards = async ()=>{
    deck = await getDeck()    
    const respuestaApi = await fetch(`https://deckofcardsapi.com/api/deck/${deck['deck_id']}/draw/?count=4`)
    if(respuestaApi.status == 200){
        const data = respuestaApi.json()
        return data
    }
}

const renderCardsStart= async ()=>{
    const carta = await getCards()
    console.log(carta)
    cartasJugador.push( carta['cards'][0]['code'])
    cartasJugador.push(carta['cards'][1]['code'])
    

    cartasCasa.push( carta['cards'][2]['code'])
    cartasCasa.push(carta['cards'][3]['code'])

    jugador.innerHTML = `
        <img class="card reversaJugador" src="https://deckofcardsapi.com/static/img/back.png" 
            onmousedown="this.src='https://deckofcardsapi.com/static/img/${cartasJugador[0]}.png'"

            onmouseup="this.src='https://deckofcardsapi.com/static/img/back.png'"

            onmouseout="this.src='https://deckofcardsapi.com/static/img/back.png'" alt="">
            
        <img class="card" src="https://deckofcardsapi.com/static/img/${cartasJugador[1]}.png" alt="">
        `
    casa.innerHTML = `
        <img class="card reversaCasa" src="https://deckofcardsapi.com/static/img/back.png" alt="">
        <img class="card" src="https://deckofcardsapi.com/static/img/${cartasCasa[1]}.png" alt="">
        `  
} 

renderCardsStart()


const getNewCard = async ()=>{
    const carta = await fetch(`https://deckofcardsapi.com/api/deck/${deck['deck_id']}/draw/?count=1`)
    if(carta.status == 200){
        data = carta.json();
        return data;
    }
}

comer.addEventListener("click", async ()=>{
    const carta = await getNewCard();
    cartasJugador.push(carta['cards'][0]['code'])
    jugador.innerHTML += `<img class="card" src="${carta['cards'][0]['image']}">`
})

pasar.addEventListener("click", ()=>{
    const cartaOctJug = document.querySelector(".reversaJugador")
    const cartaOctRep = document.querySelector(".reversaCasa")
    
    cartaOctJug.src = `https://deckofcardsapi.com/static/img/${cartasJugador[0]}.png`
    cartaOctJug.onmousedown = null
    cartaOctJug.onmouseup = null
    cartaOctJug.onmouseout = null

    cartaOctRep.src = `https://deckofcardsapi.com/static/img/${cartasCasa[0]}.png`

    let countCardJug = 0
    for (let i = 0; i < cartasJugador.length; i++){
        if(cartasJugador[i].length == 2){
            carta = cartasJugador[i].slice(0, 1)
        }else if(cartasJugador[i].length == 3){
            carta = cartasJugador[i].slice(0, 2)
        }

        console.log(carta)
        if(carta == 'A'){
            countCardJug += 11 
        }else if(carta == 'J' || carta == 'Q' || carta == 'K'){
            countCardJug += 10
        }
        else{
            countCardJug += Number(carta)
        }
    }
    console.log(countCardJug);
    
    let countCardRep = 0
    for (let i = 0; i < cartasCasa.length; i++){
        if(cartasCasa[i].length == 2){
            carta = cartasCasa[i].slice(0, 1)
        }else if(cartasCasa[i].length == 3){
            carta = cartasCasa[i].slice(0, 2)
        }

        console.log(carta)
        if(carta == 'A'){
            countCardRep += 11 
        }else if(carta == 'J' || carta == 'Q' || carta == 'K'){
            countCardRep += 10
        }
        else{
            countCardRep += Number(carta)
        }
    }
    console.log(countCardRep);

    if(countCardJug > 21){
        if (cartasJugador.some(elemento => elemento.includes('A'))) {
            countCardJug -= 10
            if(countCardJug > 21){
                jugador.innerHTML+=`<h2>Perdiste!</h2>`
            }
        }else{
            jugador.innerHTML+=`<h2>Perdiste!</h2>`
        }
    }else if(countCardJug < countCardRep || countCardJug == countCardRep){
        jugador.innerHTML+=`<h2>Perdiste!</h2>`
    }
    else if(countCardJug > countCardRep){
        jugador.innerHTML+=`<h2>Ganaste!</h2>`
    }
})

