import React from 'react';
import { Row, Col, Card } from 'antd';
import { Link } from 'react-router-dom';
import Meta from 'antd/lib/card/Meta';
import useShallowEqualSelector from '../../hooks/useShallowEqualSelector';
import CocktailCard from '../CocktailCard';
import Loader from '../Loader';
import { ShortCocktailSummary } from '../../interfaces/Cocktail';
import { AppState } from '../../store';
import { Ingredient } from '../../interfaces/Ingredient';

const renderCocktailCol = (cocktail: ShortCocktailSummary) => (
  <Col
    xs={24}
    sm={24}
    md={12}
    lg={8}
    xl={6}
    style={{ marginBottom: 8 }}
    key={cocktail.idDrink}
  >
    <CocktailCard {...cocktail} />
  </Col>
);

const IngredientCard: React.FC<Ingredient> = ({
  strIngredient,
  strDescription,
}) => (
  <div className="ingredient-card">
    <Link to={`/ingredient/${strIngredient}`}>
      <Card
        hoverable={true}
        cover={(
          <img
            alt={strIngredient}
            src={`https://www.thecocktaildb.com/images/ingredients/${strIngredient}.png`}
          />
        )}
      >
        <Meta title={strIngredient} description={strDescription} />
      </Card>
    </Link>
  </div>
);

const renderIngredientCol = (ingredient: Ingredient) => (
  <IngredientCard {...ingredient} />
);

const CocktailsList: React.FC = () => {
  const { drinks, ingredients }: AppState = useShallowEqualSelector(state => state);

  return (
    <Row gutter={8}>
      <Col sm={12} md={14} lg={16} xl={16}>
        <Row style={{ position: 'relative', textAlign: 'center' }} gutter={8}>
          {drinks.loading && <Loader />}
          {drinks.error && <h3>Something went wrong :/</h3>}
          {drinks.cocktails && drinks.cocktails.map(renderCocktailCol)}
        </Row>
      </Col>
      <Col sm={12} md={10} lg={8} xl={8}>
        {ingredients.ingredients.map(renderIngredientCol)}
      </Col>
    </Row>
  );
};

export default CocktailsList;
