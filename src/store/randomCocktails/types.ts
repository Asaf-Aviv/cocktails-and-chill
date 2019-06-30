import { LoadingStates } from '../../interfaces/loadingState';
import { Cocktail } from '../cocktails/types';

export interface RandomCocktailsState extends LoadingStates {
  cocktails: Cocktail[];
}

export const FETCH_RANDOM_COCKTAILS = 'FETCH_RANDOM_COCKTAILS';
export const FETCH_RANDOM_COCKTAILS_SUCCESS = 'FETCH_RANDOM_COCKTAILS_SUCCESS';
export const FETCH_RANDOM_COCKTAILS_ERROR = 'FETCH_RANDOM_COCKTAILS_ERROR';

interface FetchRandomCocktailsAction {
  type: typeof FETCH_RANDOM_COCKTAILS;
}

interface FetchRandomCocktailsSuccessAction {
  type: typeof FETCH_RANDOM_COCKTAILS_SUCCESS;
  cocktails: Cocktail[];
}

interface FetchRandomCocktailsErrorAction {
  type: typeof FETCH_RANDOM_COCKTAILS_ERROR;
}

export type RandomCocktailsActionTypes = (
  FetchRandomCocktailsAction
  | FetchRandomCocktailsSuccessAction
  | FetchRandomCocktailsErrorAction
);
