const carousel = document.querySelector(".carousel")
const firstImg = carousel.querySelectorAll("img")[0]
const icons = document.querySelectorAll('.wrapper i')
console.log(firstImg)

let isdragStart = false
let prevPageX, prevScrollLeft
// console.log(carousel.scrollWidth, carousel.clientWidth)
// console.log(scrollWidth)


const showHiddenIcons = () => {
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth
    icons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block"
    icons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block"

}

icons.forEach((icon) => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 10
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth
        setTimeout(() => showHiddenIcons(), 60)
    })
})


const dragStart = (e) => {
    isdragStart = true
    prevPageX = e.pageX
    prevScrollLeft = carousel.scrollLeft
    console.log(prevPageX, prevScrollLeft)
}

const dragging = (e) =>{
    // console.log(e.pageX)
    if(!isdragStart) return
    e.preventDefault()
    let positionDiff = e.pageX - prevPageX
    // carousel.scrollLeft = e.pageX
    carousel.classList.add("dragging")
    carousel.scrollLeft = prevScrollLeft - positionDiff
    showHiddenIcons()

}

const dragStop = () =>{
    isdragStart = false
    carousel.classList.remove("dragging")
}

carousel.addEventListener("mousedown",dragStart)
carousel.addEventListener("mousemove", dragging)
carousel.addEventListener("mouseup",dragStop)
carousel.addEventListener("mouseleave",dragStop)

