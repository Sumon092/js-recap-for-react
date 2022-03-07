// 1. How to declare variable using let and const
const fatherName = 'Arnold';
let season = 'spring';
season = 'winter';

// 2. six basic condition >,<,===,!==,>=,<=
// multiple condition: &&,||
if (fatherName === 'arnold' || season === 'spring') {

}
else if (season) {
}
else {

}

// 3. array declare
// indexOf
// push,pop,length.
const numbers = [34, 98, 34, 12, 99];
numbers[0] = 56;

// 4. loop
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}

// 5. function
function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}
const output = multiply(33, 12);
console.log(output);

//6. object
// 3 way to access by property.
const student = {
    name: 'Abul kalam',
    varsity: 'BUBT',
    movies: ['king khan', 'Inception']
};
const myVariable = 'age';


console.log(student.name); //Access by direct property
console.log(student['varsity']);//access by property name string
console.log(student[myVariable]);//access by other variable.

// ES6 1. template string
const about = `My name is ${student.name} and my varsity name is ${student.varsity} I my favourite movie is ${student.movies[1]}`;
console.log(about);

// 2.  arrow function
const getFiftyFive = () => 55;//parameter less arrow function
const addSixtyFive = num = num + 65;//single parameter arrow function.
const isEven = x => x % 2 === 0;//single line arrow odd even;
const addThree = (x, y, z) = x + y + z;//three parameter single line arrow f.
const doMath = (num1, num2){
    const sum = num1 + num2;
    return sum;
}//Multiline arrow funciton.

// 3.


