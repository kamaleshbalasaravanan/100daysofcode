const btn = document.querySelector('#btn')
const total = document.querySelector('#total')

const billamount = document.querySelector('#billamount')
const tippercent = document.querySelector('#tippercent')

btn.addEventListener('click',calctotal)

function calctotal(event){
    event.preventDefault()

    const billvalue = billamount.value
    const tipvalue = tippercent.value

    const result = Math.trunc(billvalue * (1+tipvalue/100))
    total.textContent = `Total:${result}`
    
    console.log(billvalue)
    console.log(tipvalue)
    console.log(result)


}   
