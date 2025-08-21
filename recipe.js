const params = new URLSearchParams(window.location.search);
const mealId = params.get("id");

fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
  .then(res => res.json())
  .then(data => {
    const meal = data.meals?.[0];
    if (!meal) return;
    document.getElementById("recipe-container").innerHTML = `
      <h2>${meal.strMeal}</h2>
      <img src="${meal.strMealThumb}" width="300" />
      <p><strong>Category:</strong> ${meal.strCategory}</p>
      <p><strong>Area:</strong> ${meal.strArea}</p>
      <p>${meal.strInstructions}</p>
      <a href="${meal.strYoutube}" target="_blank">Watch Video 🎬</a>
    `;
  });