import Recipe from "./Recipe";
import { recipes } from "./recipesData";


/////// challenge 3 /////////

export default function RecipeList() {
  const list = recipes.map((recipe) => (
    <Recipe
      name={recipe.name}
      id={recipe.id}
      key={recipe.id}
      ingredients={recipe.ingredients}
    />
  ));

  return (
    <div>
      <h1>Recipes</h1>
      <div>{list}</div>
    </div>
  );
}

