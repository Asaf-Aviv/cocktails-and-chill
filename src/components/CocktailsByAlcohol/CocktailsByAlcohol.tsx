import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCocktailsByAlcoholFilter } from '../../store/cocktails/actions';
import CocktailsList from '../CocktailsList';

interface MatchParams {
  alcohol: string;
}

const CocktailsByAlcohol: React.FC<RouteComponentProps<MatchParams>> = (
  { match: { params: { alcohol } } }
) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCocktailsByAlcoholFilter(alcohol));
  }, [alcohol, dispatch]);

  return <CocktailsList />;
};

export default CocktailsByAlcohol;
