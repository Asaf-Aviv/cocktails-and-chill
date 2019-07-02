import axios from 'axios';
import { Ingredient } from '../interfaces/Ingredient';
import { Cocktail, ShortCocktailSummary } from '../interfaces/Cocktail';

class CocktailFetcher {
  private fetcher = axios.create({
    baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/',
  })

  private fetchIngredient = (ingredientName: string) =>
    this.fetcher(`search.php?i=${ingredientName}`)
      .then(({ data }: IngredientsResponse) => data.ingredients[0]);

  private fetchRandomCocktail = (): Promise<Cocktail> =>
    this.fetcher('random.php')
      .then(({ data }: CocktailsResponse) => data.drinks[0])

  private extractDrinks = ({ data }: CocktailsResponse) => data.drinks;

  public getAllCategories = (): Promise<string[]> =>
    this.fetcher('list.php?c=list')
      .then(({ data }: CategoriesResponse) =>
        data.drinks.map(d => d.strCategory))

  public getAllGlasses = (): Promise<string[]> =>
    this.fetcher('list.php?g=list')
      .then(({ data }: GlassesResponse) =>
        data.drinks.map(d => d.strGlass))

  public fetchCocktailsByName = (name: string): Promise<Cocktail[]> =>
    this.fetcher(`search.php?s=${name}`).then(this.extractDrinks)

  public fetchIngredients = (ingredients: string[]): Promise<Ingredient[]> =>
    Promise.all(ingredients.map(this.fetchIngredient))

  public fetchRandomCocktails = (amount: number): Promise<Cocktail[]> =>
    Promise.all([...Array(amount)].map(this.fetchRandomCocktail))

  public getCocktailsByAlcohol = (alcoholic: string): Promise<ShortCocktailSummary[]> =>
    this.fetcher(`filter.php?a=${alcoholic}`).then(this.extractDrinks)

  public getCocktailsByIngredient = (ingredient: string): Promise<ShortCocktailSummary[]> =>
    this.fetcher(`filter.php?i=${ingredient}`).then(this.extractDrinks)

  public getCocktailsByCategory = (category: string): Promise<ShortCocktailSummary[]> =>
    this.fetcher(`filter.php?c=${category}`).then(this.extractDrinks)

  public getCocktailsByGlass = (glass: string): Promise<ShortCocktailSummary[]> =>
    this.fetcher(`filter.php?g=${glass}`).then(this.extractDrinks)
}

interface CategoriesResponse {
  data: {
    drinks: [{ strCategory: string }];
  };
}

interface GlassesResponse {
  data: {
    drinks: [{ strGlass: string }];
  };
}

interface CocktailsResponse {
  data: {
    drinks: Cocktail[];
  };
}

interface IngredientsResponse {
  data: {
    ingredients: Ingredient[];
  };
}

export default new CocktailFetcher();
