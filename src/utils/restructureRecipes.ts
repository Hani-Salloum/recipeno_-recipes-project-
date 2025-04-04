interface recipeType {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strYoutube: string;
  strSource: string;
}

export const restructureRecipe = (recipe: recipeType) => {
  const {
    idMeal,
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strMealThumb,
    strYoutube,
    strSource,
  } = recipe;

  const ingredients = [];
  const measures = [];

  Object.keys(recipe).forEach((key) => {
    if (
      key.startsWith("strIngredient") &&
      recipe[key] !== null &&
      recipe[key].trim() !== ""
    )
      ingredients.push(recipe[key]);
    if (
      key.startsWith("strMeasure") &&
      recipe[key] !== null &&
      recipe[key].trim() !== ""
    )
      measures.push(recipe[key]);
  });

  const measuresAndIngredients = ingredients.map(
    (item, index) => ({ measure: measures[index], ingredient: item })
    // (item, index) => `${measures[index]} of ${item}`
  );

  const cookTimes = ['15 min', '30 min', '45 min', '60 min', '90 min', '120 min']
  const strTime = cookTimes[Math.floor(Math.random() * cookTimes.length)]

  const ratings = ['4.7', '3.8', '2.5', '4.3', '4.9', '3.3']
  const strRating = ratings[Math.floor(Math.random() * ratings.length)]

  const tags = ['main dish', 'dessert', 'breakfast', 'lunch', 'brunch', 'dinner']
  const strTag = tags[Math.floor(Math.random() * tags.length)]

  return {
    idMeal,
    strMeal,
    strCategory,
    strTag,
    strArea,
    strInstructions,
    strMealThumb,
    strYoutube,
    strRating,
    strTime,
    strSource,
    measuresAndIngredients,
  };
};

export const restructureRecipes = (recipes: []) => {
  const restructuredRecipes = [];
  if (recipes && recipes.length) 
    recipes.forEach((recipe) => {
      restructuredRecipes.push(restructureRecipe(recipe));
    });
  return restructuredRecipes;
};
