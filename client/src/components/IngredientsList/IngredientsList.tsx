import React from 'react';
import useShallowEqualSelector from '../../hooks/useShallowEqualSelector';
import { IngredientsState } from '../../store/ingredients/types';
import Loader from '../Loader';
import IngredientCard from '../IngredientCard';
import { Ingredient } from '../../interfaces/Ingredient';

const renderIngredientCard = (ingredient: Ingredient) => (
  <IngredientCard key={ingredient.idIngredient} {...ingredient} />
);

const IngredientsList = () => {
  const { ingredients, loading, error }: IngredientsState = useShallowEqualSelector(state => (
    state.ingredients
  ));

  return (
    <div style={{ position: 'relative' }}>
      {loading && <Loader />}
      {error && <h3>Something went wrong :/</h3>}
      {ingredients && ingredients.map(renderIngredientCard)}
    </div>
  );
};

export default IngredientsList;
