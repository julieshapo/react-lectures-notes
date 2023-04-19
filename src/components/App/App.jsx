import { GlobalStyle } from 'components/GlobalStyle';
import { RecipeList } from '../Recipes/RecipeList/RecipeList';
import initialRecipes from '../Recipes/recipes.json';
import { Layout } from '../Layout/Layout';
import { Component } from 'react';

export class App extends Component {
  state = {
    recipes: initialRecipes,
  };

  deleteRecipe = recipeId => {
    this.setState(prevState => ({
      recipes: prevState.recipes.filter(recipe => recipe.id !== recipeId),
    }));
  };

  render() {
    return (
      <Layout>
        <div>Recipe Form</div>
        <RecipeList items={this.state.recipes} onDelete={this.deleteRecipe} />
        <GlobalStyle />
      </Layout>
    );
  }
}
