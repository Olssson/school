const ws = require('ws');

const port = 8080;
const wss = new ws.WebSocketServer({ port });


wss.on('listening', () => {
    console.log(`Listening on port ${port}`);
});

wss.on('connection', (ws) => {
    console.log('Client connected');

    ws.on('message', (message) => {
        console.log(data.toString());
    });
});