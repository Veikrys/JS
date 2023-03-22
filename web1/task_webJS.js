// 1

let btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  alert("Privet");
});

// 2

let btn1 = document.querySelector(".btn1");
let input = document.querySelector(".input");

btn1.addEventListener("click", function () {
  input.value = "email";
});

// 3

let btn11 = document.querySelector(".btn11");
let input01 = document.querySelector(".input01");

btn11.addEventListener("click", function () {
  if (input01.value == 0) {
    alert("Вы ничего не ввели");
  } else {
    alert("Вы ввели текст инпута");
  }
});

// 4

let btn2 = document.querySelector(".btn2");
let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");

btn2.addEventListener("click", function () {
  val = input1.value;
  input1.value = input2.value;
  input2.value = val;
});

// 5

let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");
let input3 = document.querySelector(".input3");

btn3.addEventListener("click", function () {
  input3.setAttribute("disabled", "true");
});

btn4.addEventListener("click", function () {
  input3.removeAttribute("disabled");
});

// 6

let btn5 = document.querySelector(".btn5");
let qv = document.querySelector(".qv");

btn5.addEventListener("click", function () {
  if (qv.style.display != "none") {
    qv.style.display = "none";
    btn5.textContent = "Показать квадрат";
  } else {
    qv.style.display = "flex";
    btn5.textContent = "Скрыть квадрат";
  }
});

// 7

let qv1 = document.querySelector(".qv1");

qv1.addEventListener("mouseover", function () {
  qv1.style.backgroundColor = "green";
  if (qv1.style.backgroundColor == "green") {
    qv1.addEventListener("mouseout", function () {
      qv1.style.backgroundColor = "red";
    });
  }
});

// 8

let table = document.querySelector('.table')
let qvID = document.querySelectorAll('.qvID')

table.addEventListener("click", function(event){
   let target = event.target
  for (let i = 0; i < qvID.length; i++) {
      if(qvID[i] == target && qvID[i].style.backgroundColor == "red"){
        qvID[i].style.backgroundColor = "green"
      } else {
        qvID[i].style.backgroundColor = "red"
      }
  }
})

// 9

let table1 = document.querySelector(".table1")
let btnCalc = document.querySelectorAll(".btnCalc")
let inputCalc = document.querySelector(".inputCalc")
let table2 = document.querySelector('.table2')
let btnDo = document.querySelectorAll('.btnDo')
let btnVal = document.querySelector('.btnVal')

table1.addEventListener("click", function(event){
     let target = event.target
     for (let i = 0; i < btnCalc.length; i++) {
        if(btnCalc[i] == target){
           inputCalc.value = inputCalc.value + i
        }
        
     }
     
})

table2.addEventListener("click", function(event){
    let target = event.target
    for (let i = 0; i < btnDo.length; i++) {
      if(i == 0 && btnDo[i] == target){
        inputCalc.value = inputCalc.value + "+"
      } 
      if(i == 1 && btnDo[i] == target){
        inputCalc.value = inputCalc.value + "-"
      }
      if(i == 2 && btnDo[i] == target){
        inputCalc.value = inputCalc.value + "*"
      } 
      if (i == 3 && btnDo[i] == target){
        inputCalc.value = inputCalc.value + "/"
      }
    }
})

btnVal.addEventListener('click', function(){
  inputCalc.value = eval(inputCalc.value)
})
