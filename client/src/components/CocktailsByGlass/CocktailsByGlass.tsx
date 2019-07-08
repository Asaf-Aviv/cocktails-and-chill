import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCocktailsByGlass } from '../../store/cocktails/actions';
import CocktailsList from '../CocktailsList';
import Breadcrumbs from '../Breadcrumbs';

interface MatchParams {
  glass: string;
}

const baseRoutes = [
  { to: '/', title: 'Home' },
  { to: '/glasses', title: 'Glasses' },
];

const CocktailsByGlass: React.FC<RouteComponentProps<MatchParams>> = (
  { match: { params: { glass } } }
) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCocktailsByGlass(glass));
  }, [dispatch, glass]);

  return (
    <>
      <Breadcrumbs routes={[...baseRoutes, { title: glass }]} />
      <CocktailsList />
    </>
  );
};

export default CocktailsByGlass;
