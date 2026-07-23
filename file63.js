// BIND()

function greet() {
    console.log("Hello " + this.name);
}

const person = {
    name: "Sehrish"
};

const sayHello = greet.bind(person);