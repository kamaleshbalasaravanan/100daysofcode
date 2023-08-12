const firstContainer = document.querySelector('.firstContainer')
const secondContainer= document.querySelector('.secondContainer')
const inputField = document.querySelector('#input-field')
const locationBtn = document.querySelector('.locationBtn')
console.log(firstContainer, secondContainer)

let apikey = "18442d8235523485b0bddc1be2e737d3"
let api

inputField.addEventListener("keyup", (e) =>{
    if(e.key == "Enter" && inputField.value != ""){
        // console.log('hi')
        requestApi(inputField.value)
    }
})


function requestApi(city){
    api = `https://pro.openweathermap.org/data/2.5/forecast/climate?q=${city}&appid=${apikey}`
    fetchData()
}

function fetchData(){
    fetch(api)
        .then((resp) => resp.json())
        .then((data) => console.log(data))
}