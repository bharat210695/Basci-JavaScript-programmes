/*
if the number is even and less then 15, print a
if the number is even and more then 15, print b
if the number is odd and less then 15, print c
if the number is odd and more then 15, print d
*/

//using nested if else

let num = 20;
if (num % 2 === 0) {
    if (num < 15) {
        console.log('a')
    } else {
        console.log('b')

    }
} else {
    if (num < 10) {
        console.log('c')

    } else {
        console.log(d)
    }
}

//using logical operator

let num = 5;
if (num % 2 === 0 && num < 15) {
    console.log('a')
} else if (num % 2 == 0 && num > 15) {
    console.log('b')
}
if (num % 2 != 0 && num < 10) {
    console.log('c')
} else if (num % 2 != 0 && num > 10) {
    console.log('d')
}