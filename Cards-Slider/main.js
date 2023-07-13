// console.log('hi')
const carousel = document.querySelector('.carousel')
const icons = document.querySelectorAll('.wrapper i')
const firstCardWidth = carousel.querySelector('.card').offsetWidth
// console.log(firstCardWidth)

let isdragStart = false
let startX, startScrollLeft


const showHiddenIcons = () => {
    let scrollingWidth = carousel.scrollWidth - carousel.clientWidth
    icons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block"
    icons[1].style.display = carousel.scrollLeft == scrollingWidth ? "none" : "block"
}

icons.forEach((icon) => {
    icon.addEventListener("click", () => {
        // console.log(icon.id)
        console.log(carousel.scrollWidth)
        console.log(carousel.clientWidth)
        console.log(carousel.scrollLeft)
        carousel.scrollLeft += icon.id == "left" ? -firstCardWidth : firstCardWidth
        setTimeout(() => showHiddenIcons(), 60)
    })
})


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

const dragging = (e) => {
    // console.log("dragging"+e.pageX)
    if (!isdragStart) return
    // console.log("dragStart")
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX)
    showHiddenIcons()
}


carousel.addEventListener("mousedown", dragStart)
carousel.addEventListener("mousemove", dragging)
document.addEventListener("mouseup", dragStop)