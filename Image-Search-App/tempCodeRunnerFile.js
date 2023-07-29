ction searchImages() {
    inputData = inputEl.value
    localStorage.setItem('value',inputData)
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

        .catch(() => {
            if (inputData.length == 2) {
                alert("input field cannot be empty")
                console.log('hi')
            }
            else {
                alert("please enter the valid data")
            }
        })