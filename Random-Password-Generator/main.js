const password = document.querySelector('#password')
const copytext = document.querySelector('.copy')
const btn = document.querySelector('#btn')

btn.addEventListener("click",genPassword)

function genPassword(){
    console.log('password')
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let passwordlen = 8
    let password = ""

    for(let i = 0; i<=passwordlen; i++){
        let randomnum = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomnum, randomnum+1)
    }

    // password.value = password
    document.getElementById("password").value= password
    
}