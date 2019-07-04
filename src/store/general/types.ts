export interface GeneralState {
  categories: string[];
  glasses: string[];
  ingredients: string[];
}

export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_GLASSES = 'SET_GLASSES';
export const SET_INGREDIENTS = 'SET_INGREDIENTS';

interface SetCategoriesAction {
  type: typeof SET_CATEGORIES;
  categories: string[];
}

interface SetGlassesAction {
  type: typeof SET_GLASSES;
  glasses: string[];
}

interface SetIngredientsAction {
  type: typeof SET_INGREDIENTS;
  ingredients: string[];
}

export type GeneralActionTypes = (
  SetCategoriesAction
  | SetGlassesAction
  | SetIngredientsAction
);
