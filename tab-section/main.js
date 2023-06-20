// console.log('hi')
const tabs = document.querySelectorAll('.tabs h3')
const tabContent = document.querySelectorAll('.tab-content div')

console.log(tabs, tabContent)

tabs.forEach((tab, index) => {
    tab.addEventListener("click" , () => {
        tabContent.forEach((content) => {
            content.classList.remove('active')
        })
        tabs.forEach((tab) => {
            tab.classList.remove('active')
        })
        tabContent[index].classList.add('active')
        tabs[index].classList.add('active')
    })
})