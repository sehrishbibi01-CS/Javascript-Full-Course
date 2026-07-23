// CLONE (BETTER EXAMPLE)

let person={
    name:"sehrish"
}
let copy=Object.assign({}, person);
copy.name="Ahemd"
copy.name = "Ahmed";
console.log(person.name);
console.log(copy.name);