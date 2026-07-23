// NESTED DESTRUCTURING
let student = {
    name: "Sehrish",
    address: {
        city: "Peshawar",
        country: "Pakistan"
    }
};
let {
    address: { city }
} = student;

console.log(city);