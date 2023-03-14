
const loadMeal = () => {
  fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Fish')
    .then(res => res.json())
    .then(data => displayMeal(data.meals))
}
 
const displayMeal = (meals) => {
  console.log(meals)
  const mealContainer = document.getElementById('meal-container');
  meals.forEach(meal => {
    const createDiv = document.createElement('div')
    createDiv.classList.add('col')
    createDiv.innerHTML = `   
      <div class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions}</p>
        </div>
      </div>`
    mealContainer.appendChild(createDiv);
  });
}

loadMeal();
