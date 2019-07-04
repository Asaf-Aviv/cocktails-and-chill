import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { Cocktail } from '../../interfaces/Cocktail';
import cocktailFetcher from '../../axios';
import { removeFalsyProps } from '../../utils';
import {
  FETCH_RANDOM_COCKTAILS,
  FETCH_RANDOM_COCKTAILS_SUCCESS,
  FETCH_RANDOM_COCKTAILS_ERROR,
  RandomCocktailsActionTypes,
} from './types';

const fetchRandomCocktailsPending = (): RandomCocktailsActionTypes => ({
  type: FETCH_RANDOM_COCKTAILS,
});

const fetchRandomCocktailsSuccess = (cocktails: Cocktail[]): RandomCocktailsActionTypes => ({
  type: FETCH_RANDOM_COCKTAILS_SUCCESS,
  cocktails,
});

const fetchRandomCocktailsError = (): RandomCocktailsActionTypes => ({
  type: FETCH_RANDOM_COCKTAILS_ERROR,
});

export const fetchRandomCocktails = (): ThunkAction<Promise<void>, {}, {}, AnyAction> =>
  async (dispatch) => {
    dispatch(fetchRandomCocktailsPending());

    try {
      const drinks = await cocktailFetcher.fetchRandomCocktails();
      const filtered = removeFalsyProps(drinks) as Cocktail[];
      dispatch(fetchRandomCocktailsSuccess(filtered));
    } catch (err) {
      console.error(err);
      dispatch(fetchRandomCocktailsError());
    }
  };
