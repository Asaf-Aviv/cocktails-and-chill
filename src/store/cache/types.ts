import { Cocktail } from '../../interfaces/Cocktail';

export interface CocktailsCacheState {
  cocktails: {
    [coctailId: string]: Cocktail;
  };
}

export const CACHE_COCKTAIL = 'CHACHE_COCKTAIL';

interface CacheCocktailsAction {
  type: typeof CACHE_COCKTAIL;
  cocktail: Cocktail;
}

export type CocktailsCacheActionTypes = (
  CacheCocktailsAction
);
