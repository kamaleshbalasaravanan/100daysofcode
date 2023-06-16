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


    if((!eField.classList.contains('error')) && (!pField.classList.contains('error')) && (!rpField.classList.contains('error'))  ){
        location.href = form.getAttribute("action")
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
        rpField.classList.remove('success')

        let errortxt = rpField.querySelector(".error-txt");
        errortxt.style.color = "#dc354";
        (pInput.value !== rpInput.value) ? errortxt.innerHTML = "Password doesn't match1" :  errortxt.innerHTML = "Password can't be blank"
        
    }
    // if(pInput.value === rpInput.value){
        // if(pInput.value === rpInput.value){
        //     rpField.classList.add('error')
        //     let errortxt = rpField.querySelector(".error-txt");
        //     let errorvalue = pField.querySelector(".error-txt")
        //     errortxt.innerHTML = "Password matched"
        //     errortxt.style.color = "green"
        //     pField.classList.add('success')
        //     rpField.classList.add('success')
        // }
        // let error = rpField.classList.add('error')
        // error.style.borderColor = "none"
    //     let errortxt = rpField.querySelector(".error-txt");
    //     errortxt.innerHTML = "Password matched"
    // }

    else{
        rpField.classList.remove('error')
        // pField.classList.remove('error')
        rpField.classList.add('success')
        // pField.classList.add('success')
        let errortxt = rpField.querySelector(".error-txt");
        // let pwerrortxt = pField.querySelector(".error-txt");

        // errortxt.style.color = "green";
        // let rpwerror = pField.querySelector(".error-txt")
        // (pInput.value == rpInput.value) ? errortxt.innerHTML = "Password match" : errortxt.innerHTML = "Password can't be blank";
        // (pInput.value == rpInput.value) ? pwerrortxt.innerHTML = "Password match" : pwerrortxt.innerHTML = "Password can't be blank";

        // (pInput.value == rpInput.value) ? console.log("Password match") :  console.log( "Password can't be blank")
        if(pInput.value == rpInput.value){
            errortxt.innerHTML = "Password match"
            // errortxt.style.color = "green";
        }
        else{
            errortxt.innerHTML = "Password dosn't match"
            errortxt.style.color = "red";
        }
        
    }
}