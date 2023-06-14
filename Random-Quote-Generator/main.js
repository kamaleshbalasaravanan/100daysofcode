// console.log('hi')
const quotes = document.querySelector('.container')
const author = document.querySelector('.author')
const btn = document.querySelector('#btn')

const url = "https://api.quotable.io/random"

let getQuote = () =>{
    fetch(url)
    .then((data) => data.json())
    .then((msg) => {
        console.log(msg)
        console.log(msg.content)
        console.log(msg.author)


        // setTimeout( () =>{
        //     quotes.innerHTML = msg.content
        //     author.innerHTML = `" ${msg.author} "`
        // },1000)

             quotes.innerHTML = msg.content
            author.innerHTML = `" ${msg.author} "`
      

    })
}

window.addEventListener("load",getQuote)
btn.addEventListener("click",getQuote)