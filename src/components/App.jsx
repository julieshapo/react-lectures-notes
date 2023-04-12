import { RecipeList } from './01-components-styles/Recipes/RecipeList';
import recipes from './01-components-styles/Recipes/recipes.json';

export const App = () => {
  return (
    <>
      <RecipeList items={recipes} />
    </>
  );
};
