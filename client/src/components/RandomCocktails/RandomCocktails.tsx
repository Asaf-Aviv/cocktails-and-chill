import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Row, Col } from 'antd';
import { fetchRandomCocktails } from '../../store/randomCocktails/actions';
import useShallowEqualSelector from '../../hooks/useShallowEqualSelector';
import { RandomCocktailsState } from '../../store/randomCocktails/types';
import Loader from '../Loader';
import CocktailCard from '../CocktailCard';
import { ShortCocktailSummary } from '../../interfaces/Cocktail';

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

const RandomCocktails = () => {
  const dispatch = useDispatch();
  const { cocktails, loading, error }: RandomCocktailsState = useShallowEqualSelector(
    state => state.randomCocktails
  );

  const fetchCocktails = useCallback(() => {
    dispatch(fetchRandomCocktails());
  }, [dispatch]);

  useEffect(() => {
    fetchCocktails();
  }, [fetchCocktails]);

  return (
    <>
      <Button
        onClick={fetchCocktails}
        style={{
          marginBottom: 24,
          display: 'block',
          margin: '0 auto 24px',
          height: 50,
          width: 150,
          textTransform: 'uppercase',
          letterSpacing: 0.5,
          fontSize: 18,
        }}
      >
          Shake
      </Button>
      <Row
        gutter={12}
        style={{ position: 'relative', textAlign: 'center' }}
      >
        {loading && <Loader />}
        {error && <h3>Something went wrong :/</h3>}
        {cocktails && cocktails.map(renderCocktailCol)}
      </Row>
    </>
  );
};

export default RandomCocktails;
