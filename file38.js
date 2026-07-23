// COMBINING 2 OBJ
let person={
    name:"sehrish",
}
let details={
    cgpa:3.5,
    age:20,
}
let student={
    ...person,
    ...details,
}
console.log(student)