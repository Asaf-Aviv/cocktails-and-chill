import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { fetchCocktailsByName } from '../../store/cocktails/actions';
import CocktailsList from '../CocktailsList';

interface MatchParams {
  name: string;
}

const CocktailsByName: React.FC<RouteComponentProps<MatchParams>> = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const { name } = props.match.params;
    dispatch(fetchCocktailsByName(name));
  }, [dispatch, props]);

  return (
    <>
      <Helmet>
        <title>{`${props.match.params.name} Cocktails - Cocktails And Chill`}</title>
        <meta name="description" content={`${props.match.params.name.toLowerCase()} Cocktails`} />
      </Helmet>
      <CocktailsList />
    </>
  );
};

export default CocktailsByName;
