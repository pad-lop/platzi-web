const promise2 = new Promise((reject) => reject ("Reject"))
const promise1 = new Promise((resolve) => resolve("Resolve"))
const promise3 = new Promise((resolve) => resolve("Resolve 2"))

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response))