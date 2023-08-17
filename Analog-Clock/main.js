const hour = document.querySelector('#hour')
const minute = document.querySelector('#min')
const second = document.querySelector('#sec')

function displayTime(){
   let date = new Date()

   let currenthh = date.getHours()
   let currentmin = date.getMinutes()
   let currentsec = date.getSeconds()

   let hrotation = 30 *currenthh + currentmin/2
   let minrotation = 6*currentmin
   let secrotation = 6*currentsec
   console.log(hrotation, minrotation, secrotation)

   hour.style.transform = ` rotate(${hrotation}deg)`
   minute.style.transform = ` rotate(${minrotation}deg)`
   second.style.transform = ` rotate(${secrotation}deg)`


}

setInterval(displayTime, 1000)
displayTime()

