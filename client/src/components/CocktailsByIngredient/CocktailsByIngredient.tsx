import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Col, Row } from 'antd';
import { Helmet } from 'react-helmet';
import { fetchCocktailsByIngredient } from '../../store/cocktails/actions';
import CocktailsList from '../CocktailsList';
import IngredientsList from '../IngredientsList';
import Breadcrumbs from '../Breadcrumbs';
import useWindowWidth from '../../hooks/useWindowWidth';

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
  const width = useWindowWidth();

  useEffect(() => {
    dispatch(fetchCocktailsByIngredient(ingredient));
  }, [dispatch, ingredient]);

  return (
    <>
      <Helmet>
        <title>{`${ingredient} Cocktails - Cocktails And Chill`}</title>
        <meta name="description" content={`${ingredient} Cocktails`} />
      </Helmet>
      <Breadcrumbs routes={[...baseRoutes, { title: ingredient }]} />
      <Row type="flex" gutter={12} style={{ textAlign: 'center' }}>
        <Col order={2} xs={24} sm={12} md={14} lg={14} xl={18}>
          <CocktailsList />
        </Col>
        <Col order={width <= 575 ? 1 : 2} xs={24} sm={12} md={10} lg={10} xl={6}>
          <IngredientsList />
        </Col>
      </Row>
    </>
  );
};

export default CocktailsByIngredient;
