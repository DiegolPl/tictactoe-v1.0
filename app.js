// Variables

let btnStart = document.getElementById('btnStart');
let contBienvenida = document.querySelector('.container_bienvenida')
let username;
let player = document.getElementById('nombreJugador');
let minutos;
let segundos;
let tiempo = document.getElementById('tiempo');
let tiempoJuego;

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
    nombreJugador = jugador;
    player.innerHTML = nombreJugador;
    minutos = 0;
    segundos = 0;
    board = [["","",""],["","",""],["","",""]]

    tiempoJuego = setInterval(()=>{
        tiempo.innerHTML = `${formateoDeTiempo(minutos)}:${formateoDeTiempo(segundos)}`
        // minutos++
        segundos++
        if(segundos == 60){
            segundos = 0
            minutos++
        }
    },1000)

    displayBoard(board)
}

// Nuevo

// Variables
let board;
let boxes = document.getElementsByClassName('box');

// AddEventListeners
// Movimiento del jugador
for(let i = 0; i < boxes.length; i++){
    boxes[i].addEventListener('click',()=>{
        if(boxes[i].textContent === ""){
            switch(i){
                case 0:
                    board[0][0] = "X"
                    displayBoard(board)
                    break;
                case 1:
                    board[0][1] = "X"
                    displayBoard(board)
                    break;
                case 2:
                    board[0][2] = "X"
                    displayBoard(board)
                    break;
                case 3:
                    board[1][0] = "X"
                    displayBoard(board)
                    break;
                case 4:
                    board[1][1] = "X"
                    displayBoard(board)
                    break;
                case 5:
                    board[1][2] = "X"
                    displayBoard(board)
                    break;
                case 6:
                    board[2][0] = "X"
                    displayBoard(board)
                    break;
                case 7:
                    board[2][1] = "X"
                    displayBoard(board)
                    break;
                case 8:
                    board[2][2] = "X"
                    displayBoard(board)
                    break;
                default:
                    alert("Ups, algo salió mal!")
            }
            let hayVictoria = victoryFor(board, "X")
            if(!hayVictoria){
                drawMove(board)
                setTimeout(()=>displayBoard(board),2000)
            }
        }
    })
}

// Funciones

function displayBoard(board){
    let indice = 0;
    for(let f = 0; f < 3; f++){
        for(let c = 0; c < 3; c++){
            boxes[indice].innerHTML = `<p>${board[f][c]}</p>`
            indice += 1
        }
    }
}

function makeListOfFreeFields(board){
    let listaIndices = []

    for(let f = 0; f < 3; f++){
        for(let c = 0; c < 3; c++){
            if(board[f][c] === ""){
                listaIndices.push([f,c])
            }
        }
    }

    return listaIndices
}

function drawMove(board){
    let listaCuadrosVacios = makeListOfFreeFields(board);
    if(listaCuadrosVacios.length === 9){
        board[1][1] = "O"
        return
    }

    if(listaCuadrosVacios.length > 0){
        let indice = Math.floor(Math.random() * (listaCuadrosVacios.length - 0) + 0)
        let coords = listaCuadrosVacios[indice]
        board[coords[0]][coords[1]] = "O"
        return victoryFor(board, "O")
    }
}

function victoryFor(board, sign){
    for(let fila of board){
        if(fila[0] === sign && fila[1] === sign && fila[2] === sign){
            if(sign === "O"){
                modal.innerHTML = `<h1 class="titulo">Perdiste!</h1>
                <div class="grupoBotones">
                    <button class="btn" onclick="volverAJugar()">Volver a jugar</button>
                    <button class="btn" onclick="salirJuego()">Salir</button>
                </div>`;
                modal.classList.toggle('none')
                clearInterval(tiempoJuego)
                return true
            }
            if(sign === "X"){
                modal.innerHTML = `<h1 class="titulo">Ganaste!</h1>
                <div class="grupoBotones">
                    <button class="btn" onclick="volverAJugar()">Volver a jugar</button>
                    <button class="btn" onclick="salirJuego()">Salir</button>
                </div>`;
                modal.classList.toggle('none')
                clearInterval(tiempoJuego)
                return true
            }
        }
    }
    
    for(let columna = 0; columna < 3; columna++){
        if(board[0][columna] === sign && board[1][columna] === sign && board[2][columna] === sign){
            if(sign === "O"){
                modal.innerHTML = `<h1 class="titulo">Perdiste!</h1>
                <div class="grupoBotones">
                    <button class="btn" onclick="volverAJugar()">Volver a jugar</button>
                    <button class="btn" onclick="salirJuego()">Salir</button>
                </div>`;
                modal.classList.toggle('none')
                clearInterval(tiempoJuego)
                return true
            }
            if(sign === "X"){
                modal.innerHTML = `<h1 class="titulo">Ganaste!</h1>
                <div class="grupoBotones">
                    <button class="btn" onclick="volverAJugar()">Volver a jugar</button>
                    <button class="btn" onclick="salirJuego()">Salir</button>
                </div>`;
                modal.classList.toggle('none')
                clearInterval(tiempoJuego)
                return true
            }
        }
    }
    
    if(board[0][0] === sign && board[1][1] === sign && board[2][2] === sign || board[2][0] === sign && board[1][1] === sign && board[0][2] === sign){
        if(sign === "O"){
            modal.innerHTML = `<h1 class="titulo">Perdiste!</h1>
            <div class="grupoBotones">
                <button class="btn" onclick="volverAJugar()">Volver a jugar</button>
                <button class="btn" onclick="salirJuego()">Salir</button>
            </div>`;
            modal.classList.toggle('none')
            clearInterval(tiempoJuego)
            return true
        }
        if(sign === "X"){
            modal.innerHTML = `<h1 class="titulo">Ganaste!</h1>
            <div class="grupoBotones">
                <button class="btn" onclick="volverAJugar()">Volver a jugar</button>
                <button class="btn" onclick="salirJuego()">Salir</button>
            </div>`;
            modal.classList.toggle('none')
            clearInterval(tiempoJuego)
            return true
        }
    } 
    
    let listaCuadrosVacios = makeListOfFreeFields(board);
    if(listaCuadrosVacios.length === 0){
        modal.innerHTML = `<h1 class="titulo">Empate!</h1>
        <div class="grupoBotones">
            <button class="btn" onclick="volverAJugar()">Volver a jugar</button>
            <button class="btn" onclick="salirJuego()">Salir</button>
        </div>`;
        modal.classList.toggle('none')
        clearInterval(tiempoJuego)
        return true
    }

    return false

}


// Nuevo nuevo
let modal = document.getElementById('modal');

// Funciones
function volverAJugar(){
    tiempo.innerHTML = "00:00"
    modal.classList.toggle('none');
    startNewGame(username)
}

function salirJuego(){
    tiempo.innerHTML = "00:00"
    modal.classList.toggle('none');
    document.getElementById('user_name').value = ""
    contBienvenida.classList.toggle('none');
}