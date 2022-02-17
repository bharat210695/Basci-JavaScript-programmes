// create an array without the first element
// user input => [2, 3, 4, 5, 6];
// this is what i want => [3, 4, 5, 6]
// need to do this using spread syntax
// and return this array




function sum(...numberArray) {
    const [a, ...b] = numberArray
    return b;
}
const result = sum(2, 3, 4, 5, 6)
console.log(result);

//result = [ 3, 4, 5, 6]