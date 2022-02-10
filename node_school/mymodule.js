'use strict';
const fs = require('fs');

module.exports = function (path, extention, callback) {
    fs.readdir(path, (err, list) => {
        if (err) {
            return callback(err);
        };
        let resultList = []
        list.forEach(element => {
            let arr = element.split('.');
            if (arr[1] === extention) {
                resultList.push(element)
            };
        });
        callback(null, resultList)
    });
};