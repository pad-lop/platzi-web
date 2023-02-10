const array = [1, 2, 3, 4, 5, ["Pedro", "María", [6, 7, 8, 9, 10]]];
console.log("--- Flat 0 ---\n", array.flat(0))
console.log("--- Flat 1 ---\n",array.flat(1))
console.log("--- Flat 2 ---\n",array.flat(2))

//won't do anything
console.log("--- Flat 3 ---\n",array.flat(3))


const arrayTwo = [1, 2, 3, 4, 5]
console.log("--- FlatMap (Original) ---\n", arrayTwo)
console.log("--- FlatMap ---\n", arrayTwo.flatMap(value => (value, value * 2)))



