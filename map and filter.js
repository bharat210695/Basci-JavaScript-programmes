// Map method

const num = [3, 11, 8, 13, 20];
let arr = [];
for (index = 0; index < num.length; index++) {
    arr = num.map(x => x * 5)
}
console.log(arr)
    // result (15, 55, 40, 65, 100)

// filter method

const colors = ['blue', 'black', 'green', 'yellow', 'white', 'gray'];
let arr = [];
for (index = 0; index < colors.length; index++) {
    if (colors[index].length < 5) {
        arr = colors.filter(colors => colors.length < 5);
    }
}
console.log(arr)
    //result ['blue' , 'gray']