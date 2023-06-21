// console.log('hi')
const tabs = document.querySelectorAll('.tabs h3')
const tabContent = document.querySelectorAll('.tab-content div')
const tabcontainer = document.querySelector('.tab-content')

console.log(tabs, tabContent)

tabs.forEach((tab, index) => {
    tab.addEventListener("click" , () => {
        tabContent.forEach((content) => {
            content.classList.remove('active')
            tabcontainer.classList.add('shake')
        })
        tabs.forEach((tab) => {
            tab.classList.remove('active')
        })

        // tabContent.forEach((content) => {
        //     tabContent
        // })
        tabContent[index].classList.add('active')
        tabs[index].classList.add('active')  
        // shake()
             
    })
})

// tabs.forEach((tab) => {
//     tab.addEventListener("click", ()=>{
//         tabcontainer.classList.add('shake')
//     })
// })

// function shake(){
//     tabcontainer.classList.add('shake')
// }