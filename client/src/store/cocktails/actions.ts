import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { Cocktail } from '../../interfaces/Cocktail';
import cocktailFetcher from '../../axios';
import { fetchIngredients } from '../ingredients/actions';
import { removeFalsyProps } from '../../utils/index';
import { cacheCocktail } from '../cache/actions';
import { AppState } from '../index';
import {
  FETCH_COCKTAILS,
  FETCH_COCKTAILS_SUCCESS,
  FETCH_COCKTAILS_ERROR,
  FETCH_COCKTAIL_BY_ID,
  FETCH_COCKTAIL_BY_ID_SUCCESS,
  FETCH_COCKTAIL_BY_ID_ERROR,
  CocktailsActionTypes,
  CLEAR_COCKTAIL_BY_ID,
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

const fetchCocktailByIdPending = (): CocktailsActionTypes => ({
  type: FETCH_COCKTAIL_BY_ID,
});

const fetchCocktailByIdSuccess = (cocktail: Cocktail | null): CocktailsActionTypes => ({
  type: FETCH_COCKTAIL_BY_ID_SUCCESS,
  cocktail,
});

const fetchCocktailByIdError = (): CocktailsActionTypes => ({
  type: FETCH_COCKTAIL_BY_ID_ERROR,
});

export const clearCocktailById = (): CocktailsActionTypes => ({
  type: CLEAR_COCKTAIL_BY_ID,
});

export const fetchCocktailById = (
  cocltailId: string
): ThunkAction<Promise<void>, {}, {}, AnyAction> => async (dispatch, getState) => {
  dispatch(fetchCocktailByIdPending());

  const { cache: { cocktails } } = getState() as AppState;

  const cachedCocktail: Cocktail | undefined = cocktails[cocltailId];

  if (cachedCocktail) {
    dispatch(fetchCocktailByIdSuccess(cachedCocktail));
    return;
  }

  try {
    const cocktail = await cocktailFetcher.fetchCocktailById(cocltailId);
    if (!cocktail) {
      console.log('not found');
      dispatch(fetchCocktailByIdSuccess(null));
      return;
    }
    const filtered = removeFalsyProps([cocktail]) as Cocktail[];
    dispatch(fetchCocktailByIdSuccess(filtered[0]));
    dispatch(cacheCocktail(filtered[0]));
  } catch (err) {
    console.error(err);
    dispatch(fetchCocktailByIdError());
  }
};

export const fetchCocktailsByName = (
  name: string
): ThunkAction<Promise<void>, {}, {}, AnyAction> => async (dispatch) => {
  dispatch(fetchCocktailsPending());

  try {
    const drinks = await cocktailFetcher.fetchCocktailsByName(name);
    if (!drinks) {
      dispatch(fetchCocktailsSuccess([]));
      return;
    }
    const ingredients = [...new Set(drinks.map(d => d.strIngredient1))];
    dispatch(fetchIngredients(ingredients));
    const filtered = removeFalsyProps(drinks) as Cocktail[];
    dispatch(fetchCocktailsSuccess(filtered));
    filtered.map(c => dispatch(cacheCocktail(c)));
  } catch (err) {
    console.error(err);
    dispatch(fetchCocktailsError());
  }
};

export const fetchCocktailsByIngredient = (
  ingredientName: string
): ThunkAction<Promise<void>, {}, {}, AnyAction> => async (dispatch) => {
  dispatch(fetchCocktailsPending());

  try {
    dispatch(fetchIngredients([ingredientName]));
    const drinks = await cocktailFetcher.getCocktailsByIngredient(ingredientName);
    if (!drinks) {
      dispatch(fetchCocktailsSuccess([]));
      return;
    }
    const filtered = removeFalsyProps(drinks) as Cocktail[];
    dispatch(fetchCocktailsSuccess(filtered));
  } catch (err) {
    console.error(err);
    dispatch(fetchCocktailsError());
  }
};

export const fetchCocktailsByAlcoholFilter = (
  alcoholFilter: string
): ThunkAction<Promise<void>, {}, {}, AnyAction> => async (dispatch) => {
  dispatch(fetchCocktailsPending());

  try {
    const drinks = await cocktailFetcher.getCocktailsByAlcohol(alcoholFilter);
    const filtered = removeFalsyProps(drinks) as Cocktail[];
    dispatch(fetchCocktailsSuccess(filtered));
  } catch (err) {
    console.error(err);
    dispatch(fetchCocktailsError());
  }
};

export const fetchCocktailsByCategory = (
  category: string
): ThunkAction<Promise<void>, {}, {}, AnyAction> => async (dispatch) => {
  dispatch(fetchCocktailsPending());

  try {
    const drinks = await cocktailFetcher.getCocktailsByCategory(category);
    const filtered = removeFalsyProps(drinks) as Cocktail[];
    dispatch(fetchCocktailsSuccess(filtered));
  } catch (err) {
    console.error(err);
    dispatch(fetchCocktailsError());
  }
};

export const fetchCocktailsByGlass = (
  glass: string
): ThunkAction<Promise<void>, {}, {}, AnyAction> => async (dispatch) => {
  dispatch(fetchCocktailsPending());
  try {
    const drinks = await cocktailFetcher.getCocktailsByGlass(glass.replace(' ', '_'));
    const filtered = removeFalsyProps(drinks) as Cocktail[];
    dispatch(fetchCocktailsSuccess(filtered));
  } catch (err) {
    console.error(err);
    dispatch(fetchCocktailsError());
  }
};
