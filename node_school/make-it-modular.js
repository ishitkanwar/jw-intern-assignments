'use strict';

const mymodule = require('./mymodule.js')

const path = process.argv[2]
const extention = process.argv[3]

let printFiles = (callback) => {
    mymodule(path, extention, callback)
}

printFiles((err, list) => {
    if (err) {
        console.log(err);
    };
    list.forEach(element => {
        console.log(element)
    });
});