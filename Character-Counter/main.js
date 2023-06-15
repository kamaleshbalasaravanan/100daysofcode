const textcontent = document.querySelector('#myText')
const result = document.querySelector('#result')

textcontent.addEventListener("input", () => {
    let len = (textcontent.value).length
    result.textContent = `Total Character: ${len}`
})