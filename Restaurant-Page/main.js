// console.log('hi')
const header = document.querySelector('header')
const navbar = document.querySelector('.navbar')
const menu = document.querySelector('#menu-bar')
console.log(navbar)
console.log(menu)
console.log(header)

// header.onscroll(()=>{
//     header.classList.toggle("active",window.screenY>0)
// })

// header.addEventListener("scroll", () => {
//     if(window.screenY > 0){
//         header.classList.add("active")
//     }
// })

window.addEventListener('scroll', () => {
    header.classList.toggle("active",window.scrollY>0)
    console.log('hi')
})

menu.onclick = () =>{
    navbar.classList.toggle('active')
}

window.onscroll = () =>{
    navbar.classList.remove('active')
}

