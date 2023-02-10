
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

    get #uAge(){
        return this.age;
    }
    set #uAge(n){
        this.age = n;
    }
}

const drinklover = new UltraUser('David', 15);
console.log(drinklover.uAge);
console.log(drinklover.uAge = 20);
