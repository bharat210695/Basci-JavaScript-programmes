/** make a copy of the person object and in that copy 
 * change its name to "Rahul",  
 * pincode to 4567 
 * and first email in the list to 'asd@outlook.com'
 * make sure that original person is not affected by these operation
 * your new person should look like this 
 * const newPerson = {
    name:"Rahul",
    mobile:999999999,
    address:{
        pincode:4567,
        city:"gurgaon",
        state:"haryana",
        emails:['asd@outlook.com', 'abc@yahoo.com', 'rty@hotmail.com'] }}
  
 *  CAUTION: DO NOT USE JSON.parse(JSON.stringify())
    Hint: use destructuring at every level, i.e. copy each level shallowly
 */

const person = {
    name: "Akash",
    mobile: 999999999,
    address: {
        pincode: 1234,
        city: "gurgaon",
        state: "haryana",
        emails: ["asd@gmail.com", "abc@yahoo.com", "rty@hotmail.com"],
    },
};
let sample = Object.assign({}, person)
sample.name = "Rahul";
sample.address.pincode = '4567';
sample.address.emails[0] = 'asd@outlook.com';
console.log(sample);



/**
 * explain the difference between primitive and non primitive data types when we use the following operator
 * 1. assignment operator
 * 2. equality operator
 */
/** 
difference between primitive and non primitive data types:
a. primitive data types are immutable and non primitive are mutable.
b. numbers,strings,booleans,null,undefined are primitive and objects such as function and arrays are non primitive.

1. assignment operator 
It is used to assign a value to a variable, element of an array or property of an object.
x = 10 // value 10 is assigned to x

2. equality operator
It is used to compare to values or expression. If the result is TRUE the expression are equal and False otherwise.
console.log(a == a); // expected output is true.

*/