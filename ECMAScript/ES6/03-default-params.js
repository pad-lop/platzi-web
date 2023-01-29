function newUser(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 34;
    var country = country || 'MX';
    console.log(name, age, country);
}

newUser();
new('David', 15, 'CO');

//ES6

function newAdmin(name = 'Oscar', age = 32, country = "CL"){
    console.log(name, age, country);
}

newAdmin();
newAdmin('Sara', 43, 'AR');