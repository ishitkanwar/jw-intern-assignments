let localSum = 0
for (let i=2; i<process.argv.length; i++) {
    localSum += Number(process.argv[i])
}
console.log(localSum)