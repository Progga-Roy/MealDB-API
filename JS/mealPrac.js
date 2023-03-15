const loadMeal = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeal(data.meals))


}
const displayMeal = (meals) => {
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerText ='';
    meals.forEach(meal => {
        const createDiv = document.createElement('div');
       
        createDiv.classList.add('col');
        createDiv.innerHTML = `
             <div class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title text-center text-danger">${meal.strMeal}</h5>
                </div>
                <button onclick="loadMealDetail(${meal.idMeal})" type="button" class="btn btn-warning text-white text-uppercase fw-bold" data-bs-toggle="modal" data-bs-target="#mealDetails">
                Details
              </button>
              </div>
  
    `
        mealContainer.appendChild(createDiv)
    });
}

const searchMeal = () => {
    const searchField = document.getElementById('search-field').value;
    console.log(searchField)
    loadMeal(searchField);

}

const loadMealDetail =(idMeal)=>{
const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
fetch(url)
.then(res=> res.json())
.then(data=> displayMealDetail(data.meals[0]))
}

const displayMealDetail =meal=>{
    console.log(meal)
document.getElementById('mealDetailsLabel').innerText = meal.strMeal;
const img = document.getElementById('bodyImg');
img.innerHTML =` <img class="img-fluid" src="${meal.strMealThumb}" alt="">`
}


loadMeal('chicken');

