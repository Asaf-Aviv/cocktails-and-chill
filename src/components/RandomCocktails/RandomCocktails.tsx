import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRandomCocktails } from '../../store/randomCocktails/actions';
import useShallowEqualSelector from '../../hooks/useShallowEqualSelector';
import { RandomCocktailsState } from '../../store/randomCocktails/types';
import Loader from '../Loader';
import CocktailCard from '../CocktailCard';

const RandomCocktails = () => {
  const dispatch = useDispatch();
  const { cocktails, loading, error }: RandomCocktailsState = useShallowEqualSelector(
    state => state.randomCocktails
  );

  const fetchCocktails = useCallback(() => {
    dispatch(fetchRandomCocktails());
  }, [dispatch]);

  useEffect(() => {
    fetchCocktails();
  }, [fetchCocktails]);

  return (
    <>
      <button type="button" onClick={fetchCocktails}>Shake</button>
      <div className="random-cocktails">
        {loading && <Loader />}
        {error && <h3>Something went wrong :/</h3>}
        {cocktails && cocktails.map(c => <CocktailCard key={c.idDrink} {...c} />)}
      </div>
    </>
  );
};

export default RandomCocktails;
