// console.log('hi')
const carousel = document.querySelector('.carousel')

let isdragStart = false
let startX, startScrollLeft
const dragStart = (e) => {
    // console.log("mousedown")
    isdragStart = true
    carousel.classList.add('dragging')
    startX = e.pageX
    startScrollLeft = carousel.scrollLeft
    console.log(startX, startScrollLeft)
}

const dragStop = (e) => {
    isdragStart = false
    carousel.classList.remove('dragging')
    // console.log(e.pageX)
}

const dragging = (e) =>{
    // console.log("dragging"+e.pageX)
    if(!isdragStart) return
    // console.log("dragStart")
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX)
}


carousel.addEventListener("mousedown", dragStart)
carousel.addEventListener("mousemove", dragging)
document.addEventListener("mouseup", dragStop)