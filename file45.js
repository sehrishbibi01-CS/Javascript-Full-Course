// FUNCTION INSIDE FUNCTION
function orderPizza() {

    function makePizza() {
        console.log("Making pizza...");
    }

    console.log("Order received");

    makePizza();

    console.log("Pizza delivered");
}

orderPizza();