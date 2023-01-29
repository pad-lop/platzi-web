let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

const animal = 'Dog';
// Can't reassign cause is const: animal = 'Cat'
console.log(animal);

const fruits = () => {
    if(true) {
        var fruit1 = 'Apple'; // function scope
        let fruit2 = 'Kiwi'; // block Scope
        const fruit3 = 'Banana'; // block Scope
    }

    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();