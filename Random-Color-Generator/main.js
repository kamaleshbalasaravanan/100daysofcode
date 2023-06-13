let num = 12
const button = document.querySelector('#btn')
const colorContainer = document.querySelector('.color-container')


// const  generatePalette = () => {
//     let randomhex = Math.floor(Math.random() * 0xffffff).toString(16)
//     randomhex = `${randomhex.padStart(6,"0")}`
//     console.log(randomhex)
// }

let generatePalette = () => {
    colorContainer.innerHTML = ""
    for(let i=0; i<32; i++){
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16)
        randomHex = `#${randomHex.padStart(6,"0")}`
        // console.log(randomHex)

        const color = document.createElement('li')
        color.classList.add('color')
        color.innerHTML = ` <div class="rect-box" style = "background-color:${randomHex}"></div>
                            <span class="hex-value">${randomHex}</span>`
        
        color.addEventListener("click",  () => copyColor(color ,randomHex))
        colorContainer.appendChild(color)

    }

    // let randomHex = Math.floor(Math.random() * 0xffffff).toString(16)
    // randomHex = `#${randomHex.padStart(6,"0")}`
    // console.log(randomHex)

}


function copyColor(element, value){
    const colorElement = element.querySelector('.hex-value')
    navigator.clipboard.writeText(value).then(() => {
        colorElement.innerHTML = "copied"
    
    // colorElement.innerHTML.style.text-transform 
    colorElement.style.fontSize = "20px"
    colorElement.style.marginTop = "6px"


    setTimeout(() => colorElement.innerHTML =value,1000)
    }).catch(() => alert("failed to copy the color code"))
    console.log(element,value)
}


generatePalette()
button.addEventListener("click", generatePalette)
