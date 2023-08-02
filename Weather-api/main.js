const container = document.querySelector(".container")
const inputPart = document.querySelector(".input-part")
const infoTxt = document.querySelector(".info-txt")
const inputField = document.querySelector("input")


inputField.addEventListener("keyup", (e) => {
    if (e.key == "Enter" && inputField.value != "") {
        // console.log("hi")
        requestApi(inputField.value)
    }
})


function requestApi(city){
    console.log(city)
}
