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
    sm={12}
    lg={8}
    xl={6}
    style={{ marginBottom: 12 }}
    key={cocktail.idDrink}
  >
    <CocktailCard {...cocktail} />
  </Col>
);

const CocktailsList: React.FC = () => {
  const {
    drinks: { loading, error, cocktails },
  }: AppState = useShallowEqualSelector(state => state);

  return (
    <Row
      type="flex"
      gutter={12}
      style={{ position: 'relative', textAlign: 'center' }}
    >
      {loading && <Loader />}
      {error && <h3>Something went wrong :/</h3>}
      {!loading && !cocktails.length && <h3>No cocktails found.</h3>}
      {cocktails && cocktails.map(renderCocktailCol)}
    </Row>
  );
};

export default CocktailsList;
