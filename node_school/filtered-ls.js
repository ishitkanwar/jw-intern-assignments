'use strict';

const fs = require('fs');
const pathName = process.argv[2]
const extention = process.argv[3]

fs.readdir(pathName, (error, list) => {
    if (error) {
        console.log(error);
    };
    list.forEach(element => {
        let arr = element.split('.');
        if (arr[1] === extention) {
            console.log(element);
        };
    });
});

// Another way
// const fs = require('fs')
// const path = require('path')

// const folder = process.argv[2]
// const ext = '.' + process.argv[3]

// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file)
//     }
//   })
// })
