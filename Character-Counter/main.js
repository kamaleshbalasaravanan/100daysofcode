const textcontent = document.querySelector('#myText')
const result = document.querySelector('#result')
const remaining = document.querySelector('#remaining')


textcontent.addEventListener("input", () => {
    let len = (textcontent.value).length
    let rem = 200 -len
    result.textContent = `Total Character: ${len}`
    remaining.textContent = `Remaining: ${rem}`
    if(rem == 0){
        const updateText = document.createElement('p')
        updateText.classList.add('update')
        updateText.textContent = `no space`
        updateText.style.textAlign = "center"
        document.querySelector('.container').appendChild(updateText)
    }

})