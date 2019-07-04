import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import useShallowEqualSelector from '../../hooks/useShallowEqualSelector';
import { fetchCocktailById, clearCocktailById } from '../../store/cocktails/actions';
import { CocktailsState } from '../../store/cocktails/types';

interface MatchParams {
  cocktailId: string;
}

const Cocktail: React.FC<RouteComponentProps<MatchParams>> = (
  { match: { params: { cocktailId } } }
) => {
  const dispatch = useDispatch();
  const {
    cocktail,
    loadingCocktailById,
    errorCocktailById,
  }: CocktailsState = useShallowEqualSelector(state => state.drinks);

  useEffect(() => {
    dispatch(fetchCocktailById(cocktailId));
  }, [cocktailId, dispatch]);

  useEffect(() => () => {
    dispatch(clearCocktailById());
  }, [dispatch]);

  if (loadingCocktailById) {
    return <p>loading</p>;
  }

  if (errorCocktailById) {
    return <p>error</p>;
  }

  if (!cocktail) {
    return <p>Cocktail not found</p>;
  }

  return <p>{cocktail.strDrink}</p> ;
};

export default Cocktail;
