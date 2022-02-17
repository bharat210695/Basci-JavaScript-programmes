//find the area of a triangle.  Lengths of its sides are 5, 6, 7

let a = 5
let b = 6
let c = 7
let d = (a + b + c) / 2
let area = Math.sqrt(d * ((d - a) * (d - b) * (d - c)))
console.log(area)

