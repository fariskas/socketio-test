const BG_COLOUR = '#231f20';
const SNAKE_COLOUR = '#c2c2c2';
const FOOD_COLOUR = '#e66916';

const socket = io('https://sleepy-island-33889.herokuapp.com/');

socket.on('init', handleInit);
// socket.on('gameState', handleGameState);
// socket.on('gameOver', handleGameOver);
// socket.on('gameCode', handleGameCode);
// socket.on('unknownCode', handleUnknownCode);

// const gameCodeInput = document.querySelector('gameCodeInput');

// newGameBtn.addEventListener('click', newGame);
// joinGameBtn.addEventListener('click', joinGame);

var gameActive = false;

var dump = document.querySelector('.test');

function init() {
    document.addEventListener('keydown', keydown);
    gameActive = true;

    const code = '123';
    socket.emit('joinGame', code);
}

function keydown(e) {
    socket.emit('keydown', e.keyCode);
}

// function handleInit(number) {
//     playerNumber = number;
// }

// function reset() {
//     playerNumber = null;
//     gameCodeInput.value = '';
//     initialScreen.style.display = 'block';
//     gameScreen.style.display = 'none';
// }
