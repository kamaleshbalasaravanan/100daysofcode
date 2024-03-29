const accesskey = "J89b2e8tWbUiK2LmsptMzHcxD2UIBwLDRU0GEtRnSq0"
    // diff 
// const accesskey = "dUdr-GJScgpg8VvVBkj1yqj6_-zoG55fheEPgd0fCos"

const menu = document.querySelector("#menu")
const header = document.querySelector('header')
const navbar = document.querySelector(".navbar")
const icons = document.querySelectorAll('.carousel i')

const slide = document.querySelector(".slide")

const formEl = document.querySelector("form")
const inputEl = document.querySelector("#search-input")
const searchBtn = document.querySelector("#search-btn")
const title = document.querySelector('#title')
const searchResults = document.querySelector(".search-results")
const showMore = document.querySelector("#showmore-btn")
const next = document.querySelector("#next-btn")
// console.log(formEl,inputEl,searchResults,showMore)
const categoriescontainer = document.querySelector(".categories-container")

let titleName = new Array(10)
// console.log(categoriescontainer)
let inputData = ""
let page = 1
let pageX
let i = 0
let iterateNum = Math.floor(Math.random() * 1000)
let titlesarray = ["", "", "", "", "", "", "", "", "", ""]




menu.addEventListener("click", () => {
    header.classList.toggle('close')
    navbar.classList.toggle('active')
})

window.addEventListener("scroll", () => {
    // menu.classList
    navbar.classList.remove('active')
})

// icons.forEach((icon) =>{
//     icon.addEventListener("click",()=>{
//         const offset = icon.id == "right" ? 1 :-1
//         const slides = icon.closest(".carousel").querySelector("ul")
//         // console.log(slides)
//         const activeslide = slides.querySelector("[data-active]")
//         // console.log(activeslide)
//         let newIndex = [...slides.children].indexOf(activeslide) + offset

//         if(newIndex < 0){
//             newIndex = slides.children.length - 1
//         }

//         if(newIndex >= slides.children.length){
//             newIndex = 0
//         }

//         slides.children[newIndex].dataset.active = true
//         delete activeslide.dataset.active
//     })
// })

icons.forEach((icon) => {
    icon.addEventListener("click", () => {
        slide.innerHTML = ""
        carouselImg()
    })
})

function reloadFunc(){
    // pageX = Math.floor(Math.random() * 100)
    sessionStorage.setItem("val",  Math.floor(Math.random() * 100))
}

function carouselImg() {
    // console.log('carousel')
    let pageY = Math.floor(Math.random() * 100)
    // let topic = "wallpapers"
    const url = `https://api.unsplash.com/search/photos?page=${pageY}&query="nature"&client_id=${accesskey}`

    fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            // console.log(data)
            const results = data.results
            results.map((value, index) => {
                // console.log(result)
                if (index == 0) {
                    let result = value
                    // console.log(result)
                    const image = document.createElement('img')
                    image.src = result.urls.small
                    // console.log(image)
                    slide.appendChild(image)
                }
            })

        })
}

function searchImages() {
    inputData = inputEl.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`


    if (inputData.length !== 0) {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                // console.log(data.results)
                const results = data.results
                if (page === 1) {
                    searchResults.innerHTML = ""
                }

                title.innerHTML = ""
                const searchTitle = document.createElement('h1')
                searchTitle.classList.add('heading')
                searchTitle.textContent = inputData
                title.appendChild(searchTitle)

                results.map((result) => {
                    //  console.log(result)
                    const imageWrapper = document.createElement('div')
                    imageWrapper.classList.add("search-result")
                    const image = document.createElement('img')
                    image.src = result.urls.small
                    image.alt = result.alt_description
                    const imageLink = document.createElement('a')
                    imageLink.href = result.links.html
                    imageLink.target = "_blank"
                    imageLink.textContent = result.alt_description
                    imageWrapper.appendChild(image)
                    imageWrapper.appendChild(imageLink)
                    searchResults.appendChild(imageWrapper)
                })

                page++
                if (page > 1 || inputData.length === 0) {
                    showMore.style.display = "block"
                }
            })

            .catch(() => {
                if (inputData.length == 0) {
                    alert("input field cannot be empty")
                }
                else {
                    alert("please enter the valid data")
                }
            })
    }
    else {
        alert("error")
    }
}


function categories() {
    // let pageX = Math.floor(Math.random() * 100)
    let val = sessionStorage.getItem("val")
    pageX = val
    let a = 0;
    // console.log(pageX)
    const url = `https://api.unsplash.com/search/photos?page=${pageX}&query="random"&client_id=${accesskey}`

    fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            const results = data.results
            categoriescontainer.innerHTML = ""

            results.map((result) => {
                // console.log(result.tags)
                const tags = result.tags
                const wrapper = document.createElement('div')
                wrapper.dataset.Index = a
                // console.log(wrapper)   
                wrapper.addEventListener("click", (e) => {
                    let indexValue = wrapper.dataset.Index
                    // console.log(indexValue)
                    let selectTitle = titleName[indexValue]
                    // console.log(selectTitle)
                    localStorage.setItem('title', selectTitle)
                    // storeValue()
                    window.location.href = "categories.html"
                    // console.log(titleName)
                })
                wrapper.classList.add("categories-box")
                const image = document.createElement('img')
                image.src = result.urls.small
                image.alt = result.alt_description
                wrapper.appendChild(image)
                a++

                tags.map((value, index) => {
                    if (index == 0) {
                        let tag = value
                        // console.log(tag.title)
                        const title = document.createElement('h2')
                        title.innerHTML = tag.title
                        // console.log(i)

                       titleName[i] = tag.title

                    //    titleName.forEach((element, i) => {
                    //        console.log(element+" "+i)
                    //    })

                        wrapper.appendChild(title)
                        i++
                    }
                })
                categoriescontainer.appendChild(wrapper)
                // console.log(categoriescontainer)     
            })
            // console.log(titleName)  
        })
}

formEl.addEventListener("submit", (e) => {
    e.preventDefault()
    page = 1
    // window.location.href = "search.html"
    searchImages()
})

showMore.addEventListener("click", () => {
    searchImages()
})

next.addEventListener("click", () => {
    i = 0

    titleName.splice(0, titleName.length)
    localStorage.removeItem("title")
    reloadFunc()
    categories()
})

// reloadFunc()
categories()

// window.addEventListener("load", categories())  
window.addEventListener("load", carouselImg()) 
