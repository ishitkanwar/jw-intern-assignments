let arrayOne = [
    {
        name: 'xyz',
        age: 10
    },
        {
        name: 'ert',
        age: 4
    },
        {
        name: 'mvm',
        age: 45
    },
        {
        name: 'rere',
        age: 56
    },
];
let arraytwo = [
    {
        name: 'fdcd',
        age: 32
    },
        {
        name: 'ter',
        age: 1
    },
        {
        name: 'fdfg',
        age: 3
    },
        {
        name: 'gfdgd',
        age: 15
    },
];
let index = 0;
// Driver Code
let arrayThird = [...arrayOne, ...arraytwo] // concatenate the two arrays
// sorting using bubblesort
for(var i = 0; i < arrayThird.length; i++){ 
    for(var j = 0; j < ( arrayThird.length - i -1 ); j++){
        if(arrayThird[j].age > arrayThird[j+1].age){
            let temp = arrayThird[j]
            arrayThird[j] = arrayThird[j + 1]
            arrayThird[j+1] = temp
        }
    }
}
// printing sorted array
console.log(arrayThird);

// part 2 of assignment
setInterval(() => {
    index += 1;
    let text;
    if ( index % 3 === 0 ) {
        text = 'Hello'
        if ( index % 5 === 0) {
            text = text + ' ' + 'World'
        }
    } else if (( index % 5 === 0)) {
        text = 'World'
    }
    else {
        text = index
    }
    console.log(text);
}, 1000);
