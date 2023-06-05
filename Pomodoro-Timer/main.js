const timer = document.querySelector('.timer')
const remainder = document.querySelector('.remainder')
const startbtn = document.querySelector('#startbtn')
const pausebtn = document.querySelector('#pausebtn')
const restartbtn = document.querySelector('#restartbtn')
// const container = document.querySelector('.container')
let container = document.querySelector('.container')
let intervals;
let timeleft = 1500
// console.log('hi')

startbtn.addEventListener("click", startTimer)
pausebtn.addEventListener("click", stopTimer)
restartbtn.addEventListener("click", restartTimer)
function updateTimer(){
    let minutes = Math.floor(timeleft/60)
    let seconds = timeleft%60

    let newtime = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`
    console.log(newtime)
    timer.innerHTML = newtime
}


function startTimer(){

       
        console.log(container)
        container.style.border = "4px solid green"

        intervals = setInterval(()=>{
            timeleft--
            // console.log(timeleft--)
            updateTimer()

            if(timeleft === 0){
                // console.log(timeleft)
                clearInterval(intervals)
                remainder.textContent = `time is up`
                timeleft =1500
                updateTimer()
            }
        },1000)
    
}

function stopTimer(){
    clearInterval(intervals)
    container.style.border = "4px solid red"

}

function restartTimer(){
    container.style.border = "4px solid black"
    clearInterval(intervals)
    timeleft = 1500
    updateTimer()
}