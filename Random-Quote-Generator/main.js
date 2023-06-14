// console.log('hi')
const quotes = document.querySelector('.container')
const author = document.querySelector('.author')
const btn = document.querySelector('#btn')
const copied = document.querySelector('.copied')

const url = "https://api.quotable.io/random"

let getQuote = () =>{
    fetch(url)
    .then((data) => data.json())
    .then((msg) => {
        // console.log(msg)
        // console.log(msg.content)
        // console.log(msg.author)


        // setTimeout( () =>{
        //     quotes.innerHTML = msg.content
        //     author.innerHTML = `" ${msg.author} "`
        // },1000)
        
             quotes.innerHTML = msg.content
            author.innerHTML = `" ${msg.author} "`
            copied.addEventListener("click", () => copyText(msg.content))
    })

    // copied.addEventListener("click", () => copyColor(content, authorname)) 
  
    // console.log(content) 

}

function copyText(value){
    navigator.clipboard.writeText(value).then(() => {
        quotes.innerHTML = "#copied"
        quotes.style.fontSize = "40px"

        setTimeout(() => {
        quotes.innerHTML = value
        quotes.style.fontSize = "25px"
        },1000)
    })
    // console.log(value)

   
}

window.addEventListener("load",getQuote)
btn.addEventListener("click",getQuote)