const exampleAsyncFunction = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Async Answer'), 2000)
        : reject(new Error('Error!!!'))
    })  
}

const answer = async() => {
    const respuesta = await exampleAsyncFunction()
    console.log(respuesta)
    console.log("Answer Receipted")
}

console.log("Before call")
receptor()
console.log("After call")