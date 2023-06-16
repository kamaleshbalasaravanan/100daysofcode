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

form.onsubmit = (e) => {
    e.preventDefault()

    if (eInput.value == "") {
        eField.classList.add('shake', 'error')
    }
    else {
        checkmail()
    }

    if (pInput.value == "") {
        pField.classList.add('shake', 'error')
    }
    else {
        createPassw()
    }

    if (rpInput.value == "") {
        rpField.classList.add('shake', 'error')
    }
    else{
        checkpassw()
    }

    setTimeout(() => {
        eField.classList.remove('shake')
        pField.classList.remove('shake')
        rpField.classList.remove('shake')

    }, 500)

    eInput.onkeyup = () => {
        checkmail()
    }

    pInput.onkeyup = () => {
        createPassw()
    }
    rpInput.onkeyup = () => {
        checkpassw()
    }
}

function checkmail() {
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

    if (!eInput.value.match(pattern)) {
        eField.classList.add('error')

        let errortxt = eField.querySelector(".error-txt");

        (eInput.value != "") ? errortxt.innerHTML = " Enter a valid email address" : errortxt.innerHTML = "Email can't be blank"
    }
    else {
        eField.classList.remove('error')
    }
}

function createPassw() {
    // const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    const passPattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/

    if (!pInput.value.match(passPattern)) {
        pField.classList.add('error')

        let errortxt = pField.querySelector(".error-txt");

        (pInput.value != "") ? errortxt.innerHTML = "Please enter alteast 8 character with number,symbol,small and capital letter." : errortxt.innerHTML = "Password can't be blank"

    }
    else {
        pField.classList.remove('error')
    }
}

function checkpassw() {
    if(pInput.value !== rpInput.value || rpInput === ""){
        rpField.classList.add('error')
    }
    else{
        if(pInput.value === rpInput.value){
            rpField.classList.add('error')
            let errortxt = rpField.querySelector(".error-txt");
            let errorvalue = pField.querySelector(".error-txt")
            errortxt.innerHTML = "Password matched"
            pField.classList.a
        }

    }
}