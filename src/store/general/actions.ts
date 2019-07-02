import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import cocktailFetcher from '../../axios';
import {
  SET_CATEGORIES,
  SET_GLASSES,
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

export const fetchAllCategories = (): ThunkAction<Promise<void>, {}, {}, AnyAction> =>
  async (dispatch) => {
    try {
      const categories = await cocktailFetcher.getAllCategories();
      dispatch(setCategories(categories));
    } catch (err) {
      console.error(err);
    }
  };

export const fetchAllGlasses = (): ThunkAction<Promise<void>, {}, {}, AnyAction> =>
  async (dispatch) => {
    try {
      const glasses = await cocktailFetcher.getAllGlasses();
      dispatch(setGlasses(glasses));
    } catch (err) {
      console.error(err);
    }
  };
