class User {}; // Declaración
const newUser = new User(); // Instancia

class Admin {
    greeting(){
        return 'Hello';
    }
};

const gndx = new Admin();
console.log(gndx.greeting());

const developer = new Admin();
console.log(developer.greeting());



// constructor
class SuperUser {
    constructor(){
        console.log('Super User'); // executes when creating a new instance
    }
    greeting(){
        return 'Hello';
    }
};

const david = new SuperUser();


// this
class SuperAdmin {
    constructor(name){
        this.name = name;
    }

    // métodos
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new SuperAdmin('Ana');
console.log(ana.greeting());


// setters getters

class UltraUser {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    speak(){
        return 'hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }

    get uAge(){
        return this.age;
    }
    set uAge(n){
        this.age = n;
    }
}

const drinkloper = new UltraUser('David', 15);
console.log(drinkloper.uAge);
console.log(drinkloper.uAge = 20); // this changes uAge property to 201

