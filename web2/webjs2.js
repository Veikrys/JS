// 1

let input = document.querySelector('.input')
let btn = document.querySelector('.btn')
let elem = document.querySelector('.elem')

let interval

function timer(){
    if(elem.textContent > '0'){
    elem.textContent--
    }
}

btn.addEventListener("click", function(){
    clearInterval(interval)
    elem.textContent = eval(input.value)
    interval = setInterval(timer, 1000)
})
    
