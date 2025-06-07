const search_box=document.querySelector('.searchbox')
const search_btn=document.querySelector('.search-button')
const recipe_cont=document.querySelector('.recipe-container')
const recipe_details_cont=document.querySelector('.recipe-details-content')
const recipe_close_btn=document.querySelector('.recipe-close-button')

const fetchrecipes=async(query)=>{
    recipe_cont.innerHTML='<h2>Fetching Recipes</h2>'
    try{
        const responce=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        const data= await responce.json()
        recipe_cont.innerHTML=''
        data.meals.forEach(meal=>{
            // console.log(meal)
            const recipediv=document.createElement('div')
            recipediv.classList.add('recipe')
            recipediv.innerHTML = `<img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <h3>${meal.strMeal}</h3>
            <p><span>${meal.strArea}</span> Dish</p>        
            <p>Category: <span>${meal.strCategory}</span></p>`;        
            const view_button=document.createElement('button')
            view_button.textContent='View recipe'
            recipediv.appendChild(view_button)
            view_button.addEventListener('click',()=>{
                openrecipepopup(meal)
            })
            recipe_cont.appendChild(recipediv)
        })
    }
    catch(error){
        recipe_cont.innerHTML='<h2>Error in Fetching Recipes...</h2>'
    }
}

const fetchingredients=(meal)=>{
    let ingredient_list=""
    for(let i=1;i<20;i++){
        const ingredient=meal[`strIngredient${i}`]
        if(ingredient){
            const measure=meal[`strMeasure${i}`]
            ingredient_list+= `<li>• ${measure}: ${ingredient}</li>`
        }
        else{
            break
        }
    }
    return ingredient_list
}

const openrecipepopup=(meal)=>{
    recipe_details_cont.innerHTML=`
    <h2 class="recipe_name">${meal['strMeal']}</h2>
    <h3>Ingredients: </h3>
    <ul class="ingredient_list">${fetchingredients(meal)}</ul>
    <div class="recepe_instructions">
        <h3>Instructions: </h3>
        <p>${meal['strInstructions']}</p>
    </div>`
    recipe_details_cont.parentElement.style.display="block"
}

recipe_close_btn.addEventListener('click',()=>{
    recipe_details_cont.parentElement.style.display="none"
})

search_btn.addEventListener('click',(e)=>{
    e.preventDefault() //page does not get refreshed
    const search_input=search_box.value.trim()
    if (search_input) {
        fetchrecipes(search_input);
        console.log("Searching for:", search_input);
    } else {
        alert("Please enter a recipe name.");

    }
    console.log("button clicked");
})
