import { GlobalStyle } from 'components/GlobalStyle';
import { RecipeList } from '../01-components-styles/Recipes/RecipeList/RecipeList';
import recipes from '../01-components-styles/Recipes/recipes.json';
import { Layout } from '../Layout/Layout';

export const App = () => {
  return (
    <Layout>
      <RecipeList items={recipes} />
      <GlobalStyle />
    </Layout>
  );
};
