const users = {
    gndx: {
        country: 'MX'
    },
    ana: {
        country: 'CO'
    }
}

console.log(users.ana)
console.log(users?.pedro) // No existe
console.log(users?.gndx) // Si existe
console.log(users?.bebeloper?.country) // No existe
