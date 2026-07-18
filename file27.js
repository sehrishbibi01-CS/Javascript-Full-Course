// CONCATENATE TWO ARRAYS
let array1=["item1","item2","item3"];
// let array2=["item1","item2"];
let array2=array1.slice(0).concate(["item4","item5"]);
// let array2 =[].concat(array1);

// spread operator

// let array2=[...array1];
array1.push("item4");
console.log(array1===array2);
console.log(array1);
console.log(array2);
