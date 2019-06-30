import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import cocktailFetcher from '../../axios';
import {
  Ingredient,
  FETCH_INGREDIENT,
  FETCH_INGREDIENT_SUCCESS,
  FETCH_INGREDIENT_ERROR,
  IngredientsActionTypes,
} from './types';

const fetchIngredient = (ingredientName: string): Promise<Ingredient> =>
  cocktailFetcher(`search.php?i=${ingredientName}`)
    .then(({ data }: IngredientsResponse) => data.ingredients[0]);

interface IngredientsResponse {
  data: {
    ingredients: Ingredient[];
  };
}

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
): ThunkAction<Promise<void>, {}, {}, AnyAction> => async dispatch => {
  dispatch(fetchIngredientsPending());

  try {
    const ingredients = (await Promise.all(ingredientNames.map(fetchIngredient)))
      .filter(i => Boolean(i.strDescription));
    dispatch(fetchIngredientsSuccess(ingredients));
  } catch (e) {
    console.error(e);
    dispatch(fetchIngredientsError());
  }
};
