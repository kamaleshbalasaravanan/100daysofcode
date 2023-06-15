// console.log('hi')


const smileicon = document.querySelector('.smile-icon')
const jokes = document.querySelector('.jokes')
const ans = document.querySelector('#ans')
const btn = document.querySelector('#btn')


let getJokes =  () =>{
    fetch('https://v2.jokeapi.dev/joke/Programming')
    .then((data) => data.json())  
    .then((content) => {
        jokes.innerHTML = `${content.setup}`
        if(content.delivery === 0){
            ans.innerHTML = "-"
        }
        else{
            ans.innerHTML = `${content.delivery}`
        }

    })

}
// console.log(content.setup, content.delivery))
btn.addEventListener("click", getJokes)
window.addEventListener("load", getJokes)
