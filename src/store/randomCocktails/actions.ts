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

const fetchCocktail = (): Promise<Cocktail> =>
  cocktailFetcher('random.php')
    .then(({ data }: CocktailsResponse) => data.drinks[0]);

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
  async dispatch => {
    dispatch(fetchRandomCocktailsPending());

    try {
      const drinks = await Promise.all([...Array(3)].map(fetchCocktail));
      const filtered = removeFalsyProps(drinks) as Cocktail[];
      dispatch(fetchRandomCocktailsSuccess(filtered));
    } catch (e) {
      console.error(e);
      dispatch(fetchRandomCocktailsError());
    }
  };
