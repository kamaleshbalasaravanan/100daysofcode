// console.log('hi)

const form = document.querySelector("form")
const eField = form.querySelector('.email')
const eInput = eField.querySelector('input')
const pField = form.querySelector('.password')
const pInput = pField.querySelector('input') 

form.onsubmit = (e) => {
    // e.preventDefault ()

    if(eInput.value == ""){
        eField.classList.add('shake','error')
    }
    else{
        checkmail()
    }

    if(pInput.value == ""){
        pField.classList.add('shake','error')
    }

    setTimeout(() => {
        eField.classList.remove('shake')
        pField.classList.remove('shake')

    },500)


    eInput.onkeyup = () => {
        checkmail()
    }

    pInput.onkeyup = () => {
        if(pInput.value == ""){
            pField.classList.add('error')
        }
        else{
            pField.classList.remove('error')
        }
    }

    function checkmail(){
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
        if(!eInput.value.match(pattern)){
            eField.classList.add('error')

            let errortxt = document.querySelector(".error-txt");

            (eInput.value != "") ? errortxt.innerHTML = " Enter a valid email address" : errortxt.innerHTML = "Email can't be blank"
        }
        else{
            eField.classList.remove('error')
        }
    }


    if(!eField.classList.contains("error") && (!pField.classList.contains("error"))){
        // window.location.href = "#"
        console.log("Form submitted successfully")
    }
}