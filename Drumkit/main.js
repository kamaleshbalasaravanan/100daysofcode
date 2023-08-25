const nodofDrumButtons = document.querySelectorAll(".drum").length
const drumButtons = document.querySelectorAll(".drum")
console.log(drumButtons)

// for(let i=0; i<nodofDrumButtons; i++){
//        const val = document.querySelectorAll(".drum")[i].innerHTML
//     console.log(val)


//         document.querySelectorAll(".drum")[i].addEventListener("click", (e)=> {
//             let buttonInnerHtml = this.innerHTML
//             console.log(this.innerHTML)
//             console.log(buttonInnerHtml)
//             // console.log('hi')
//             makeSound(buttonInnerHtml)
//             buttonAnimation(buttonInnerHtml)
//         })

//         // drumButtons.forEach((drum) => {
//         //     drum.addEventListener("click", () => {
//         //         console.log(this)
//         //     })
//         // })
// }


for (let i = 0; i < drumButtons.length; i++) {
    const button = drumButtons[i]
    const buttonInnerHtml = button.innerHTML
    console.log(buttonInnerHtml)

    button.addEventListener("click", () => {
        makeSound(buttonInnerHtml)
        buttonAnimation(buttonInnerHtml)
    })
}

document.addEventListener("keypress", (e) => {
    makeSound(e.key)
    buttonAnimation(e.key)
})


function makeSound(key) {

    // console.log('makesound')

    switch (key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play()
            break;

        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play()
            break;

        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play()
            break;


        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play()
            break;

        case "j":
            let sanre = new Audio("sounds/snare.mp3")
            sanre.play()
            break;

        case "k":
            let crash = new Audio("sounds/crash.mp3")
            crash.play()
            break;

        case "l":
            let kick = new Audio("sounds/kick-bass.mp3")
            kick.play()
            break;

        default:
            console.log(key)
    }
}


function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey)
    activeButton.classList.add("pressed")

    setTimeout(() => {
        activeButton.classList.remove("pressed")
    }, 100)
}