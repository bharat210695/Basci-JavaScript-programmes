// you have 3 numbers.
// write a program which can find the largest number

const first = 150;
const second = 380;
const third = 1100;

if (first > second && first > third) {
    console.log(first)
} else if (second > first && second > third) {
    console.log(second)
} else if (third > first && third > second) {
    console.log(third)
}