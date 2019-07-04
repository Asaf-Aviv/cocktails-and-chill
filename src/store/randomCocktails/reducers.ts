import {
  RandomCocktailsState,
  RandomCocktailsActionTypes,
  FETCH_RANDOM_COCKTAILS,
  FETCH_RANDOM_COCKTAILS_SUCCESS,
  FETCH_RANDOM_COCKTAILS_ERROR,
} from './types';

const initialState: RandomCocktailsState = {
  cocktails: [],
  loading: false,
  error: false,
};

export default (
  state = initialState,
  action: RandomCocktailsActionTypes
): RandomCocktailsState => {
  switch (action.type) {
    case FETCH_RANDOM_COCKTAILS:
      return {
        cocktails: [],
        loading: true,
        error: false,
      };
    case FETCH_RANDOM_COCKTAILS_SUCCESS:
      return {
        cocktails: action.cocktails,
        loading: false,
        error: false,
      };
    case FETCH_RANDOM_COCKTAILS_ERROR:
      return {
        cocktails: [],
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
