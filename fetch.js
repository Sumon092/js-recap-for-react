//JSON
const student = {
    name: 'Abul kalam',
    varsity: 'BUBT',
    movies: ['king khan', 'Inception']
};
// object to stringify
const studentJson = JSON.stringify(student);
console.log(student);
console.log(studentJson);
// stringified by object.
const getObject = JSON.parse(studentJson);
console.log(getObject);

// fetch:
fetch('url')
    .then(res => res.json())
    .then(data => console.log(data));

//key and value
const keys = object.keys(student);
const values = object.values(student);

//for
const numbers = [23, 34, 44, 76, 56];
numbers.forEach(num => console.log(num));//jodi retur na pete chai taile foreach.
numbers.map(num => num * 2);//return pete chaile map

//for of on array like object
//loop on an object using for in


//add or remove from an array

const products = [
    { name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver' },
    { name: 'watch', price: 300, brand: 'apple', color: 'golden' },
    { name: 'phone', price: 3000, brand: 'samsung', color: 'black' },
    { name: 'camera', price: 10000, brand: 'canon', color: 'gray' }
];
const newProduct = { name: 'webcame', price: '700', brand: 'lal' };

//copy products array and then add new products
const newProducts = [...products, newProduct];


//creat a new array without one specific item
//remove phone means create a new array without the phone
const remaining = products.filter(p => p.name !== 'phone');