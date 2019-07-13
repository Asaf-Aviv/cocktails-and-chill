import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Row, Col, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import useShallowEqualSelector from '../../hooks/useShallowEqualSelector';
import { fetchCocktailById, clearCocktailById } from '../../store/cocktails/actions';
import { CocktailsState } from '../../store/cocktails/types';
import useWindowWidth from '../../hooks/useWindowWidth';

interface MatchParams {
  cocktailId: string;
}

const { Title, Paragraph } = Typography;

const Cocktail: React.FC<RouteComponentProps<MatchParams>> = (
  { match: { params: { cocktailId } } }
) => {
  const dispatch = useDispatch();
  const width = useWindowWidth();
  const {
    cocktail,
    loadingCocktailById,
    errorCocktailById,
  }: CocktailsState = useShallowEqualSelector(state => state.drinks);

  useEffect(() => {
    dispatch(fetchCocktailById(cocktailId));
  }, [cocktail, cocktailId, dispatch]);

  useEffect(() => () => {
    dispatch(clearCocktailById());
  }, [dispatch]);

  if (loadingCocktailById) {
    return <p>loading</p>;
  }

  if (errorCocktailById) {
    return <p>error</p>;
  }

  if (!cocktail) {
    return <p>Cocktail not found</p>;
  }

  const ingredients = Object.keys(cocktail)
    .filter(key => key.startsWith('strIngredient'))
    .map(key => cocktail[key]) as string [];

  const measures: string[] = Object.keys(cocktail)
    .filter(key => key.startsWith('strMeasure'))
    .map(key => cocktail[key]) as string[];

  return (
    <>
      <Helmet>
        <title>{`${cocktail.strDrink} - Cocktails And Chill`}</title>
        <meta name="description" content={`${cocktail.strDrink} Cocktails`} />
        <meta
          name={`how to make ${cocktail.strDrink}`}
          content={cocktail.strInstructions}
        />
      </Helmet>
      <Title style={{ textAlign: 'center', marginBottom: '1em' }}>{cocktail.strDrink}</Title>
      <Row style={{ textAlign: 'center' }} gutter={12}>
        <Col style={{ fontWeight: 600 }} sm={24} md={12} lg={8} xl={6}>
          <img
            src={cocktail.strDrinkThumb}
            alt={cocktail.strDrink}
            style={{
              width: '100%',
              borderRadius: 6,
              boxShadow: '0 2px 8px #e6e6e6',
            }}
          />
          <div style={{ marginBottom: '0.5em', marginTop: '0.5em' }}>
            Category:
            <Link style={{ marginLeft: 8 }} to={`/category/${cocktail.strCategory}`}>
              {cocktail.strCategory}
            </Link>
          </div>
          <div style={{ marginBottom: '0.5em' }}>
            Glass:
            <Link style={{ marginLeft: 8 }} to={`/glass/${cocktail.strGlass}`}>
              {cocktail.strGlass}
            </Link>
          </div>
        </Col>
        <Col style={{ fontWeight: 600 }} lg={16} xl={18}>
          <Title style={{ marginBottom: '1em' }} level={2}>Ingredients</Title>
          <Row type="flex" justify="start" style={{ textAlign: 'center' }}>
            {ingredients.map((ingredient, i) => (
              <Col xs={12} md={8} lg={6} key={ingredient}>
                <div style={{ marginBottom: '0.5em' }}>
                  <img
                    src={`https://www.thecocktaildb.com/images/ingredients/${ingredient}.png`}
                    style={{ maxWidth: '100%', marginBottom: '0.5em' }}
                    alt={ingredient}
                  />
                  <span style={{ display: 'block', marginBottom: '0.3em' }}>{ingredient}</span>
                  <span style={{ display: 'block', marginBottom: '0.3em' }}>{measures[i]}</span>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <div style={{ marginTop: 24, textAlign: width >= 768 ? 'left' : 'center' }}>
        <Title style={{ marginBottom: '1em' }} level={2}>Instructions</Title>
        {cocktail.strInstructions.split('.').map(inst => (
          inst
            ? <Paragraph style={{ fontSize: 18 }} key={inst}>{inst + '.'}</Paragraph>
            : null
        ))}
      </div>
    </>
  );
};

export default Cocktail;
