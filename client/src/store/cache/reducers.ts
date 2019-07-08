import {
  CACHE_COCKTAIL,
  CocktailsCacheState,
  CocktailsCacheActionTypes,
} from './types';

const initialState: CocktailsCacheState = {
  cocktails: {},
};

export default (
  state = initialState,
  action: CocktailsCacheActionTypes
): CocktailsCacheState => {
  switch (action.type) {
    case CACHE_COCKTAIL:
      return {
        cocktails: {
          ...state.cocktails,
          [action.cocktail.idDrink]: action.cocktail,
        },
      };
    default:
      return state;
  }
};
