// const api =`https://v6.exchangerate-api.com/v6/apikey/latest/USD`
const api =`https://v6.exchangerate-api.com/v6/76de6c86223b7343827ef161/latest/USD`
const fromDropDown = document.querySelector('#form-currency-select')
const toDropDown = document.querySelector('#to-currency-select')
const result = document.querySelector('#result')
//  console.log(fromDropDown, toDropDown)
console.log(currencies)

currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency
    option.text = currency
    fromDropDown.add(option)
    // console.log(currency)

})

currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency
    option.text = currency
    toDropDown.add(option)
    // console.log(currency)
})

fromDropDown.value = "USD"
toDropDown.value = "INR"

let convertCurrency = () =>{
    const amount = document.querySelector('#amount').value
    const fromCurrency = fromDropDown.value
    const toCurrency = toDropDown.value
    console.log(amount)

    if(amount.length != 0){
        // alert('okay')
        fetch(api)
        .then((resp) => resp.json())
        .then((data) => {
        // console.log()
        const fromExchangeRate = data.conversion_rates[fromCurrency]
        const toExchangeRate = data.conversion_rates[toCurrency]
        // console.log(fromExchangeRate, toExchangeRate)
        let convertedAmount = (amount / fromExchangeRate) * toExchangeRate
        result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`
        })
    }
    else{
        // alert('please fill in the amount')
        console.log('please fill in the amount')

    }
}

document.querySelector('#convertbtn').addEventListener("click",convertCurrency)
window.addEventListener("load",convertCurrency)