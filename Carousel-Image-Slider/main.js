const icons = document.querySelectorAll('.carousel i')
// console.log(icons)
 
icons.forEach((icon) => {
    icon.addEventListener("click", () =>{
        const offset = icon.id == "right" ? 1 : -1
        // console.log(offset)
        // const slides = icon.closest("[data-carousel").querySelector("[data-slides")
        const slides = icon.closest(".carousel").querySelector("ul")
        // console.log(slides)
        const activeslide = slides.querySelector("[data-active")
        // console.log(activeslide)
        let newIndex = [...slides.children].indexOf(activeslide) + offset
        // console.log(newIndex)
        if(newIndex < 0){
            newIndex = slides.children.length - 1
        }
        if(newIndex >= slides.children.length){
            newIndex = 0
        }

        slides.children[newIndex].dataset.active = true
        delete activeslide.dataset.active
    }) 
})