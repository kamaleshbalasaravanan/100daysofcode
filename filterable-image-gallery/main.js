const filterableButtons = document.querySelectorAll('.filterable-buttons button')
const filterableCards = document.querySelectorAll('.filterable-cards .cards')
// console.log(filterableButtons)
// console.log(filterableCards)

const filterCards = (e) => {
    document.querySelector('.active').classList.remove('active')
    e.target.classList.add('active')
    // console.log(e.target)

    filterableCards.forEach(card => {
        card.classList.add('hide')

        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove('hide')
        }
    })
}

filterableButtons.forEach(button => button.addEventListener("click", filterCards))