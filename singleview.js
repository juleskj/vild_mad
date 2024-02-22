window.addEventListener("DOMContentLoaded", init);

let recipeTemplate;
let recipeContainer;

function init() {
  recipeTemplate = document.querySelector(".recipe_template");
  recipeContainer = document.querySelector(".recipe_container");

  fetch("https://hkacgwvfknbydsffczoz.supabase.co/rest/v1/vild_mad_opskrifter", {
    method: "GET",
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhrYWNnd3Zma25ieWRzZmZjem96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4Mjc3MzMsImV4cCI6MjAyMzQwMzczM30.jv7QvuNAplwpeSdsg2PFEwkguugb0vnWAl7AASiXX4E",
    },
  })
    .then((res) => res.json())
    .then(showRecipes);
}

function showRecipes(recipeJSON) {
  // Assuming only one recipe will be displayed at a time,
  // you might want to choose a specific recipe from the array,
  // such as the first one:
  const recipe = recipeJSON[0];

  // Clone the recipe template
  const recipeClone = recipeTemplate.content.cloneNode(true);

  // Update the content of the cloned template with recipe data
  recipeClone.querySelector(".recipe_title").textContent = recipe.name;
  recipeClone.querySelector(".instructions").textContent = recipe.instructions;
  recipeClone.querySelector(".cookingtime").textContent = recipe.cookingtime;
  recipeClone.querySelector(".portion").textContent = recipe.portionsize;
  recipeClone.querySelector(".difficulty").textContent = recipe.difficulty;

  if (!recipe.herbs) {
    recipeClone.querySelector(".herbs").classList.add("none");
  }

  if (!recipe.mushroom) {
    recipeClone.querySelector(".mushroom").classList.add("none");
  }

  // Clear the recipe container and append the cloned template
  recipeContainer.innerHTML = "";
  recipeContainer.appendChild(recipeClone);
}
