//1. array of object
const products = [
    { name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver' },
    { name: 'watch', price: 300, brand: 'apple', color: 'golden' },
    { name: 'phone', price: 3000, brand: 'samsung', color: 'black' },
    { name: 'camera', price: 10000, brand: 'canon', color: 'gray' }
];
// 2. map
const brands = products.map(product => product.brand);//map return kore tai tar age variable declare korte hoi.map kono ekta object er nirdisto ekta property er upore loop chalai and new ekta array hisebe oi property element return kore.
console.log(brands);
const prieces = products.map(p => p.price);
console.log(prieces);

// 3.for each .forEach maper motoi shudhu eta return kore na.
products.forEach(p => console.log(p));//sob info pawar jonno
products.forEach(p => console.log(p.color));//specific ekta property pawar jonno
products.forEach(p => {
    // for multiline purpose
})
// 4. filter: kono ekta condition jara fulfill korbe tader sobgulo k return korbe.filter sobsomoi ekta array return korbe.
const cheapProduct = products.filter(p => p.price <= 15000);
const specificName = products.filter(p => p.name.includes('n'));
// console.log(cheapProduct);
// console.log(specificName);

//5. Find: kono ekta conditition jara fulfill korbe tader prothom take return korbe.
const specialName = products.find(p => p.name.includes('p'));
console.log(specialName);


