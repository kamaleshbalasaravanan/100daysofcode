const container = document.querySelector(".container")
const inputPart = document.querySelector(".input-part")
const infoTxt = document.querySelector(".info-txt")
const inputField = document.querySelector("input")
const locationBtn = document.querySelector("button")
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
    api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`
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
    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
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
        infoTxt.classList.remove("pending", "error")
        container.classList.add("active")
    }

}
