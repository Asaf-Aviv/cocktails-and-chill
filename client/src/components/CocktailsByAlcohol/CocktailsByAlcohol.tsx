import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
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

  console.log(alcohol);

  return (
    <>
      <Helmet>
        <title>{`${alcohol} Cocktails - Cocktails And Chill`}</title>
        <meta name="description" content={`List of ${alcohol.toLowerCase()} cocktails`} />
      </Helmet>
      <CocktailsList />
    </>
  );
};

export default CocktailsByAlcohol;
