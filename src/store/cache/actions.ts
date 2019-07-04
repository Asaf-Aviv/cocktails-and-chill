import { Cocktail } from '../../interfaces/Cocktail';
import { CACHE_COCKTAIL, CocktailsCacheActionTypes } from './types';

export const cacheCocktail = (cocktail: Cocktail): CocktailsCacheActionTypes => ({
  type: CACHE_COCKTAIL,
  cocktail,
});
