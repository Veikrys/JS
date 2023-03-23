// 1

let users = [
  { name: "Alex", login: "123", pass: "321" },
  { name: "Viktor", login: "456", pass: "654" },
  { name: "Rudolf", login: "789", pass: "987" },
];

let prom = prompt("Введите логин");
let prom1 = prompt("Введите пароль");
let status = false;

// не успел сделать с помощью функции
for (let i of users) {
  if (i.login == prom && i.pass == prom1) {
    alert("Здравствуйте, " + i.name);
    status = true;
  }
  if (status == false) {
    alert("Oшибка авторизации");
  }
}

// 2

let number = 10;
let prom2 = prompt("Введите число");
let tryes = 5; // ввёл кол-во попыток(просто ради интереса)

// не успел сделать с помощью функции
for (let i = 0; i < tryes; i++) {
  if (number == parseInt(prom2)) {
    alert("Правильно!");
    break;
  } else if (number > parseInt(prom2)) {
    alert("Больше!");
    prom2 = prompt("Введите число");
    i++;
  } else if (number < parseInt(prom2)) {
    alert("Меньше!");
    prom2 = prompt("Введите число");
    i++;
  } else if (parseInt(prom2) == null) {
    break;
  } else if (isNaN(parseInt(prom2))) {
    alert("Должно быть число!");
    prom2 = prompt("Введите число");
  }
}
