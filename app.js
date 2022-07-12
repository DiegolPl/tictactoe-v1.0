// Variables

let btnStart = document.getElementById('btnStart');
let contBienvenida = document.querySelector('.container_bienvenida')
let username;
let puntajePlayer;
let puntajeMaquina;
let player = document.getElementById('nombreJugador');
let minutos = 0;
let segundos = 0;
let tiempo = document.getElementById('tiempo');

// AddEventListeners

btnStart.addEventListener('click',()=>{
    contBienvenida.classList.toggle('none');
    username = document.getElementById('user_name').value;
    startNewGame(username);
})

// Funciones

function formateoDeTiempo(valor){
    let numero = valor;
    if(`${numero}`.length === 1){
        return `0${numero}`;
    }else{
        return numero;
    }
}

function startNewGame(jugador){
    puntajePlayer = 0;
    puntajeMaquina = 0;
    nombreJugador = jugador;
    player.innerHTML = nombreJugador;

    let tiempoJuego = setInterval(()=>{
        tiempo.innerHTML = `${formateoDeTiempo(minutos)}:${formateoDeTiempo(segundos)}`
        // minutos++
        segundos++
        if(segundos == 60){
            segundos = 0
            minutos++
        }
    },1000)
}