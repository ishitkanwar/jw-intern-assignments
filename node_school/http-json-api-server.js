'use strict';

const http = require('http');
const url = require('url')

const server = http.createServer( (req, res) => {
    let requestURL = url.parse(req.url, true)
    if ( requestURL.pathname === '/api/parsetime') {
        const date = new Date(requestURL.query.iso);
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({
            "hour": date.getHours(),
            "minute": date.getMinutes(),
            "second": date.getSeconds(),
        }));
    } else if ( requestURL.pathname === '/api/unixtime') {
        const date = new Date(requestURL.query.iso);
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({
            "unixtime": date.getTime(),
        }));
    } else {
        res.end("Invalid URL")
    }
});
server.listen(Number(process.argv[2]));

// 'use strict'
// const http = require('http')

// function parsetime (time) {
//     return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//     }
// }

// function unixtime (time) {
//     return { unixtime: time.getTime() }
// }

// const server = http.createServer(function (req, res) {
//     const parsedUrl = new URL(req.url, 'http://example.com')
//     const time = new Date(parsedUrl.searchParams.get('iso'))
//     let result

//     if (/^\/api\/parsetime/.test(req.url)) {
//     result = parsetime(time)
//     } else if (/^\/api\/unixtime/.test(req.url)) {
//     result = unixtime(time)
//     }

//     if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//     } else {
//     res.writeHead(404)
//     res.end()
//     }
// })
// server.listen(Number(process.argv[2]))