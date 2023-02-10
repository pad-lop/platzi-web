const promise1 = new Promise((resolve) => resolve("Resolve"))
const promise2 = new Promise((reject) => reject ("Reject"))
const promise3 = new Promise((resolve) => resolve("Resolve 2"))

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response))
