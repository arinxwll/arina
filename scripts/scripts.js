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

let x = 10;
let y = 5;
console.log(x+y);

let name = "JS";
console.log(`I love ${name}`);

let price = 100;
let discount = 20;
let finalPrice = price - discount;
console.log(finalPrice);

let isOnline = true;
console.log(isOnline);

let n = 7;
let um = 7*2;
console.log(um);

let message =" ";
console.log(message);

let num = [1,2,3];
console.log(num.length);

let stroka = ["a", "b", "c"];
console.log(stroka[0]);

num.push(10);
console.log(num);

let remove = num.pop();
console.log(remove);

for (let i = 0; i < num.length; i++) {
console.log(num[i]);
}

let sum = 0;
for (let i = 0; i < num.length; i++) {
sum += num[i];
}

let min = num[0];
console.log(min);
    let newn = [];
    for (let i = 0; i < num.length; i++)
    {
        newn.push(num[i]*2);
    }

console.log(newn);

let find = false;
for (let i = 0; i < num.length; i++){
    if(num[i] === 5) {
        find = true;
    }
}

for ( let i = 1; i <= 5; i++) {
    console.log(i);
}

for (let i = 5; i >= 1; i--){
    console.log(i);
}
for (let i = 1; i <= 10; i++){
 if(i % 2 === 0){
    console.log(i)
 }
}

let summa = 0;
for (let i = 1; 1 <= 10; i++){
    sum += i;
}
console.log(summa);

for(let i = 0; i<3; i++) {
    console.log("hello");
}

let strok = "JS";
for (let i = 0; i < strok.length; i++){
    console.log(strok[i]);
}
/*
function summa(a, b){
return a + b;
}*/
console.log(sum(5,3));

function square(n){
return n*n;
}

/*function n(name) {
    console.log(`hello, ${name}`);
}
n("arina");*/

function is(num) {
    return num > 0;
}
console.log(is(10));
console.log(is(-5));

function get() {
    return 100;
}
console.log(get());

 let i = {
    name:"arina",
    age:14

 };
 console.log(i);
 console.log(i.name);
 console.log(i.age);

 i.school="208";
 console.log(i);
 console.log(i.school);
