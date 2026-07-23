// ARROW FUNCTION AND THIS
const person = {
    name: "Sehrish",

    greet: function () {
        setTimeout(() => {
            console.log(this.name);
        }, 1000);
    }
};

person.greet();