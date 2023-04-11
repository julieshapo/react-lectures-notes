import { RecipeList } from "./01-components-styles/RecipeList";
import recipes from "./01-components-styles/recipes.json";

export const App = () => {
  return (
    <>
      <RecipeList items={recipes} />
    </>
  );
};
