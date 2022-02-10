'use strict';

const net = require('net')

const server = net.createServer( (socket) => {
    const date = new Date();
    socket.write(`${date.getFullYear()}-${formatData(date.getMonth()+1)}-${formatData(date.getDate())} ${formatData(date.getHours())}:${formatData(date.getMinutes())}` + '\n')
    socket.end()
    // OR
    // socket.end('Hello World)
});
server.listen(Number(process.argv[2]));

function formatData(value) {
    if (value < 10) {
        value = "0" + value
    };
    return value;
};