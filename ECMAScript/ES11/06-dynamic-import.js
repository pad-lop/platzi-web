const button = document.querySelector('#btn')

button.addEventListener("click", async function (){
    const module = await import('./06-dynamic-import/module.js');
    console.log(module)
    module.hello()
})