import { LoadingStates } from '../../interfaces/loadingState';

export interface ShortCocktailSummary {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

export interface Cocktail extends ShortCocktailSummary {
  dateModified: string;
  strAlcoholic: 'Alcoholic' | 'Non alcoholic';
  strCategory: string;
  strDrinkAlternate: string | null;
  strGlass: string;
  strIBA: string | null;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strInstructions: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
}

export interface CocktailsState extends LoadingStates {
  cocktails: Cocktail[];
}

export const FETCH_COCKTAILS = 'FETCH_COCKTAILS';
export const FETCH_COCKTAILS_SUCCESS = 'FETCH_COCKTAILS_SUCCESS';
export const FETCH_COCKTAILS_ERROR = 'FETCH_COCKTAILS_ERROR';

interface FetchCocktailsAction {
  type: typeof FETCH_COCKTAILS;
}

interface FetchCocktailsSuccessAction {
  type: typeof FETCH_COCKTAILS_SUCCESS;
  cocktails: Cocktail[];
}

interface FetchCocktailsErrorAction {
  type: typeof FETCH_COCKTAILS_ERROR;
}

export type CocktailsActionTypes = (
  FetchCocktailsAction
  | FetchCocktailsSuccessAction
  | FetchCocktailsErrorAction
);
