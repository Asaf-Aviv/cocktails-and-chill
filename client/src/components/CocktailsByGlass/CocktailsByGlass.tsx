import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
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
      <Helmet>
        <title>{`${glass} Cocktails - Cocktails And Chill`}</title>
        <meta name="description" content={`List of ${glass.toLowerCase()} cocktails`} />
      </Helmet>
      <Breadcrumbs routes={[...baseRoutes, { title: glass }]} />
      <CocktailsList />
    </>
  );
};

export default CocktailsByGlass;
