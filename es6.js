const numbers = [34, 98, 34, 12, 99];

const student = {
    name: 'Abul kalam',
    varsity: 'BUBT',
    movies: ['king khan', 'Inception']
};
const myVariable = 'age';
// ES6 1. template string


const about = `My name is ${student.name} and my varsity name is ${student.varsity} I my favourite movie is ${student.movies[1]}`;
console.log(about);

/* / 2.  arrow function
const getFiftyFive = () => 55;//parameter less arrow function
const addSixtyFive = num = num + 65;//single parameter arrow function.
const isEven = x => x % 2 === 0;//single line arrow odd even;
const addThree = (x, y, z) = x + y + z;//three parameter single line arrow f.
const doMath = (num1, num2){
    const sum = num1 + num2;
    return sum;
}//Multiline arrow funciton. */

// 3. spread operator ...

//create an new array from an older array and create an element.

const currentNumbers = [...numbers, 55];

const newNumbwer = [...numbers];
numbers.push(44);
numbers.push(55);
numbers.push(99);
console.log(numbers);
console.log(newNumbwer);
console.log(currentNumbers)

