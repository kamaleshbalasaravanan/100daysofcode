const copyBtn = document.querySelector('#copybtn')
const paraDisplay = document.querySelector("#para")

const options = {
    method : "GET",
    headers: { "x-api-key": apikey },   
}

const url = "https://api.api-ninjas.com/v1/loremipsum?paragraphs="

let generateParas = () => {
    let noOfPara = document.getElementById("numofPara").ariaValueMax
    let finalURL = url + noOfPara   
    fetch(finalURL, options)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
    })
}