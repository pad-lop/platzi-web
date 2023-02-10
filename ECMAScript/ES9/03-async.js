async function* anotherGenerator() {
    yield await Promise.resolve(1)
    yield await Promise.resolve(2)
    yield await Promise.resolve(3)

}

const other = anotherGenerator();
other.next().then(response => console.log(response.value))
other.next().then(response => console.log(response.value))
other.next().then(response => console.log(response.value))
other.next().then(response => console.log(response.value))
console.log("First call to async function ENDED")

async function arrayOfNames(array){
    for await(let value of array) {
        console.log(value)
    }
}

const names = arrayOfNames(['Oscar', 'David', 'Ana'])
console.log('Second call to async function ENDED')