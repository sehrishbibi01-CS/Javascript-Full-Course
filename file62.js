// APPLY()

function greet(city, country) {
    console.log(
        "Hello " + this.name + " from " + city + ", " + country
    );
}

const person = {
    name: "Sehrish"
};

greet.apply(person, ["Peshawar", "Pakistan"]);