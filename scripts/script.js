let buttonPressed = false;

if (buttonPressed) {
    console.log ("кнопка")
}

let temp = 5;

if (temp < 0) {
    console.log("на уице мороз")
}

let number = 2;

if (number%2==0) {
console.log(number)
}

let battery = 5;

if (battery < 10) {
    console.log("нужно зарядить телефон");
} else {
    console.log ("батарея в порядке");
}

let isWeekend = false;

if (isWeekend === true) {
    console.log("можно поспать подольше");
} else {
    console.log("надо в школу");
}

let grade = 8;

if (grade >= 9) {
    console.log("отлично");
} else if (grade >= 7) {
    console.log("хорошо");
} else if (grade >= 5) {
    console.log ("удовлетварительно");
} else {
    console.log("нужно подтянуться");
}

if (temp >= 30) {
    console.log("очень жарко");
} else if (grade >= 20) {
    console.log("тепло");
} else if (grade >=10) {
    console.log ("прохладно");
} else {
    console.log("холодно");
}

let age = 56;
let hasTicket  = false;

if (age >= 18 && hasTicket) {
    console.log("можно войти");
} else if (age >= 18 && !hasTicket) {
    console.log("нужен билет");
} else {
    console.log ("недостаточно лет")
}

let day = 3;

switch (day) {
    case 1:
        console.log("понедельник")
        break;
        case 2:
            console.log("вторник")
            break;
            case 3:
                console.log("среда")
                break;
                default:
                    console.log ("другой день")
}
let rol = 3;

switch (rol) {
    case 1:
        console.log("привет admin")
        break;
        case 2:
            console.log("привет user")
            break;
            case 3:
                console.log("привет гость")
                break;
                default:
                    console.log ("не подходит")
}

let isOnline = true;

let status = isOnline ? "в сети" : "не в сети";
 console.log ("status:", status);

 let ready = true;

let process = ready ? "готов" : "не готов";
 console.log ("status:", process);

for (let i = 1; i <= 5; i++) {
    console.log ("повтор" + i);
}
for (let i = 2; i <= 10; i += 2) {
    console.log(i)
}
for (let i = 5; i <= 15; i++) {
    console.log ("i");
}
for (let i = 5; i <= 1; i--) {
    console.log ("i");
}
console.log ("старт");

let j = 1;

while (j <= 3) {
    console.log ("шаг" + j);
    j++;
}

let money = 100;

while (money > 0) {
    console.log ("покупаю мороженое");
    money -= 20;
}

let i = 10;

while (i > 0) {
    console.log ("i");
    i--;
}

let g = 1;

do {
    console.log(g);
    g++;
} while(g <= 3)

let password;

do {
    password = prompt("введите пароль");
} while(password !== "1234");
console.log("пароль принят"); 

let num;
do{
    num = prompt("введите число");
} while(num != 5); 

let fruits = ["яблоко","банан","груша"];

for (let fruit of fruits) {
    console.log ("fruit");
}

for (let better of "привет") {
    console.log (better);
}
let animals = ["кот","собака","хомяк", "лиса"];

for(let animal of animals)
 {
    console.log ("animals");
}

let person = {name: "Ann", age: 15, city: "minsk"};

for (let key in person) {
    console.log (key + ": " + person[key])
}

let me = {name: "Arina", age: 14, city: "minsk"};

for (let key in me) {
    console.log (key + ": " + me[key])
}
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log(i);
}
for (let i = 1; i <= 10; i++) {
    if (i%2 === 3) continue;
    console.log(i);
}

let sum = 0;

for(i=1; i<= 5; i++){
    sum += i;
}
console.log("сумма", sum);

for (let i=1; i <= 10; i++){
    console.log (`3 * ${1} = ${3 * i}`)
}

let word = "банан";
let count = 0;

for (let letter of word) {
    if (letter === "a") count++;
}
console.log(`букв в слове ${word}`, count);

let fruitword= "ананас";
let fruitwordcount = 0;

for (let letter of fruitword.toLowerCase()) {
    if (letter === "a") fruitwordcount++;
}
console.log(`букв в слове ${fruitword}`, fruitwordcount)