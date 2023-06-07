const input = document.querySelector('#inputbox')
const result = document.querySelector('.result')
const error = document.querySelector('.error')

// let inputvalue = input.value
console.log(input.value)
let errorTime
let resultTIme

input.addEventListener("input",updateResult)

function updateResult(e){
    e.preventDefault()
    console.log(input.value)
    if((input.value <= 0) || (isNaN(input.value)) ){
        error.innerHTML = "please enter a valid number"
        clearTimeout(errorTime)

        errorTime = setTimeout(() =>{
            error.innerHTML = ""
            input.value = ""
        },2000)
    }
    else{
       result.textContent = `your weight in kg is: ${(input.value/2.2).toFixed(2)}` 
       clearTimeout(resultTIme)
       resultTIme = setTimeout(() =>{
        result.innerHTML = ""
        input.value = ""
       },10000)
    }
}