'use strict';

const search = document.getElementById('search'),
 submit = document.getElementById('submit'),
 random = document.getElementById('random'),
 mealsEL = document.getElementById('meals'),
 resultHeading = document.getElementById('result-heading'),
 single_mealEl = document.getElementById('single-meal');


// Search meal and fetch from API
function searchMeal(e){
 e.preventDefault();

 //clear single meal
 single_mealEl.innerHTML = '';

 // get search term
 const term = search.value

 //check for empty
 if (term.trim()) {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
  .then(response => response.json())
  .then(data => {
   console.log(data)
   resultHeading.innerHTML = `<h2>Search results for '${term}': </h2>`;

   if(data.meals === null){
    resultHeading.innerHTML = `No results found for '${term}'. Try again`
   } else{
    mealsEL.innerHTML = data.meals.map(meal => `
     <div class="meal1">
       <img src="${meal.strMealThumb}" alt=${meal.strMeal}/>
       <div class="meal-info" data-mealID="${meal.idMeal}">
       <h3>${meal.strMeal}</h3>
      </div>
    </div>
    `).join('');
   }
  });

  //clear search text
  search.value = '';

 } else {

  alert('Please enter a valid search term');
 }
}

// Fetch meal by ID
function getMealbyId(mealID){
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
  .then(response => response.json())
  .then(data => {
    const meal = data.meals[0];

    addMealToDOM(meal)
})
}

// Add meal to DOM
function addMealToDom(meal){
  //continue 7:41
}

//Event listeners

submit.addEventListener('submit', searchMeal);

mealsEL.addEventListener('click', e =>{
  const mealInfo = e.path.find(item =>{
    if(item.classList){
      return item.classList.contains('meal-info');
    } else {
      return false;
    }
  });
  if(mealInfo){
    const mealID = mealInfo.getAttribute('data-mealid');
    getMealbyId(mealID)
  };
})