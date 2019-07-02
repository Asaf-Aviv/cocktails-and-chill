import React from 'react';
import useShallowEqualSelector from '../../hooks/useShallowEqualSelector';
import { IngredientsState } from '../../store/ingredients/types';
import Loader from '../Loader';

const Ingredients = () => {
  const { ingredients, loading, error }: IngredientsState = useShallowEqualSelector(state => (
    state.ingredients
  ));

  return (
    <div className="ingredients">
      {loading && <Loader />}
      {error && <h3>Something went wrong :/</h3>}
      {ingredients && ingredients.map(i => <p key={i.idIngredient}>{i.strDescription}</p>)}
    </div>
  );
};

export default Ingredients;
