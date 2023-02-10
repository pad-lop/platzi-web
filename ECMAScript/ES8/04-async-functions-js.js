const exampleAsyncFunction = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('OMG Async Answer :d'), 5000)
        : reject(new Error('Error!!!'))
    })  
}

const answer = async() => {
    const respuesta = await exampleAsyncFunction()
    console.log(respuesta)
    console.log("Answer Receipted")
}

console.log("Before call")
answer()
console.log("After call")