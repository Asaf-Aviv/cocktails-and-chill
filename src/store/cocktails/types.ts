import { LoadingStates } from '../../interfaces/LoadingState';
import { Cocktail } from '../../interfaces/Cocktail';

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
