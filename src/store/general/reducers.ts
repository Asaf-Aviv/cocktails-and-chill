import {
  SET_CATEGORIES,
  SET_GLASSES,
  GeneralState,
  GeneralActionTypes,
} from './types';

const initialState: GeneralState = {
  categories: [],
  glasses: [],
};

export default (
  state = initialState,
  action: GeneralActionTypes,
): GeneralState => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };
    case SET_GLASSES:
      return {
        ...state,
        glasses: action.glasses,
      };
    default:
      return state;
  }
};
