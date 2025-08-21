const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const vegIngredients = ["aloo", "tomato", "carrot", "paneer", "chole", "palak"];
const nonVegIngredients = ["chicken", "mutton", "fish", "egg"];

function fetchAndDisplayMeals(ingredient, containerId) {
  fetch(API_URL + ingredient)
    .then(res => res.json())
    .then(data => {
      const meals = data.meals;
      if (!meals) return;

      const container = document.getElementById(containerId);
      meals.forEach(meal => {
        const card = document.createElement("div");
        card.className = "meal-card";
        card.innerHTML = `
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
          <h3>${meal.strMeal}</h3>
          <a href="recipe.html?id=${meal.idMeal}">View Recipe ➡️</a>
        `;
        container.appendChild(card);
      });
    });
}

vegIngredients.forEach(ingredient => fetchAndDisplayMeals(ingredient, "veg-list"));
nonVegIngredients.forEach(ingredient => fetchAndDisplayMeals(ingredient, "nonveg-list"));