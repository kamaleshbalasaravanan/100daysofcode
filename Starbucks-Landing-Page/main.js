// console.log('starbucks')
const menu = document.querySelector('.menuopen')
const close = document.querySelector('.menuclose')
// const bars = document.querySelector('#fa-bars')
const navbar = document.querySelector('.navbar')
// console.log(menu , navbar)

menu.onclick = () =>{
    // menu.classList.remove('menuopen')
    // menu.removeChild('menuopen')
    // menu.innerHTML
    // menu.classList.toggle('menuclose')
    navbar.classList.toggle('active')
}


window.onscroll = () =>  {
    navbar.classList.remove('active')
}
// menu.forEach(menu => {

// });