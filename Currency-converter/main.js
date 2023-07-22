const api =`https://v6.exchangerate-api.com/v6/apikey/latest/USD`
const fromDropDown = document.querySelector('#form-currency-select')
const toDropDown = document.querySelector('#to-currency-select')
//  console.log(fromDropDown, toDropDown)
console.log(currencies)

currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency
    option.text = currency
    fromDropDown.add(option)
    console.log(currency)

})

currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency
    option.text = currency
    toDropDown.add(option)
    console.log(currency)

})