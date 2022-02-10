'use strict';

const http = require('http');
let output = ''

http.get(process.argv[2], (response) => {
    response.setEncoding('utf8')
    response.on('data', (data) => {
        output = output + data;
    });
    response.on('error', console.error)
    response.on('end', () => {
        console.log(output.length)
        console.log(output)
    });
}).on('error', console.error)


// If you wnat to use node package "bl".
// 'use strict'
// const http = require('http')
// const bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err) {
//       return console.error(err)
//     }
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })
