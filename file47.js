// FUNCTION SCOPE
// cannot be accessed outside{}
 function demo() {
    if (true) {
        let a = 10;
        var b = 20;
    }

    console.log(b); 
    console.log(a); 
}

demo();