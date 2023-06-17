const password = document.querySelector('#password')
const copytext = document.querySelector('.copy')
const btn = document.querySelector('#btn')

btn.addEventListener("click",genPassword)
copytext.addEventListener("click",copyText)

function genPassword(){
    console.log('password')
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let passwordlen = 8
    let passwordval = ""

    for(let i = 0; i<=passwordlen; i++){
        let randomnum = Math.floor(Math.random() * chars.length)
        passwordval += chars.substring(randomnum, randomnum+1)
    }

    password.value = passwordval
    // document.getElementById("password").value= password
    
}

function copyText(){
    console.log("textcopied")
    let copyval = document.getElementById("password")
    copyval.select()
    copyval.setSelectionRange(0,999)
    document.execCommand("copy")
}