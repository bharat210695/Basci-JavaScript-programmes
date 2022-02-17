//Problem Set2:

const facebookProfiles = [{
        firstName: "Akash",
        lastName: "Agarwal",
        location: "rampur",
    },
    {
        firstName: "Pritesh",
        lastName: "Kumar",
        location: "gurgaon",
    },
    {
        firstName: "Sabiha",
        lastName: "Khan",
        location: "gurgaon",
    },
    {
        firstName: "Suyash",
        lastName: "Kashyap",
        location: "alwar",
    },
    {
        firstName: "Jay",
        location: "gurgaon",
    },
];
// return the full names of the facebook users who belong to gurgaon

let n = facebookProfiles
    .filter(profile => profile.location === "gurgaon")
    .map(profile => profile.firstName)
console.log(n);

//==================================================================//

function filterOddNumbers(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
const a = [1, 2, 3, 4, 5];
//const evenNumbers = [1, 2, 3, 4, 5].push(6).filter(filterOddNumbers);
//this code could not be run, its show some errors.
//because in array it stored address of its values, 
// in the above line we can the values are store directly in the array.
// so i can create a new variable 'a' where store the all array address.
const evenNumbers = a.filter(filterOddNumbers)
console.log(evenNumbers)