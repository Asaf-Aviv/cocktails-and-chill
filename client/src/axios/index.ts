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
      .then(({ data }: AllCategoriesResponse) =>
        data.drinks.map(d => d.strCategory))

  public getAllGlasses = (): Promise<string[]> =>
    this.fetcher('list.php?g=list')
      .then(({ data }: AllGlassesResponse) =>
        data.drinks.map(d => d.strGlass))

  public getAllIngredients = (): Promise<string[]> =>
    this.fetcher('list.php?i=list')
      .then(({ data }: AllIngredientsResponse) =>
        data.drinks.map(d => d.strIngredient1))

  public fetchCocktailById = (cocktailId: string): Promise<Cocktail | null> =>
    this.fetcher(`lookup.php?i=${cocktailId}`)
      .then(({ data }: CocktailIsNullable) => data.drinks ? data.drinks[0] : null);

  public fetchCocktailsByName = (name: string): Promise<Cocktail[] | null> =>
    this.fetcher(`search.php?s=${name}`)
      .then((res: CocktailIsNullable) => res.data.drinks
        ? this.extractDrinks(res as CocktailsResponse)
        : null);

  public fetchIngredients = (ingredients: string[]): Promise<Ingredient[]> =>
    Promise.all(ingredients.map(this.fetchIngredient))

  public fetchRandomCocktails = (amount: number = 4): Promise<Cocktail[]> =>
    Promise.all([...Array(amount)].map(this.fetchRandomCocktail))

  public getCocktailsByAlcohol = (alcoholic: string): Promise<ShortCocktailSummary[]> =>
    this.fetcher(`filter.php?a=${alcoholic}`).then(this.extractDrinks)

  public getCocktailsByIngredient = (ingredient: string): Promise<ShortCocktailSummary[] | null> =>
    this.fetcher(`filter.php?i=${ingredient}`)
      .then((res: CocktailIsNullable) => res.data.drinks
        ? this.extractDrinks(res as CocktailsResponse)
        : null);

  public getCocktailsByCategory = (category: string): Promise<ShortCocktailSummary[]> =>
    this.fetcher(`filter.php?c=${category.replace(' ', '_')}`).then(this.extractDrinks)

  public getCocktailsByGlass = (glass: string): Promise<ShortCocktailSummary[]> =>
    this.fetcher(`filter.php?g=${glass}`).then(this.extractDrinks)
}

interface AllCategoriesResponse {
  data: {
    drinks: [{ strCategory: string }];
  };
}

interface AllGlassesResponse {
  data: {
    drinks: [{ strGlass: string }];
  };
}

interface AllIngredientsResponse {
  data: {
    drinks: [{ strIngredient1: string }];
  };
}

interface CocktailIsNullable {
  data: {
    drinks: Cocktail[] | null;
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
