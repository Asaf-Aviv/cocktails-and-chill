import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Col, Row } from 'antd';
import { fetchCocktailsByIngredient } from '../../store/cocktails/actions';
import CocktailsList from '../CocktailsList';
import IngredientsList from '../IngredientsList';
import Breadcrumbs from '../Breadcrumbs';

interface MatchParams {
  ingredient: string;
}

const baseRoutes = [
  { to: '/', title: 'Home' },
  { to: '/ingredients', title: 'Ingredients' },
];

const CocktailsByIngredient: React.FC<RouteComponentProps<MatchParams>> = (
  { match: { params: { ingredient } } }
) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCocktailsByIngredient(ingredient));
  }, [dispatch, ingredient]);

  return (
    <>
      <Breadcrumbs routes={[...baseRoutes, { title: ingredient }]} />
      <Row gutter={12} style={{ textAlign: 'center' }}>
        <Col sm={12} md={14} lg={14} xl={18}>
          <CocktailsList />
        </Col>
        <Col sm={12} md={10} lg={10} xl={6}>
          <IngredientsList />
        </Col>
      </Row>
    </>
  );
};

export default CocktailsByIngredient;
