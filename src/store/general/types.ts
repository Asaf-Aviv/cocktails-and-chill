export interface GeneralState {
  categories: string[];
  glasses: string[];
}

export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_GLASSES = 'SET_GLASSES';

interface SetCategoriesAction {
  type: typeof SET_CATEGORIES;
  categories: string[];
}

interface SetGlassesAction {
  type: typeof SET_GLASSES;
  glasses: string[];
}

export type GeneralActionTypes = SetCategoriesAction | SetGlassesAction;
