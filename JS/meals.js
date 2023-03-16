
const loadMeal = (searchText) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
  fetch(url)
    .then(res => res.json())
    .then(data => displayMeal(data.meals))
}

const displayMeal = (meals) => {
  console.log(meals)
  const mealContainer = document.getElementById('meal-container');
  mealContainer.innerText = '';
  meals.forEach(meal => {
    const createDiv = document.createElement('div')
    createDiv.classList.add('col')
    createDiv.innerHTML = `   
      <div class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus ab error quasi quidem ea velit sunt reprehenderit optio voluptatum sed?</p>
          <button onclick="loadMealDetail2(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDB">
             Details
          </button>
        </div>
      </div>`
    mealContainer.appendChild(createDiv);
  });
}

const searchMeal = () => {
  const searchField = document.getElementById('search-field').value;
  loadMeal(searchField);
}

const loadMealDetail =idMeal=>{
const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
fetch(url)
.then(res=>res.json())
.then(data=> displayMealDetail(data.meals[0]))
.catch(error=> console.log(error))

}
const loadMealDetail2 = async(idMeal)=>{
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  try{
    const res = await fetch(url)
    const data = await res.json()
    displayMealDetail(data.meals[0])
  } 
  catch(error){
console.log(error)
  }
}

const displayMealDetail =meal=>{
document.getElementById('mealDBLabel').innerText = meal.strMeal;
const img = document.getElementById('mealDetailBody');
img.innerHTML =`
<img class="img-fluid" src="${meal.strMealThumb}" alt="" srcset="">
`
}
loadMeal('fish');
