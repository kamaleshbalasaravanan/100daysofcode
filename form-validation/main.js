// console.log('hi)

const form = document.querySelector("form")
const eField = form.querySelector('.email')
const eInput = eField.querySelector('input')
const pField = form.querySelector('.password')
const pInput = eField.querySelector('input') 

form.onsubmit = (e) => {
    // e.preventDefault ()

    if(eInput.value == ""){
        eField.classList.add('shake','error')
    }

    if(pInput.value == ""){
        pField.classList.add('shake','error')
    }

    setTimeout(() => {
        eField.classList.remove('shake')
        pField.classList.remove('shake')

    },500)


    eInput.onkeyup = () => {
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
        if(!eInput.value.match(pattern)){
            eField.classList.add('error')

            // let errorTxt = eField.querySelector(".error-txt");
            // (eInput.value != "") ? errorTxt.innerHTML = "Enter a valid email" : errorTxt.innerHTML = "Email can't be blank"
        }
        else{
            eField.classList.remove('error')
        }
    }

    pInput.onkeyup = () => {
        if(pInput.value == ""){
            pField.classList.add('error')
        }
        else{
            pField.classList.remove('error')
        }
    }
}