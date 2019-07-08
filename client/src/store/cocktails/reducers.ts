import {
  CocktailsState,
  CocktailsActionTypes,
  FETCH_COCKTAILS,
  FETCH_COCKTAILS_SUCCESS,
  FETCH_COCKTAILS_ERROR,
  FETCH_COCKTAIL_BY_ID,
  FETCH_COCKTAIL_BY_ID_SUCCESS,
  FETCH_COCKTAIL_BY_ID_ERROR,
  CLEAR_COCKTAIL_BY_ID,
} from './types';

const initialState: CocktailsState = {
  cocktails: [],
  loading: false,
  error: false,
  cocktail: null,
  loadingCocktailById: false,
  errorCocktailById: false,
};

export default (
  state = initialState,
  action: CocktailsActionTypes
): CocktailsState => {
  switch (action.type) {
    case FETCH_COCKTAILS:
      return {
        ...state,
        cocktails: [],
        loading: true,
        error: false,
      };
    case FETCH_COCKTAILS_SUCCESS:
      return {
        ...state,
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
    case FETCH_COCKTAIL_BY_ID:
      return {
        ...state,
        cocktail: null,
        loadingCocktailById: true,
        errorCocktailById: false,
      };
    case FETCH_COCKTAIL_BY_ID_SUCCESS:
      return {
        ...state,
        cocktail: action.cocktail,
        loadingCocktailById: false,
        errorCocktailById: false,
      };
    case FETCH_COCKTAIL_BY_ID_ERROR:
      return {
        ...state,
        cocktail: null,
        loadingCocktailById: false,
        errorCocktailById: true,
      };
    case CLEAR_COCKTAIL_BY_ID:
      return {
        ...state,
        cocktail: null,
        loadingCocktailById: false,
        errorCocktailById: false,
      };
    default:
      return state;
  }
};

