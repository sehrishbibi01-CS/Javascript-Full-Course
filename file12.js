let winningNumber= 19;
let userGuess= +prompt("Guess a number");
if(userGuess=== winningNumber){
    console.log("your Guess is right!");

}else{
    if(userGuess < winningNumber){
        console.log("too low");
    
    }else{
        console.log("too high");
    }
}