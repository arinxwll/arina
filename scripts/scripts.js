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
/*class Human {
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
chriss.init('Chris', 'Coyier')
console.log(chriss.firstName)
console.log(chriss.LastName)
const Humann= {
    init (firstName, LastName) {
        this.firstName = firstName
        this.LastName = LastName
    }
}*/
function Human (firstName, LastName) {
    return {
        firstName,
        LastName
    }
}
const chri = Human('Chris', 'Coyier')
console.log(chri.firstName)
console.log(chri.LastName)

class Notification {
    send() {
        console.log("Notification");
    }
}    

new Notification().send();

class EmailNotification extends  Notification {
    send() {
        console.log("Notification email...");
    }
}    

class SmsNotification extends  Notification {
    send() {
        console.log("Notification sms    ...");
    }
}    

let emailNotification = new EmailNotification().send();
let smsNotification = new SmsNotification().send();

const notifications = [
    new Notification(),
    new EmailNotification(), 
    new SmsNotification()
];

notifications.forEach(natification => natification.send());

localStorage.setItem("theme", "dark");

const theme = localStorage.getItem("theme");
console.log("theme");
localStorage.clear();
sessionStorage.setItem("step", "2")

const step = sessionStorage.getItem("step");

if (localStorage.getItem("theme")) {
    console.log("Theme exists");
}

const data = {level: 3}
localStorage.setItem("game", JSON.stringify(data));

const game =JSON.parse(localStorage.getItem("game"));