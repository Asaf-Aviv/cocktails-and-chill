import React from 'react';
import Meta from 'antd/lib/card/Meta';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { Ingredient } from '../../interfaces/Ingredient';

import './IngredientCard.sass';

const IngredientCard: React.FC<Ingredient> = ({
  strIngredient,
  strDescription,
}) => (
  <div className="ingredient-card">
    <Link to={`/ingredient/${strIngredient}`}>
      <Card
        style={{ paddingTop: 24 }}
        hoverable={true}
        cover={
          <img
            alt={strIngredient}
            src={`https://www.thecocktaildb.com/images/ingredients/${strIngredient}.png`}
          />
        }
      >
        <Meta title={strIngredient} description={strDescription} />
      </Card>
    </Link>
  </div>
);

export default IngredientCard;
