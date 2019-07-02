import {
  IngredientsState,
  IngredientsActionTypes,
  FETCH_INGREDIENT,
  FETCH_INGREDIENT_SUCCESS,
  FETCH_INGREDIENT_ERROR,
} from './types';

const initialState: IngredientsState = {
  ingredients: [],
  loading: false,
  error: false,
};

export default (
  state = initialState,
  action: IngredientsActionTypes
): IngredientsState => {
  switch (action.type) {
    case FETCH_INGREDIENT:
      return {
        ingredients: [],
        loading: true,
        error: false,
      };
    case FETCH_INGREDIENT_SUCCESS:
      return {
        ingredients: action.ingredients,
        loading: false,
        error: false,
      };
    case FETCH_INGREDIENT_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
