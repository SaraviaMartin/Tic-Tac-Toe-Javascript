/*Almacenamos los elemntos del estado del juego aqui, se nos hara mas facil usarlo mas tarde*/ 
const statusGame = document.querySelector('.game--status');
let gameActive = true;
let currentPlayer = 'X';
let gameStatus = ["","","","","","","","",""];
const victoryMensaje = () => `El jugador ${currentPlayer} ha ganado!`;
const drawMensaje = () => `Ha terminado en un empate!`;
const currentPlayerTurn = () => `Es el turno de ${currentPlayer}`;

/*Vamos a dar un mensaje inicial para ver quien arranca el juego  */

statusDisplay.innerHTML = currentPlayer();
function handleCellPlayed(clickedCell, clickedCellIndex){
    gameStatus[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}
function handlePlayerChange(){

}


/*En handleCellClick, tenemos que manejar dos cosas.
 Primero tenemos que comprobar si ya se ha hecho clic en la celda. Si no continúa nuestro juego. */
function handleCellClick(clickedCellEvent){
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(
        clickedCellEvent.getAttibute(data-cell-index)
    );
    handleCellPlayed(clickedCell, clickedCellIndex);
}


function handleRestartGame(){

}

