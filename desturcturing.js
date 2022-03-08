// array destructuring
const numbers = [33, 45];
// const x = numbers[0];
// const y = numbers[1];
// const [x, y] = [33, 45];
const [x, y] = numbers;// upore sobgulor result same.written method is diffrent.
console.log(x, y);

// kono ekta fuction er parameter k array er majhe dhukate chaile.
function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}
console.log(boxify(90, 43));

//destructuring with function in right side.
// const [first, second] = [90, 43];//ordinary system.
const [first, second] = boxify(90, 34);//function system

const student = {
    name: 'Abul kalam',
    varsity: 'BUBT',
    movies: ['king khan', 'Inception']
};
//const [firstMovie, secondMovie] = ['king khan', 'Inception'];//ordinary destructuring.
const [firstMovie, secondMovie] = student.movies;
console.log(firstMovie, secondMovie);

//object destructuring
// const {name,age}={name:'alu',age:23};
const { name, salary, age } = { salary: 15000, name: 'alu', age: 13 };
console.log(name, age, salary)// object er khetre serial maintain korte hoina,array te korte hoi karon array te index thake.

const employee = {
    ide: 'VS code',
    designation: 'developer',
    machine: 'mac',
    language: ['HTML', 'CSS', 'JS'],
    specifications: {
        height: 66,
        weight: 78,
        address: 'Sherpur',
        Drinks: {
            brand: 'fresh',
            manufacturer: 'Meghna Group',
            location: 'Narayanganj'
        },
    },
}
const { machine, ide } = employee;
const { weight, address } = employee.specifications;
const { brand } = employee.specifications.Drinks;
console.log(machine, ide);
console.log(weight, address)
console.log(brand);