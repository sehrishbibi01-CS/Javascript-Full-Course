// CALL()

const person1 = {
    name: "Sehrish"
};

function greet() {
    console.log("Hello " + this.name);
}

greet.call(person1);