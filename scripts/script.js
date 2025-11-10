let buttonPressed = false;

if (buttonPressed) {
    console.log ("кнопка")
}

let temp = 5;

if (temp < 0) {
    console.log("на уице мороз")
}

let number = 2

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

