// console.log('hi')
const searchBtn = document.querySelector('.search-btn')
// const url = "https://api.countrystatecity.in/v1/countries"
const userInp = document.querySelector('#user-inp')

searchBtn.addEventListener("click",()=>{
    let countryName = userInp.value
    // let countryName = "Pakistan"
    console.log(countryName)
    let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    // console.log(finalUrl)
    fetch(finalUrl)
    .then((response) => response.json())
    .then(data => {
        console.log(data[0])
        console.log(data[0].capital[0])
        console.log(data[0].continents[0])
        console.log(data[0].population)
        console.log(data[0].flags.svg)
        console.log(Object.keys(data[0].currencies)[0])
        console.log(data[0].currencies[Object.keys(data[0].currencies)].name)
        console.log(Object.values(data[0].languages).toString().split(",").join(", "))

        let country = data[0]

        result.innerHTML =`
        <img src=${country.flags.svg}>
        <h2 class="name">${country.name.common}</h2>
        <div class="details">
                <p> <b>Capital:</b> ${country.capital[0]} </p>
                <p> <b>Continent:</b> ${country.continents[0]} </p>
                <p> <b>Population:</b> ${country.population} </p>
                <p> <b>Currency:</b> ${Object.keys(data[0].currencies)[0]} - ${data[0].currencies[Object.keys(data[0].currencies)].name} </p>
                <p> <b>Comman Language:</b> ${Object.values(data[0].languages).toString().split(",").join(", ")} </p>
            </div>
        `
    })
    .catch(() =>{
        if(countryName.length == 0){
            result.innerHTML = `<h3 class="error">The Input Field Cannot be Empty</h3>`
        }
        else{
            result.innerHTML = `<h3 class="error">Please Enter the Valid Country Name</h3>`
        }
    })
})