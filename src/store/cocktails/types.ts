import { LoadingStates } from '../../interfaces/LoadingState';
import { Cocktail } from '../../interfaces/Cocktail';

export interface CocktailsState extends LoadingStates {
  cocktails: Cocktail[];
  loadingCocktailById: boolean;
  errorCocktailById: boolean;
  cocktail: Cocktail | null;
}

export const FETCH_COCKTAILS = 'FETCH_COCKTAILS';
export const FETCH_COCKTAILS_SUCCESS = 'FETCH_COCKTAILS_SUCCESS';
export const FETCH_COCKTAILS_ERROR = 'FETCH_COCKTAILS_ERROR';

export const FETCH_COCKTAIL_BY_ID = 'FETCH_COCKTAIL_BY_ID';
export const FETCH_COCKTAIL_BY_ID_SUCCESS = 'FETCH_COCKTAIL_BY_ID_SUCCESS';
export const FETCH_COCKTAIL_BY_ID_ERROR = 'FETCH_COCKTAIL_BY_ID_ERROR';
export const CLEAR_COCKTAIL_BY_ID = 'CLEAR_COCKTAIL_BY_ID';

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

interface FetchCocktailByIdAction {
  type: typeof FETCH_COCKTAIL_BY_ID;
}

interface FetchCocktailByIdSuccessAction {
  type: typeof FETCH_COCKTAIL_BY_ID_SUCCESS;
  cocktail: Cocktail | null;
}

interface FetchCocktailByIdErrorAction {
  type: typeof FETCH_COCKTAIL_BY_ID_ERROR;
}

interface ClearCocktailByIdAction {
  type: typeof CLEAR_COCKTAIL_BY_ID;
}

export type CocktailsActionTypes = (
  FetchCocktailsAction
  | FetchCocktailsSuccessAction
  | FetchCocktailsErrorAction
  | FetchCocktailByIdAction
  | FetchCocktailByIdSuccessAction
  | FetchCocktailByIdErrorAction
  | ClearCocktailByIdAction
);
