const result = document.querySelector('#result')
const searchBtn = document.querySelector('.search-btn')
const userInp = document.getElementById('user-inp').value
const url = "https://www.themealdb.com/api/json/v1/1/search.php?s="

fetch(url + "pizza")
.then((response) => response.json())
.then((data) => {
    console.log(data)
    let myMeal = data.meals[0]
    console.log(myMeal)
    console.log(myMeal["strMeal"])
    // console.log(myMeal.strMeal)
    // console.log(myMeal.strArea)
    // console.log(myMeal.strMealThumb)
    // console.log(myMeal.strInstructions)

    let count = 1
    // let coun2 = 0
    let ingredients =[]
    for (let i in myMeal){
        // console.log(i)
        let ingredient = ""
        let measure = ""
        
        if(i.startsWith("strIngredient") && myMeal[i]){
            // coun2 += 1
            // console.log(coun2)
            // console.log(myMeal[i])
            ingredient = myMeal[i]
            measure = myMeal['strMeasure'+count]
            count +=1
            // console.log(measure)
            // console.log(ingredient, measure)
            ingredients.push(`${measure} ${ingredient}`)
            // console.log(ingredients)
            // for(let n in ingredients){
            //     console.log(ingredients[n])
            // }
        }
    }
    // console.log(ingredients)
    
    result.innerHTML = `
    <img src = ${myMeal.strMealThumb}>
    <div class="details"> 
        <h2>${myMeal.strMeal}</h2>
        <h4>${myMeal.strArea}</h4>
    </div>
    <div id="ingredient-con"></div>
    <div id="recipe">
        <button id = "hide-recipe">X</button>
        <pre id="instructions">${myMeal.strInstructions}
        </pre>
    </div>
    <button id = "show-recipe">View Recipe</button> 
    `

    let ingredientCon = document.querySelector('#ingredient-con')
    let parent = document.createElement('ul')
    let recipe = document.querySelector('#recipe')
    let hideRecipe = document.querySelector('#hide-recipe')
    let showRecipe = document.querySelector('#show-recipe')

    ingredients.forEach((i) => {
        let child = document.createElement('li')
        child.innerText = i
        parent.appendChild(child)
        ingredientCon.appendChild(parent)
    })
    
    hideRecipe.addEventListener("click", () => {
        recipe.style.display = "none"
    })

    showRecipe.addEventListener("click", () => {
        recipe.style.display = "block"
    })
})