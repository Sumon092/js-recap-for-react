//truthy: 'string',number,true,{},[];
//falsy: '',false,nul ,undefined;
//check truthy
let myVar = 5;
//check any truthy
if (myVar) {
    myVar = myVar * 100;
}
else {
    myVar = 0;
}

let money = 50;
//check negative or falsy anything
if (!money) {

}
const myMoney = 900;
let food;
if (myMoney > 100) {
    food = 'biriyani';
}
else {
    food = 'cha nasta';
}

//short cut of immidiate above code
//ternary
let food1 = myMoney > 100 ? 'biriyani' : 'cha biscuit';
console.log(food1);
let drink = (myMoney > 100 && myVar > 100) ? 'coke' : 'filter water';
console.log(drink);

//number to string conversion

let num1 = 52;
console.log(num1);
const numStr = num1 + '';
console.log(numStr);

// strin to number
const input = '555';
const inputNum = +input;
console.log(inputNum);

//more turnery
const isActive = false;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');
// isActive ? showUser() : hideUser();
// use && if the left side is true then right side will be executed
isActive && showUser();
//use || if left side is false then right side will be executed;
isActive || hideUser();
//toggle boolean (true thakle false ,false thakle true)
isActive = !isActive;
