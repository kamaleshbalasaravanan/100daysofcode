// console.log('hi')
const currentdate = document.querySelector('.currentdate')
const daysTag = document.querySelector('.days')
// console.log(currentdate)
const prevnextIcon = document.querySelectorAll('.icons i')


let date = new Date
let currentyear = date.getFullYear()
let currentmonth = date.getMonth()
console.log(currentyear, currentmonth)

let months = ['January','February','March','April','May','June','August','September','October','November','December']

let renderCalender = () => {

    let firstdayofMonth = new Date(currentyear, currentmonth,1).getDay()
    let lastDateofMonth = new Date(currentyear, currentmonth+1,0).getDate()
    let lastDateofLastMonth = new Date(currentyear, currentmonth,0).getDate()
    // let firstdarofNextMonth = new Date(currentyear, currentmonth+1, 1).getDay()
    let lastdayofMonth = new Date(currentyear, currentmonth, lastDateofMonth).getDay()
    console.log("firstdayofMonth"+firstdayofMonth)
    console.log("lastDateofMonth"+lastDateofMonth)
    console.log("lastDateofLastMonth"+lastDateofLastMonth)
    console.log("lastdayofMonth"+lastdayofMonth)

    let liTag =""

    for(let i=firstdayofMonth; i>0; i--){
        // console.log(i)
        liTag += `<li class="inactive">${(lastDateofLastMonth+1)-i}</li>`
    }

    for(let i=1; i<=lastDateofMonth; i++){
        // console.log(i)
        let isToday = i === date.getDate() && currentmonth === date.getMonth() 
        && currentyear === date.getFullYear() ? "active"  : ""

        liTag += `<li class="${isToday}">${i}</li>`
    }

    for(let i = lastdayofMonth; i<6; i++){
        liTag += `<li class="inactive">${i-lastdayofMonth  + 1}</li>`
    }
    currentdate.innerHTML = `${months[currentmonth]} ${currentyear}`
    daysTag.innerHTML = liTag
}

prevnextIcon.forEach(icon =>{
    icon.addEventListener("click",()=>{
        // console.log(icon)
        currentmonth = icon.id == "prev" ? currentmonth-1 : currentmonth+1
        renderCalender()
    })
})

renderCalender()