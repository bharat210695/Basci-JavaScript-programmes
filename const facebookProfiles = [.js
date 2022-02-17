const facebookProfiles = [{
        firstName: "Akash",
        lastName: "Agarwal",
        number: "111111111",
        likes: ["music", "movies"],
        hasDrivingLicense: false,
        address: {
            location: "rampur",
            state: "up",
        },
        emails: ["abc@outlook.com", "efg@gamil.com", "ghj@gmail.com"],
    },
    {
        firstName: "Pritesh",
        lastName: "Kumar",
        number: "222222222",
        likes: ["code", "driving"],
        hasDrivingLicense: false,
        address: {
            location: "gurgaon",
            state: "haryana",
        },
        emails: ["fgdfg@gmail.com"],
    },
    {
        firstName: "Sabiha",
        lastName: "Khan",
        number: "333333333",
        hasDrivingLicense: false,
        address: {
            location: "lucknow",
            state: "up",
        },
    },
    {
        firstName: "Suyash",
        lastName: "Kashyap",
        number: "444444444",
        likes: ["travel", "driving"],
        hasDrivingLicense: true,
        address: {
            location: "alwar",
            state: "rajasthan",
        },
        emails: ["abc@yahoo.com"],
    },
    {
        firstName: "Jay",
        likes: ["food", "mobile"],
        hasDrivingLicense: true,
        address: {
            location: "gurgaon",
            state: "haryana",
        },
        emails: ["abc@gmail.com", "efg@yahoo.com", "ghj@outlook.com"],
    },
];
//Facebook profile lookup
function profileLookup(name, property) {

    if (name === "Pritesh" && number === "222222222") {
        return number
    } else if (name !== "Suyash" || name !== "Pritesh" || name !== "Jay" || name !== "Pritesh" || name !== "Sabiha") {
        return "Person does not Exist"
    } else {
        return "not present"
    }
}
const result = profileLookup("Pritesh", "222222222")
console.log(result)


// Task => complete the above function such that when it is called with 
// name and property, then it should return its value
// ex
// 1. if we pass Pritesh and number, then it should return his number
// 2. if name is not in the list, return "person does not exist"
// 3. if property is not present then return "no such property"