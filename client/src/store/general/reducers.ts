import {
  SET_CATEGORIES,
  SET_GLASSES,
  GeneralState,
  GeneralActionTypes,
  SET_INGREDIENTS,
} from './types';

const initialState: GeneralState = {
  categories: [],
  glasses: [],
  ingredients: [],
};

export default (
  state = initialState,
  action: GeneralActionTypes,
): GeneralState => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.categories.filter(Boolean),
      };
    case SET_GLASSES:
      return {
        ...state,
        glasses: action.glasses.filter(Boolean),
      };
    case SET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.ingredients.filter(Boolean),
      };
    default:
      return state;
  }
};
