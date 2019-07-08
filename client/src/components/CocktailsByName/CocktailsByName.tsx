import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
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

  return <CocktailsList />;
};

export default CocktailsByName;
