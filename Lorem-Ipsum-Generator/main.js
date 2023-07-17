const generateBtn = document.querySelector('#generateBtn')
const copyBtn = document.querySelector('#copybtn')
const paraDisplay = document.querySelector("#para")
let options = {
    method: 'GET',
    // headers: { "X-Api-Key": apikey},   
    headers: { 'x-api-key': apikey }
}

// let url = "https://api.api-ninjas.com/v1/loremipsum?paragraphs="
let url = "https://api.api-ninjas.com/v1/loremipsum?paragraphs="

let generateParas = () => {
    let noOfPara = document.getElementById("numofPara").ariaValueMax
    let finalURL = url + noOfPara
    console.log(finalURL)
    fetch(finalURL, options)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        })
}

generateBtn.addEventListener("click", generateParas)
window.addEventListener("load", generateParas)

