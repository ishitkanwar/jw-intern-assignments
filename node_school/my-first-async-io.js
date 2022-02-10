const fs = require('fs')
const filePath = process.argv[2]

fs.readFile(process.argv[2], 'utf8', (error, fileContents) => {
    if (error) {
        return console.log(err)
    }
    let result = fileContents.split('\n').length - 1;
    console.log(result);
})