let currentnum = ""
let prevnum = ""
let operator = ""

let previousData = []
let i = 0

const currentDisplayNumber = document.querySelector(".currentnum")
const previousDisplayNumber = document.querySelector(".prevnum")

window.addEventListener("keydown", handleKeyPress)

const equal = document.querySelector(".equalbox")
const deletebtn = document.querySelector(".delete")
const decimal = document.querySelector(".decimal")
const clear = document.querySelector(".clear")

const numberBtns = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')

const resultbox = document.querySelector(".result-box")
const result = document.querySelector(".result")

equal.addEventListener("click", () => {
    if (currentnum != "" && prevnum != "") {
        calculate()
    }
})
clear.addEventListener("click", clearCalculator)
decimal.addEventListener("click", addDecimal)
deletebtn.addEventListener("click", handleDelete)

numberBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        // e.preventDefault()
        handleNumber(e.target.value)
        // console.log(e.target.value)
    })
})

function handleNumber(number) {
    // console.log(number)

    if (currentnum.length <= 11) {
        currentnum += number
        currentDisplayNumber.textContent = currentnum
    }
}

operators.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        handleOperator(e.target.value)
    })
})

function handleOperator(op) {

    if (prevnum !== "" && currentnum !== "" && operator === "") {
        prevnum = ""
        currentDisplayNumber.textContent = currentnum
    }

    if (prevnum === "") {
        prevnum = currentnum
        checkOperator(op)
    }
    else if (currentnum === "") {
        checkOperator(op)
    }
    else {
        calculate()
        operator = op
        currentDisplayNumber.textContent = "0"
        previousDisplayNumber.textContent = prevnum + " " + operator
    }
}

function checkOperator(text) {
    operator = text
    previousDisplayNumber.textContent = prevnum + " " + operator
    currentDisplayNumber.textContent = "0"
    currentnum = ""
}

function calculate() {
    prevnum = Number(prevnum)
    currentnum = Number(currentnum)

    if (operator === "+") {
        prevnum += currentnum
    }
    else if (operator === "-") {
        prevnum -= currentnum
    }

    else if (operator === "x") {
        prevnum *= currentnum
    }

    else if (operator === "/") {
        if (currentnum <= 0) {
            prevnum = "Error"
            displayResults()
            return
        }

        prevnum /= currentnum
    }

    prevnum = roundNum(prevnum)
    prevnum = prevnum.toString()
    displayResults()
}


function roundNum(num) {
    return Math.round(num * 100000) / 100000
}


function displayResults() {


    if (prevnum.length <= 11) {
        currentDisplayNumber.textContent = prevnum
    }
    else {
        currentDisplayNumber.textContent = prevnum.slice(0, 11) + "..."
    }

    previousDisplayNumber.textContent = ""
    operator = ""
    currentnum = ""
}

function clearCalculator() {
    if(prevnum !== "" ){
        resultbox.style.display = "flex"
        storeResults()
    }
    currentnum = ""
    prevnum = ""
    currentDisplayNumber.textContent = "0"
    previousDisplayNumber.textContent = ""

}

function addDecimal() {
    if (!currentnum.includes(".")) {
        currentnum += "."
        currentDisplayNumber.textContent = currentnum
    }
}


function handleDelete() {

    if (currentnum !== "" && prevnum !== "Error") {
        currentnum = currentnum.slice(0, -1)
        currentDisplayNumber.textContent = currentnum

        if (currentnum === "") {
            currentDisplayNumber.textContent = "0"
        }
    }

    if (currentnum === "" && prevnum !== "" && operator === "") {


        if (prev === "Error") {
            prevnum = ""
            currentDisplayNumber.textContent = "0"
        }

        prevnum = prevnum.slice(0, -1)
        currentDisplayNumber.textContent = prevnum
    }

    if (prevnum == "Error") {
        prevnum = ""
        // currentnum = 0
        currentDisplayNumber.textContent = "0"
    }
}



// function handleKeyPress(e) {
//     e.preventDefault()
//     console.log(e.key)
// }

function handleKeyPress(e) {
    e.preventDefault()
    if (e.key >= 0 && e.key <= 9) {
        handleNumber(e.key)
    }

    if (e.key === "Enter" || e.key === "=" && currentnum != "" && prevnum != "") {
        calculate()
    }

    if (e.key === "+" || e.key === "-" || e.key === "/") {
        handleOperator(e.key)
    }

    if (e.key === "*") {
        handleOperator("x")
    }

    if (e.key === ".") {
        addDecimal()
    }

    if (e.key === "Backspace") {
        handleDelete()
    }
    console.log(e.key)
}



function storeResults() {
    if (previousData !== "") {
        previousData[i] = prevnum
    }

    else if (previousData === "") {
        previousData[i] == prevnum
    }

    i++

    displayStoreResults()
    // console.log(previousData)    
}

function displayStoreResults() {
    let count = 0
    const resultval = document.createElement('h4')
    console.log(previousData.length)




    previousData.map((val, index) => {

        if(count <4){
            if (val !== "") {
                resultval.textContent = val
                console.log(val)
                console.log(count)
            }
        }

        count++
    })

    if(count > 4){
        previousData.shift()
    }

    // for(let i =0; i<previousData.length; i++){
    //     result.textContent = previousData[i]
    // }

    result.appendChild(resultval)


    // previousData.map((val, index) => {
    //     if(val !== ""){
    //         resultval.textContent = val
    
    //         if(count < 4){
    //             previousData.shift()
    //             result.appendChild(resultval)
    //         }
    //         else{
    //             result.appendChild(resultval)
    //         }
    //     }
    // })
    // count++
    // result.appendChild(resultval)
    
    // console.log(previousData)
    console.log(previousData)
}