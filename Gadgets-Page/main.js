// console.log('hi')
const menu = document.querySelector("#menu")
// const menuBox = document.querySelector(".toggle")
const header = document.querySelector('header')
const navbar = document.querySelector(".navbar")
// console.log(menu, menuBox, navbar)
// menu.onlick = () =>{
//     // menu.classList.toggle()
//     navbar.classList.add("active")
// }

menu.addEventListener("click", ()=>{
    header.classList.toggle('close')
    navbar.classList.toggle('active')
})

window.addEventListener("scroll", ()=>{
    // menu.classList
    navbar.classList.remove('active')
})