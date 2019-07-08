import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import cocktailFetcher from '../../axios';
import {
  SET_CATEGORIES,
  SET_GLASSES,
  SET_INGREDIENTS,
  GeneralActionTypes,
} from './types';

const setCategories = (categories: string[]): GeneralActionTypes => ({
  type: SET_CATEGORIES,
  categories,
});

const setGlasses = (glasses: string[]): GeneralActionTypes => ({
  type: SET_GLASSES,
  glasses,
});

const setIngredients = (ingredients: string[]): GeneralActionTypes => ({
  type: SET_INGREDIENTS,
  ingredients,
});

export const fetchAllCategories = (): ThunkAction<Promise<void>, {}, {}, AnyAction> =>
  async (dispatch) => {
    try {
      const categories = await cocktailFetcher.getAllCategories();
      categories.sort();
      dispatch(setCategories(categories));
    } catch (err) {
      console.error(err);
    }
  };

export const fetchAllGlasses = (): ThunkAction<Promise<void>, {}, {}, AnyAction> =>
  async (dispatch) => {
    try {
      const glasses = await cocktailFetcher.getAllGlasses();
      glasses.sort();
      dispatch(setGlasses(glasses));
    } catch (err) {
      console.error(err);
    }
  };

export const fetchAllIngredients = (): ThunkAction<Promise<void>, {}, {}, AnyAction> =>
  async (dispatch) => {
    try {
      const ingredients = await cocktailFetcher.getAllIngredients();
      ingredients.sort();
      dispatch(setIngredients(ingredients));
    } catch (err) {
      console.error(err);
    }
  };
