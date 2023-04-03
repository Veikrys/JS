// Задание 1
// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

let user = {
  name: "John",
  surname: "Smith",
};

user.name = "Pete";
delete user.name;

console.log(user);

//Задание 2
// Вывести зарплату Коли

let obj = { Коля: "1000", Вася: "500", Петя: "200" };

console.log(obj["Коля"]);

// //Задание 2.1
// Написать функцию, которая принимает массив сотрудников, каждый сотрудник имеет имя и возраст и возвращает массив, где каждый элемент представляет из себя строку "Иван 23 года".

let sotr = [
  { name: "Иван", age: 23 },
  { name: "Dima", age: 15 },
  { name: "Alex", age: 45 },
];

function filter(obj1) {
  let array = [];
  for (let i of obj1) {
    array.push(i.name + " " + i.age + " years");
  }
  return array;
}

console.log(filter(sotr));

// //Задание 3
// Получите из этого массива объект, где name == "Bob" и сохраните это в какой-либо переменной.
// Удалите из массива объектов, задание 3, объект с name == "Anna".

let user1 = [
  {
    name: "John",
    age: 30,
  },
  {
    name: "Bob",
    age: 21,
  },
  {
    name: "Anna",
    age: 19,
  },
];

function Name(obj) {
  let Bob;
  for (let i of obj) {
    if (i.name == "Bob") {
      Bob = i;
    }
    if (i.name == "Anna") {
      delete i;
    }
  }
  console.log(user1);

  return Bob;
}
console.log(Name(user1));

// console.log(Name(user1));
// Name(user1);

// Задача 4
// Создать объект, свойствами которого будут 2 переменные и функция, которая выводит в консоль имя и фамилию из переменных
// Добавить свойство, значением которого будет функция, которая выводит сообщение в консоль 'My name ... '
// удалить первую функцию

let obj1 = {
  name: "Alex",
  surname: "Kirsh",
  fio: function () {
    console.log(this.name + " " + this.surname);
  },
  hi: function () {
    console.log("My name ...");
  },
};

delete obj1.fio;
console.log(obj1);

//Задача 5
//Создать функцию, входными параметрами которой будут 2 числа.
// Создайте объект calculator (калькулятор) с двумя свойствами, значениями которых будут входные параметры функции и с двумя методами:
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

function calc(one, two) {
  let calculator = {
    one: one,
    two: two,
    sum: function () {
      let a = this.one + this.two;
      return a;
    },
    mul: function () {
      let b = this.one * this.two;
      return b;
    },
  };
  console.log(calculator.sum());
  console.log(calculator.mul());
}

calc(2, 6)

//Задание 6
// У нас есть объект, в котором хранятся зарплаты нашей команды:
// let salaries = {
//         John: 100,
//         Ann: 160,
//         Pete: 130
//     }
// // Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    }
let summ = 0

for(let i of Object.values(salaries)){
  summ = summ + i
}

console.log(summ);

//Задание 7
// У нас есть следующий объект:
// let user = {
//     name: "John",
//     age: 30
// };
// Проверьте программно, что этот объект не пустой и что в нем есть ключ age.

let user2 = {
    name: "John",
    age: 30
};

let sost = false
let ageSost = false
let mass = []
mass = Object.keys(user2)

if(mass.lenght != 0){
  sost = true
}

for(let i of mass){
   if(i == "age"){
     ageSost = true
   }
}

console.log(sost, ageSost);

//Задание 9
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// let par = 0

// function multiplyNumeric(obj){
//   for(let i of Object.values(obj)){
//     if(typeof i == 'number'){
//     for(let key of Object.keys(obj)){
//       if(typeof i == 'number'){
//         delete obj[key]
//         i = i*2
//         obj[key] = i
//       }
//       }
//     }
//   }
// }

// multiplyNumeric(menu)

// console.log(menu);
