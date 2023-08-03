const container = document.querySelector(".container")
const inputPart = document.querySelector(".input-part")
const infoTxt = document.querySelector(".info-txt")
const inputField = document.querySelector("input")
const locationBtn = document.querySelector("button")
const weatherIcon = document.querySelector(".weather-part img")
console.log(weatherIcon)
let apikey = "18442d8235523485b0bddc1be2e737d3"
let api

inputField.addEventListener("keyup", (e) => {
    if (e.key == "Enter" && inputField.value != "") {
        // console.log("hi")
        requestApi(inputField.value)
    }
})

locationBtn.addEventListener("click",()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(onSuccess, onError)
    }
    else{
        alert("Your browser not support geolocation api")
    }
})

function onSuccess(position){
    console.log(position)
    // console.log(position.coords)
    const {longitude, latitude} = position.coords
    api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apikey}`
    fetchData()
    // console.log(latitude, longitude)
}

function onError(error){
    console.log(error)
    infoTxt.innerHTML = error.message
    infoTxt.classList.add("error")
}

function requestApi(city){
    // console.log(city)
    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`
    fetchData()

}

function fetchData(){
    infoTxt.innerHTML = "Getting Weather Details"
    infoTxt.classList.add("pending")
    fetch(api)
    .then((resp) => resp.json())
    .then((data) => weatherDetails(data))
}

function weatherDetails(info){
    console.log(info)
    // console.log(info.main)
    // const {feels_like, pressure} = info.main
    // console.log(feels_like, pressure)

    if(info.cod == "404"){
        infoTxt.innerHTML = `${inputField.value} isn't a valid city `
        infoTxt.classList.replace("pending", "error")
    }
    else{

        const city = info.name
        const country = info.sys.country
        const {description, id} = info.weather[0]
        const {feels_like, humidity, temp} = info.main

        if(id == 800){
           document.querySelectorAll(".weather-part img").Sr
        }

        container.querySelector(".temp .numb").innerHTML = Math.floor(temp)
        container.querySelector(".weather").innerHTML = description
        container.querySelector(".location span").innerHTML = `${city}, ${country}`
        container.querySelector(".temp .numb-2").innerHTML = Math.floor(feels_like)
        container.querySelector(".humidity span").innerHTML = `${humidity}%`




        console.log(city,country,description,id,feels_like,humidity,temp)
        infoTxt.classList.remove("pending", "error")
        container.classList.add("active")
    }

}
