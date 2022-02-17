// using let grants mutability to the variable.
let age = 20
age = 100
const place = "Asssam" {
    // because using let value can be changed.
    let age = 30
    age = 40
        // expected 40 - in this block updated value of variable age is 40.
    console.log("this is age one ===>", age);
    // expected Assam - exit is allowed, engine will exit the block to find the variable.
    console.log("this is place ====>", place);
}
age = 60
console.log("this is age two ===>", age)
    // expected 60 - the value of age in this block has been updated to 60.