import { LoadingStates } from '../../interfaces/LoadingState';
import { Ingredient } from '../../interfaces/Ingredient';

export interface IngredientsState extends LoadingStates {
  ingredients: Ingredient[];
}

export const FETCH_INGREDIENT = 'FETCH_INGREDIENT';
export const FETCH_INGREDIENT_SUCCESS = 'FETCH_INGREDIENT_SUCCESS';
export const FETCH_INGREDIENT_ERROR = 'FETCH_INGREDIENT_ERROR';

interface FetchIngredientsAction {
  type: typeof FETCH_INGREDIENT;
}

interface FetchIngredientsSuccessAction {
  type: typeof FETCH_INGREDIENT_SUCCESS;
  ingredients: Ingredient[];
}

interface FetchIngredientsErrorAction {
  type: typeof FETCH_INGREDIENT_ERROR;
}

export type IngredientsActionTypes = (
  FetchIngredientsAction
  | FetchIngredientsSuccessAction
  | FetchIngredientsErrorAction
);
