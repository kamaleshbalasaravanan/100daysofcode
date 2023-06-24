// console.log('hi')
const currentdate = document.querySelector('.currentdate')
// console.log(currentdate)


let date = new Date
let currentyear = date.getFullYear()
let currentmonth = date.getMonth()

let months = ['January','February','March','April','May','June','August','September','October','November','December']

let renderCalender = () => {
    currentdate.innerHTML = `${months[currentmonth]} ${currentyear}`
}

renderCalender()