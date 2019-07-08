import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import cocktailFetcher from '../../axios';
import { Ingredient } from '../../interfaces/Ingredient';
import {
  FETCH_INGREDIENT,
  FETCH_INGREDIENT_SUCCESS,
  FETCH_INGREDIENT_ERROR,
  IngredientsActionTypes,
} from './types';

const fetchIngredientsPending = (): IngredientsActionTypes => ({
  type: FETCH_INGREDIENT,
});

const fetchIngredientsSuccess = (ingredients: Ingredient[]): IngredientsActionTypes => ({
  type: FETCH_INGREDIENT_SUCCESS,
  ingredients,
});

const fetchIngredientsError = (): IngredientsActionTypes => ({
  type: FETCH_INGREDIENT_ERROR,
});

export const fetchIngredients = (
  ingredientNames: string[]
): ThunkAction<Promise<void>, {}, {}, AnyAction> => async (dispatch) => {
  dispatch(fetchIngredientsPending());

  try {
    const ingredients = await cocktailFetcher.fetchIngredients(ingredientNames);
    dispatch(fetchIngredientsSuccess(ingredients));
  } catch (err) {
    console.error(err);
    dispatch(fetchIngredientsError());
  }
};
