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
    let lastDateofMonth = new Date(currentyear, currentmonth+1,0).getDate()
    console.log(lastDateofMonth)

    let liTag =""
    for(let i=1; i<=lastDateofMonth; i++){
        // console.log(i)
        liTag += `<li>${i}</li>`
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