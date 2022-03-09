const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;

    if (id && value) {
        localStorage.setItem(id, value);
    }
    idInput.value = '';
    valueInput.value = '';
}
//local storage e object and array rakhte chaile JSON.stringify kore rakhte hobe.like:

// array storage
localStorage.setItem('friend', JSON.stringify([34, 23, 76, 78, 22]));

//object storage
const pen = { price: 33, color: 'black' };
localStorage.setItem('pen', JSON.stringify(pen));

//local storage e object and array k use kore hole JSON.parse(name); use korte hobe.