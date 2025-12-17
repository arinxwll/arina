class Animal {
    speak() {
        console.log("Animal sound");
    }
}
class Cat extends Animal{
    skeak() {
        console.log("Meow");
    }
}
const cat = new Cat();
cat.speak();
function Human(firstName, LastName) {
    this.firstName = firstName
    this.LastName = LastName
    this.sayHello = function(){
        console.log(`hello, I'm ${firstName}`)
    }

}
Human.prototype.sayHello = function() {
    console.log(`hello, I'm ${firstName}`)
}
const chris = new Human('Chris', 'Coiyer')
console.log(chris.firstName)
console.log(chris.LastName)
const zell = new Human('Zell', 'Liew')
console.log(zell.firstName)
console.log(zell.LastName)
class Human {
    constructor(firstName, LastName) {
        this.firstName = firstName
        this.LastName = LastName
    }

}
const Human = {
    init (firstName, LastName) {
        this.firstName = firstName
this.LastName = LastName
    }
}
const chriss = Object.create(Human)
chris.init('Chris', 'Coyier')
console.log(chriss.firstName)
console.log(chriss.LastName)
const Human= {
    init (firstName, LastName) {
        this.firstName = firstName
        this.LastName = LastName
    }
}
function Human (firstName, LastName) {
    return {
        firstName,
        LastName
    }
}
const chri = Human('Chris', 'Coyier')
console.log(chri.firstName)
console.log(chri.LastName)