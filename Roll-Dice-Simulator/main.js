const btn = document.querySelector('#btn')
const image1 = document.querySelector('#die-1')
const image2 = document.querySelector('#die-2')
const total = document.querySelector('#total')


// console.log(Math.floor(Math.random()*6) +" "+Math.random())
// console.log(Math.random()*6)
// console.log(Math.random())

let images = ["dice-01.svg",
"dice-02.svg",
"dice-03.svg",
"dice-04.svg",
"dice-05.svg", 
"dice-06.svg"]

const dice = document.querySelectorAll('img')
console.log(dice)

btn.addEventListener('click', roll)

function roll(){
    // console.log('hi')
    dice.forEach(function(die){
        die.classList.add("shake")
    })

    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake")
        // let dieOneValue = Math.floor(Math.random()*6)
    })

        let dieOneValue = Math.floor(Math.random()*6)
        let dieTwoValue = Math.floor(Math.random()*6)

        console.log(dieOneValue,dieTwoValue)

        image1.setAttribute("src",`images/${images[dieOneValue]}`)
        image2.setAttribute("src",`images/${images[dieTwoValue]}`)
        // document.querySelector('#die-1').setAttribute("src", `images/${images[dieOneValue]}`)
        // document.querySelector('#die-2').setAttribute("src", `images/${images[dieTwoValue]}`)

        total.textContent = `your roll is: ${(dieOneValue+1)+(dieTwoValue+1)}`


    },
    1000 )
}
