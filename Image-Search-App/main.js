const accesskey = "J89b2e8tWbUiK2LmsptMzHcxD2UIBwLDRU0GEtRnSq0"

const menu = document.querySelector("#menu")
const header = document.querySelector('header')
const navbar = document.querySelector(".navbar")


const formEl = document.querySelector("form")
const inputEl = document.querySelector("#search-input")
const searchBtn = document.querySelector("#search-btn")
const searchResults = document.querySelector(".search-results")
const showMore = document.querySelector("#showmore-btn")
const next = document.querySelector("#next-btn")
// console.log(formEl,inputEl,searchResults,showMore)
const categoriescontainer = document.querySelector(".categories-container")
let inputData = ""
let page = 1

// searchBtn.addEventListener("click",searchImages)

menu.addEventListener("click", ()=>{
    header.classList.toggle('close')
    navbar.classList.toggle('active')
})

window.addEventListener("scroll", ()=>{
    // menu.classList
    navbar.classList.remove('active')
})

function searchImages() {
    inputData = inputEl.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`

    fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            // console.log(data)
            // console.log(data.results)
            const results = data.results
            if (page === 1) {
                searchResults.innerHTML = ""
            }

            results.map((result) => {
                //  console.log("1")
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
            if (page > 1) {
                showMore.style.display = "block"
            }
        })

        .catch(() =>{
            if(inputData.length == 0){
                alert("input field cannot be empty")
                console.log('hi')
            }
            else{
                alert("please enter the valid data")
            }
        })
}
function categories() {
    let pageX = Math.floor(Math.random() * 10)
    console.log(pageX)
    const url = `https://api.unsplash.com/search/photos?page=${pageX}&query="random"&client_id=${accesskey}`

    fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            const results = data.results
                categoriescontainer.innerHTML = ""

            // if (pageX === 1) {
            //     categoriescontainer.innerHTML = ""
            // }
            results.map((result) => {
                // console.log(result.tags)
                const tags = result.tags
                const wrapper = document.createElement('div')
                wrapper.classList.add("categories-box")
                const image = document.createElement('img')
                image.src = result.urls.small
                image.alt = result.alt_description
                wrapper.appendChild(image)

                tags.map((tag) => {
                    // console.log(tag.title)
                    const title = document.createElement('h2')
                    title.innerHTML = tag.title
                    // console.log(data[0].tag[Object.keys(data[0].tag)].title)

                    wrapper.appendChild(title)
                })
                categoriescontainer.appendChild(wrapper)

            })
        })
}

formEl.addEventListener("submit", (e) => {
    e.preventDefault()
    page = 1
    searchImages()
})

showMore.addEventListener("click", () => {
    searchImages()
})

next.addEventListener("click", () =>{
    categories()
})

window.addEventListener("load", categories())  