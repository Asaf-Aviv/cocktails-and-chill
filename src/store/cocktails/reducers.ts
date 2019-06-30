import {
  CocktailsState,
  CocktailsActionTypes,
  FETCH_COCKTAILS,
  FETCH_COCKTAILS_SUCCESS,
  FETCH_COCKTAILS_ERROR,
} from './types';

const initialState: CocktailsState = {
  cocktails: [],
  loading: false,
  error: false,
};

export default (
  state = initialState,
  action: CocktailsActionTypes
): CocktailsState => {
  switch (action.type) {
    case FETCH_COCKTAILS:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case FETCH_COCKTAILS_SUCCESS:
      return {
        cocktails: action.cocktails,
        loading: false,
        error: false,
      };
    case FETCH_COCKTAILS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
