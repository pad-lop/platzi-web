//enhanced object literals

function newUser(user, age, country, uId){
    return {
        user,
        age,
        country,
        uId,
    }
}

console.log(newUser("gndx", 34, "MX", 1));

function newAdmin(User, Uage, Ucountry, uId){
    return {
        user: User,
        age: Uage,
        country: Ucountry,
        id: uId
    }
}