// LEXICAL SCOPE
// inner ftn can access the variables of its outer ftn

let city="peshawar";
function student(){
    function showcity(){
        console.log(city);
    }
    showcity();
}
student();