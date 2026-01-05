// sprade operator:-
let num = [1,2,3,4];
console.log(num);
// usign sprade operator
let array = [10,20,30]
console.log(...array);
// Function arguments পাঠাতে sprade operator
function sum (a,b,c){
    return a+b+c;
}
let taka = [10,20,30];
let result = (sum(...taka))
console.log(result);
let basket1 = ["apple", "banana"];
let basket2 = ["mango", "orange"];
console.log(basket1 + basket2);
let allFruits = [...basket1, ...basket2];
console.log(allFruits);
// Ternary Operator:-
let age = 15
let text = (age < 18)?"Minor":"Adult"
console.log(text);

let isMember = false;
let discount = isMember?"02taka":"nai"
console.log(discount);
// Switch Case Syntax:
let day = 10;
switch(day){
    case 1:
        console.log("Saterday");
        break;
    case 2:
        console.log("sunday");
        break;
    default:
        console.log("invalid day");
}
let days = new Date().getDay()
console.log(days);
switch(days){
    case 0:
        console.log("Saterday");
        break;
    case 0:
        console.log("Saterday");
        break;
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Twesday");
        break;
    case 3:
        console.log("Wednessday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
}