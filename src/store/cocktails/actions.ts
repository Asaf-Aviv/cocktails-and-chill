import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Cocktail } from '../../interfaces/Cocktail';
import cocktailFetcher from '../../axios';
import { fetchIngredients } from '../ingredients/actions';
import { removeFalsyProps } from '../../utils/index';
import {
  FETCH_COCKTAILS,
  FETCH_COCKTAILS_SUCCESS,
  FETCH_COCKTAILS_ERROR,
  CocktailsActionTypes,
} from './types';

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

const fetchHelper = (
  fn: () => void,
  dispatch: ThunkDispatch<{}, {}, AnyAction>
): void => {
  dispatch(fetchCocktailsPending());

  try {
    fn();
  } catch (err) {
    dispatch(fetchCocktailsError());
    console.error(err);
  }
};

export const fetchCocktailsByName = (
  name: string
): ThunkAction<Promise<void>, {}, {}, AnyAction> => async (dispatch) => {
  fetchHelper(async () => {
    const drinks = await cocktailFetcher.fetchCocktailsByName(name);
    const ingredients = [...new Set(drinks.map(d => d.strIngredient1))];
    dispatch(fetchIngredients(ingredients));
    const filtered = removeFalsyProps(drinks) as Cocktail[];
    dispatch(fetchCocktailsSuccess(filtered));
  }, dispatch);
};

export const fetchCocktailsByIngredient = (
  ingredientName: string
): ThunkAction<Promise<void>, {}, {}, AnyAction> => async (dispatch) => {
  fetchHelper(async () => {
    dispatch(fetchIngredients([ingredientName]));
    const drinks = await cocktailFetcher.getCocktailsByIngredient(ingredientName);
    const filtered = removeFalsyProps(drinks) as Cocktail[];
    dispatch(fetchCocktailsSuccess(filtered));
  }, dispatch);
};

export const fetchCocktailsByAlcoholFilter = (
  alcoholFilter: string
): ThunkAction<Promise<void>, {}, {}, AnyAction> => async (dispatch) => {
  fetchHelper(async () => {
    const drinks = await cocktailFetcher.getCocktailsByAlcohol(alcoholFilter);
    const filtered = removeFalsyProps(drinks) as Cocktail[];
    dispatch(fetchCocktailsSuccess(filtered));
  }, dispatch);
};

export const fetchCocktailsByCategory = (
  category: string
): ThunkAction<Promise<void>, {}, {}, AnyAction> => async (dispatch) => {
  fetchHelper(async () => {
    const drinks = await cocktailFetcher.getCocktailsByCategory(category.replace(' ', '_'));
    const filtered = removeFalsyProps(drinks) as Cocktail[];
    dispatch(fetchCocktailsSuccess(filtered));
  }, dispatch);
};

export const fetchCocktailsByGlass = (
  glass: string
): ThunkAction<Promise<void>, {}, {}, AnyAction> => async (dispatch) => {
  fetchHelper(async () => {
    const drinks = await cocktailFetcher.getCocktailsByGlass(glass.replace(' ', '_'));
    const filtered = removeFalsyProps(drinks) as Cocktail[];
    dispatch(fetchCocktailsSuccess(filtered));
  }, dispatch);
};
