const firstContainer = document.querySelector('.firstContainer')
const secondContainer= document.querySelector('.secondContainer')
const inputField = document.querySelector('#input-field')
const locationBtn = document.querySelector('.locationBtn')
console.log(firstContainer, secondContainer)

let apikey = "18442d8235523485b0bddc1be2e737d3"
let api

inputField.addEventListener("keyup", (e) =>{
    // e.preventDefault()
    if(e.key == "Enter" && inputField.value != ""){
        // console.log('hi')
        requestApi(inputField.value)
    }
})


function requestApi(city){
    // api = `https://pro.openweathermap.org/data/2.5/forecast/climate?q=${city}&appid=${apikey}`
    // api = `https://api.openweathermap.org/data/2.5/forecast/daily?q=London&units=metric&cnt=7&appid=${apikey}`
    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`
    fetchData()
}

function fetchData(){
    fetch(api)
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            weatherDetails(data)
        })
}

function weatherDetails(info){
    if(info.cod == "404"){
        alert(`${inputField.value} isn't a valid city`)
        // alert("your input isn't a valid city")
    }

    else{
        const city = info.name
        const country = info.sys.country
        const {description, id} = info.weather[0]
        const {feels_like, humidity, pressure, temp_max, temp_min} = info.main
    }
}

// feels_like
// : 
// 31.19
// humidity
// : 
// 89
// pressure
// : 
// 1012
// temp
// : 
// 27.2
// temp_max
// : 
// 27.99
// temp_min
// : 
// 27.2