import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { CocktailsResponse } from '../cocktails/actions';
import cocktailFetcher from '../../axios';
import { Cocktail } from '../cocktails/types';
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

export const getRandomCocktails = (): ThunkAction<Promise<void>, {}, {}, AnyAction> =>
  async dispatch => {
    dispatch(fetchRandomCocktailsPending());

    try {
      const { data: { drinks } }: CocktailsResponse = await cocktailFetcher('random.php');
      const filtered = removeFalsyProps(drinks);
      dispatch(fetchRandomCocktailsSuccess(filtered as Cocktail[]));
    } catch (e) {
      console.error(e);
      fetchRandomCocktailsError();
    }
  };
