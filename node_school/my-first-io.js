'use strict';

const fs = require('fs');

let contents = fs.readFileSync(process.argv[2]);

let dataString = contents.toString();

let dataArray = dataString.split('\n');

console.log(dataArray.length -1)

// Another way to solve the above problem.
// note you can avoid the .toString() by passing 'utf8' as the
// second argument to readFileSync, then you'll get a String!
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1