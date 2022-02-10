'use strict';

const http = require('http');
let outputArray = []
let count = 0

for (let i = 2; i < process.argv.length; i++) {
    http.get(process.argv[i], (response) => {
        let output = ''
        response.setEncoding('utf8')
        response.on('data', (data) => {
            output = output + data;
        });
        response.on('error', console.error);
        response.on('end', () => {
            outputArray[i-2] = output;
            count++;
            if (count === 3) {
                outputArray.forEach(element => {
                    console.log(element)
                });
            }
            return;
        });
    }).on('error', console.error);
}