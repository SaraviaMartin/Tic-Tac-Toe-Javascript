/*Almacenamos los elemntos del estado del juego aqui, se nos hara mas facil usarlo mas tarde*/ 
const statusGame = document.querySelector('.game--status');
let gameActive = true;
let currentPlayer = 'X';
let gameStatus = ["","","","","","","","",""];
const victoryMensaje = () => `El jugador ${currentPlayer} ha ganado!`;
const drawMensaje = () => `Ha terminado en un empate!`;
const currentPlayerTurn = () => `Es el turno de ${currentPlayer}`;

/*Vamos a dar un mensaje inicial para ver quien arranca el juego  */

statusGame.innerHTML = currentPlayerTurn();
function handleCellPlayed(clickedCell, clickedCellIndex){
    gameStatus[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}
/*En handleCellClick, tenemos que manejar dos cosas.
 Primero tenemos que comprobar si ya se ha hecho clic en la celda. Si no continúa nuestro juego. */
function handleCellClick(clickedCellEvent){
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(
        clickedCell.getAttribute('data-cell-index')/*GetAttribute devolvera un string, como nosotros necesitamos un numero real lo trataremos como un entero*/ 
    );
    if (gameStatus[clickedCellIndex] !== "" || !gameActive){
        return;
    }

    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}


function handlePlayerChange(){
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusGame.innerHTML = currentPlayerTurn();
}

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
function handleResultValidation(){
    let roundWon = false;
    for(let i = 0; i <=7; i++){
        const winCondition = winningConditions[i];
        let a = gameStatus[winCondition[0]];
        let b = gameStatus[winCondition[1]];
        let c = gameStatus[winCondition[2]];
        if(a === ''|| b === ''|| c ===''){
            continue;
        }
        if(a === b && b === c){
            roundWon = true;
            break;
        }
    }
        if(roundWon){
            statusGame.innerHTML = victoryMensaje();
            gameActive = false;
            return;
        } 
        let roundDraw = !gameStatus.includes("");
        if (roundDraw ){
            statusGame.innerHTML = drawMensaje();
            gameActive = false;
            return;
        }
        handlePlayerChange();
}

function handleRestartGame(){
    gameActive = true;
    currentPlayer = "X";
    gameStatus = ["", "", "", "", "", "", "", "", ""];
    statusGame.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell')
        .forEach(cell => cell.innerHTML = "");
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);