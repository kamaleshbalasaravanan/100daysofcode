const startBtn =  document.querySelector('#startBtn')
const stopBtn =  document.querySelector('#stopBtn')
const restartBtn =  document.querySelector('#restartBtn')
const timer = document.querySelector('.timer')
const heading = document.querySelector('.heading')

let intervals
let startTime = 0
let elapsedTime = 0

console.log('hi')

startBtn.addEventListener('click', startTimer)
stopBtn.addEventListener('click', stopTimer)
restartBtn.addEventListener('click',restartTimer)


function formatTime(elapsedTime){

    const millisec = Math.floor((elapsedTime % 1000) / 10)
    const secs = Math.floor((elapsedTime % (1000 * 60)) / 1000)
    const mins = Math.floor((elapsedTime % (1000 * 60 * 60)) /(1000 * 60))
    const hrs = Math.floor((elapsedTime / (1000 * 60 * 60)))

    return(
        (hrs ? (hrs > 9 ? hrs : "0"+hrs) : "00") +
        ":" +
        (mins ? (mins > 9 ? mins : "0"+mins) : "00")+
        ":"+
        (secs ? (secs > 9 ? secs : "0"+secs) : "00")+
        ":"+
        (millisec ? (millisec > 9 ? millisec : "0"+millisec) : "00")

    )

    console.log(hrs)

}

function startTimer(){
    // console.log('start')
    startTime = Date.now() - elapsedTime
    heading.style.color = "rgb(92, 185, 92)"
    intervals = setInterval(() =>{
        elapsedTime = Date.now() - startTime
        console.log(elapsedTime)
        timer.textContent = `${formatTime(elapsedTime)}`
    },10)

    startBtn.disabled = true
    stopBtn.disabled = false
}


function stopTimer(){
    console.log('stop')
    clearInterval(intervals)
    heading.style.color = "red"

    startBtn.disabled = false
    stopBtn.disabled = true

}

function restartTimer(){
    console.log('restart')
    clearInterval(intervals)
    startTime = 0
    elapsedTime = 0

    timer.textContent = "00:00:00"
    heading.style.color = "black"

    startBtn.disabled = false
    stopBtn.disabled = true

}



