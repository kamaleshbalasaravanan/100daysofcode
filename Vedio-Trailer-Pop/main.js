// console.log('hi')
const btn = document.querySelector('.btn')
const close = document.querySelector('.close-icon')
const trailercontent = document.querySelector('.trailer-content')
const video = document.querySelectorAll('vedio')

btn.addEventListener("click", ()=>{
    trailercontent.classList.remove("active")
})

close.addEventListener("click" , ()=>{
    trailercontent.classList.add("active")
    video.pause()
    video.currentTime = 0
})