// console.log('hi')

const form = document.querySelector('form')
const eField = form.querySelector('.email')
const eInput = eField.querySelector('input')

const pField = form.querySelector('.password')
const pInput = pField.querySelector('input')

const rpField = form.querySelector('.repassword')
const rpInput = rpField.querySelector('input')

console.log(eInput.value == "" ? "yes" : "no")
console.log(pInput.value == "" ? "yes" : "no")
console.log(rpInput.value == "" ? "yes" : "no")

form.onsubmit = (e)  => {
    e.preventDefault()

    if(eInput.value == ""){
        eField.classList.add('shake', 'error')
    }

    if(pInput.value == "") {
        pField.classList.add('shake', 'error')
    }

    if(rpInput.value == "") {
        rpField.classList.add('shake', 'error')
    }
}