const accesskey = "J89b2e8tWbUiK2LmsptMzHcxD2UIBwLDRU0GEtRnSq0"

const formEl = document.querySelector("form")
const inputEl = document.querySelector("#search-input")
const searchBtn = document.querySelector("#search-btn")
const searchResults = document.querySelector(".search-results")
const showMore = document.querySelector("#showmore-btn")
// console.log(formEl,inputEl,searchResults,showMore)

let inputData = ""
let page = 1

// searchBtn.addEventListener("click",searchImages)

function searchImages(){
    inputData = inputEl.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`

    fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
        // console.log(data)
        // console.log(data.results)
        const results = data.results
         if(page === 1){
             searchResults.innerHTML = ""
         }

         results.map((result) =>{
            //  console.log("1")
             console.log(result)
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
         if(page > 1){
             showMore.style.display = "block"
         }
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

window.addEventListener("load", searchImages())