const inputarea = document.getElementById('inputfield')

console.log(inputarea.length)

inputarea.addEventListener("input", () => {

    const valuelen = (inputarea.value).length
    console.log(valuelen)
})