import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchCocktailsByCategory } from '../../store/cocktails/actions';
import CocktailsList from '../CocktailsList';
import Breadcrumbs from '../Breadcrumbs';

interface MatchParams {
  category: string;
}

const baseRoutes = [
  { to: '/', title: 'Home' },
  { to: '/categories', title: 'Categories' },
];

const CocktailsByCategory: React.FC<RouteComponentProps<MatchParams>> = (
  { match: { params: { category } } }
) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCocktailsByCategory(category));
  }, [category, dispatch]);

  return (
    <>
      <Helmet>
        <title>{`${category} Cocktails - Cocktails And Chill`}</title>
        <meta name="description" content={`${category} Cocktails`} />
      </Helmet>
      <Breadcrumbs routes={[...baseRoutes, { title: category }]} />
      <CocktailsList />
    </>
  );
};

export default CocktailsByCategory;
