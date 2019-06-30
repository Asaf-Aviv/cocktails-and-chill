import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import cocktailFetcher from '../../axios';
import { getIngredients } from '../ingredients/actions';
import { removeFalsyProps } from '../../utils/index';
import {
  Cocktail,
  FETCH_COCKTAILS,
  FETCH_COCKTAILS_SUCCESS,
  FETCH_COCKTAILS_ERROR,
  CocktailsActionTypes,
} from './types';

export interface CocktailsResponse {
  data: {
    drinks: Cocktail[];
  };
}

const fetchCocktailsPending = (): CocktailsActionTypes => ({
  type: FETCH_COCKTAILS,
});

const fetchCocktailsSuccess = (cocktails: Cocktail[]): CocktailsActionTypes => ({
  type: FETCH_COCKTAILS_SUCCESS,
  cocktails,
});

const fetchCocktailsError = (): CocktailsActionTypes => ({
  type: FETCH_COCKTAILS_ERROR,
});



export const getCocktailsByName = (
  name: string
): ThunkAction<Promise<void>, {}, {}, AnyAction> => async dispatch => {
  dispatch(fetchCocktailsPending());

  try {
    const { data: { drinks } }: CocktailsResponse = await cocktailFetcher(`search.php?s=${name}`);
    const ingredients = [...new Set(drinks.map(d => d.strIngredient1))];
    dispatch(getIngredients(ingredients));
    const filtered = removeFalsyProps(drinks);
    dispatch(fetchCocktailsSuccess(filtered as Cocktail[]));
  } catch (e) {
    console.error(e);
    fetchCocktailsError();
  }
};
