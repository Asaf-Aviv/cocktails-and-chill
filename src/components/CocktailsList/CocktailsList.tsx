import React from 'react';
import { Row, Col } from 'antd';
import useShallowEqualSelector from '../../hooks/useShallowEqualSelector';
import CocktailCard from '../CocktailCard';
import Loader from '../Loader';
import { ShortCocktailSummary } from '../../interfaces/Cocktail';
import { AppState } from '../../store';

const renderCocktailCol = (cocktail: ShortCocktailSummary) => (
  <Col
    xs={24}
    sm={24}
    md={12}
    lg={8}
    xl={6}
    style={{ marginBottom: 12 }}
    key={cocktail.idDrink}
  >
    <CocktailCard {...cocktail} />
  </Col>
);

const CocktailsList: React.FC = () => {
  const { drinks }: AppState = useShallowEqualSelector(state => state);

  return (
    <Row
      gutter={12}
      style={{ position: 'relative', textAlign: 'center' }}
    >
      {drinks.loading && <Loader />}
      {drinks.error && <h3>Something went wrong :/</h3>}
      {drinks.cocktails && drinks.cocktails.map(renderCocktailCol)}
    </Row>
  );
};

export default CocktailsList;
