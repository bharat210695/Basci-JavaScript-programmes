//Problem Set 1: 

const places = ['delhi', 'gurgaon', 'jaipur', 'pune']
const morePlaces = ['kochi', 'hyderabad', 'Shimla', 'Srinagar']

//1.1 remove first element from places array and print the remaining array 
// let [el1, el2, el3, el4] = places;
// const arr = [el2, el3, el4]
// console.log(arr)

let [a, ...b] = places;
console.log(b)



/** 
    //===================================================//

//1.2 insert that element at the start of the morePlaces array and print the new array
let [el5, ...el6] = morePlaces
const el7 = [el1].concat(morePlaces);
console.log(el7)
    //======================================================//

//1.3 take out last three element from the morePlacesArray and take out first three elements from the places array
let arr2 = el6.concat([el1, el2, el3]);
console.log(arr2)
    //============================================================//

const myData = {
    name: "Rahul",
    age: 20,
    gender: "male",
    address: {
        pinCode: 123455,
        city: "delhi"
    },
    likes: ["music", "movies"]
}

//1.4 destructure and store pincode into a variable named myPincode
const myPincode = myData.address.pinCode;
console.log(myPincode);
//======================================================//

//1.5 destructure and store second like into a vaiable named myLike
const myLike = myData.likes;
console.log(myLike);**/