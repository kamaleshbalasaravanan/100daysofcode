const celsius = document.querySelector('#celsiusbox')
const fahrenheit = document.querySelector('#fahrenheitbox')
const kelvin = document.querySelector('#kelvinbox')

// const body = document.querySelector('body')
// body.classList.remove('border')
// console.log(body)

let resultTime

function calculateTemp(e) {
    // console.log(e.target.value)
    const currentData = + e.target.value
    console.log(currentData)

    switch (e.target.name) {
        case "celsius":
            fahrenheit.value = (currentData * 1.8 + 32).toFixed(2)
            kelvin.value = (currentData + 273.32).toFixed(2)
            break

        case "fahrenheit":
            celsius.value = ((currentData - 32) / 1.8).toFixed(2)
            kelvin.value = ((currentData - 32) / 1.8 + 273.32).toFixed(2)
            break

        case "kelvin":
            celsius.value = (currentData - 273.32).toFixed(2)
            fahrenheit.value = ((currentData - 273.32) * 1.8 + 32).toFixed(2)
            break

        default:
            break;
    }
    clearTimeout(resultTime)
    resultTime = setTimeout(()=>{
        celsius.value = ""
        fahrenheit.value = ""
        kelvin.value=""
    },10000)

}
