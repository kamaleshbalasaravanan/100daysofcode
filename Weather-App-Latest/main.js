const firstContainer = document.querySelector('.firstContainer')
const secondContainer = document.querySelector('.secondContainer')
const weatherIcon = firstContainer.querySelector('.weatherpart img')
const inputField = document.querySelector('#input-field')
const locationBtn = document.querySelector('#locationBtn')

console.log(firstContainer, secondContainer)

let apikey = "18442d8235523485b0bddc1be2e737d3"
let api


// let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
// let date = new Date()
// let currentyear = date.getFullYear()
// let currentmonth = date.getMonth()
// console.log(currentyear, currentmonth)

const days = ['Sunday', 'Monday' ,'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC',]

setInterval(() =>{
    const time = new Date()
    const month = time.getMonth()
    const date = time.getDate()
    const day = time.getDay()
    const hour = time.getHours()
    const hoursIn12HrFormat = hour >= 13 ? hour%12 :hour
    const minutes = "0"+time.getMinutes()
    const ampm = hour >=12 ?'PM' :'AM'

    document.querySelector("#time").innerHTML = hoursIn12HrFormat + ":" +minutes.substr(-2) + ' '+`<span id="ampm">${ampm}</span></h2>`

    document.querySelector("#date").innerHTML = days[day] +', '+date+' '+months[month]
},1000)


// const date = new Date()
// console.log(date.getTime() +", "+ date.getTimezoneOffset() * 60000 )
// utc = date.getTime() + date.getTimezoneOffset() * 60000 
// console.log(utc)

inputField.addEventListener("keyup", (e) => {
    // e.preventDefault()
    if (e.key == "Enter" && inputField.value != "") {
        // console.log('hi')
        requestApi(inputField.value)
    }
})

// inputField.on('keyup input', (e) => {
//     if (e.key == "Enter" && inputField.value != "") {
//                 // console.log('hi')
//                 requestApi(inputField.value)
//             }
// })

function callWeather() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onSuccess, onError)
    }
    else {
        alert("Your browser not support geolocation api")
    }
}

function onSuccess(position) {
    console.log(position)
    // console.log(position.coords)
    const { longitude, latitude } = position.coords
    api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apikey}`
    fetchData()
    // console.log(latitude, longitude)
}

function onError(error) {
    alert(error)
}

function requestApi(city) {
    // api = `https://pro.openweathermap.org/data/2.5/forecast/climate?q=${city}&appid=${apikey}`
    // api = `https://api.openweathermap.org/data/2.5/forecast/daily?q=London&units=metric&cnt=7&appid=${apikey}`
    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`
    fetchData()
}

function fetchData() {
    fetch(api)
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            weatherDetails(data)
        })
}

function weatherDetails(info) {
    if (info.cod == "404") {
        alert(`${inputField.value} isn't a valid city`)
        // alert("your input isn't a valid city")
    }

    else {
        const city = info.name
        const country = info.sys.country
        const { description, id } = info.weather[0]
        const { feels_like, humidity, pressure, temp, temp_max, temp_min } = info.main
        const { speed } = info.wind
        const { timezone } = info
        let { sunrise, sunset } = info.sys
        let riseDate = new Date(sunrise * 1000)
        let riseMin = "0"+riseDate.getMinutes()
        let setDate = new Date(sunset * 1000)
        let setMin = "0"+setDate.getMinutes()
        let riseDateFormat = riseDate.getHours() >= 13? riseDate.getHours()%12 :riseDate.getHours()
        let setDateFormat = setDate.getHours() >= 13 ? setDate.getHours()%12 :setDate.getHours()
        // console.log(sunrise, sunset)
        // utc = localTime + (sunrise * 60000)
        // const utc = date.getTime() + (date.getTimezoneOffset() * 60)

        // const utc = date.getTime() + sunrise
        // console.log(utc)
        // const currentLocalTime = utc + 1000 * timezone
        // const selectDate = new Date(currentLocalTime)
        // console.log(selectDate)

        if (id == 800) {
            //    document.querySelectorAll(".weather-part img").
            weatherIcon.src = "icons/clear.svg"
        }
        else if (id >= 200 && id <= 232) {
            weatherIcon.src = "icons/strom.svg"
        }
        else if (id >= 600 && id <= 622) {
            weatherIcon.src = "icons/snow.svg"
        }
        else if (id >= 701 && id <= 781) {
            weatherIcon.src = "icons/haze.svg"
        }
        else if (id >= 801 && id <= 804) {
            weatherIcon.src = "icons/cloud.svg"
        }
        else if (id >= 300 && id <= 321) {
            weatherIcon.src = "icons/rain.svg"
        }

        firstContainer.querySelector('.location span').innerHTML = `${city}, ${country}`
        firstContainer.querySelector('.temp .numb').innerHTML = Math.floor(temp)
        firstContainer.querySelector('.current-weather').innerHTML = description

        secondContainer.querySelector('.humidity').innerHTML = Math.floor(humidity) + "%"
        secondContainer.querySelector('.feels-like').innerHTML = `${Math.floor(feels_like)}` + `<span class="deg">&#176;</span>C`
        secondContainer.querySelector('.pressure').innerHTML = Math.floor(pressure) + " hPa"
        secondContainer.querySelector('.wind-speed').innerHTML = Math.floor(speed) + " kph"
        secondContainer.querySelector('.min-temp').innerHTML ="Min- "+ Math.floor(temp_min) + `<span class="deg">&#176;</span>C`
        secondContainer.querySelector('.max-temp').innerHTML ="Max- "+ Math.floor(temp_max) + `<span class="deg">&#176;</span>C`

        secondContainer.querySelector('#sunrise').innerHTML = `${riseDate.getHours()}`+": "+ riseMin.substr(-2)
        secondContainer.querySelector('#sunset').innerHTML = setDateFormat+": "+ setMin.substr(-2)

    }
}

locationBtn.addEventListener("click", callWeather)
window.addEventListener("load",callWeather)
