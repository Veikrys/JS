let input = document.querySelector('.input')
let btn = document.querySelector('.btn')
let table = document.querySelector('#table')

btn.addEventListener("click", function(){

    if(input.value == ""){
        alert("Вы ничего не ввели")
    } else{

    table.insertAdjacentHTML("beforeend", 
    '<tr class = "tr"> <td> <p class = "p">' + input.value + '</p> <button class ="btn1"> Готово </button> <button class = "btn2"> Отмена </button> </td> </tr>');
    
    let p = document.querySelectorAll('.p')
    let btn1 = document.querySelectorAll('.btn1')
    let btn2 = document.querySelectorAll('.btn2')
    let tr = document.querySelectorAll('.tr')
    

    for(let i = 0; i<btn1.length; i++){ 
    btn1[i].addEventListener('click', function(){
        alert("Вы выполнили задание " + p[i].textContent)
        tr[i].remove()
        })
    
    }
    
    input.value = ""

    for(let i = 0; i<btn2.length; i++){
    btn2[i].addEventListener('click', function(){
        tr[i].remove()
        })
    }
    
    

    input.value = ""
}
})
