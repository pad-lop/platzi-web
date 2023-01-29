function* iterate(array){
    for(let value of array){
        yield value; // What's yield?
    }
}

const it = iterate(['Oscar', 'David', 'Ulises', 'Ana', 'Jennifer']);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

// forward this point log is undefined 
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);