/*Almacenamos los elemntos del estado del juego aqui, se nos hara mas facil usarlo mas tarde*/ 
const statusGame = document.querySelector('.game--status');
let gameActive = true;
let currentPlayer = 'X';
let gameStatus = ["","","","","","","","",""];
const victoryMensaje = () => `El jugador ${currentPlayer} ha ganado!`;
const drawMensaje = () => `Ha terminado en un empate!`;
const currentPlayerTurn = () => `Es el turno de ${currentPlayer}`;



