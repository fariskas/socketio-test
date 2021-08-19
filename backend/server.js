const io = require('socket.io')();
const { initGame, gameLoop, getUpdatedVelocity } = require('./game');
// const { FRAME_RATE } = require('./constants');
const { makeid } = require('./utils');

const state = {};
const clientRooms = {};

io.on('connection', (client) => {
    client.on('keydown', handleKeydown);
    //   client.on('newGame', handleNewGame);
    //   client.on('joinGame', handleJoinGame);

    function handleKeydown(keyCode) {
        const roomName = clientRooms[client.id];
        if (!roomName) {
            return;
        }
        try {
            keyCode = parseInt(keyCode);
        } catch (e) {
            console.error(e);
            return;
        }
    }
});

// function emitGameState(room, gameState) {
//   // Send this event to everyone in the room.
//   io.sockets.in(room)
//     .emit('gameState', JSON.stringify(gameState));
// }

// function emitGameOver(room, winner) {
//   io.sockets.in(room)
//     .emit('gameOver', JSON.stringify({ winner }));
// }

io.listen(process.env.PORT || 3000);
