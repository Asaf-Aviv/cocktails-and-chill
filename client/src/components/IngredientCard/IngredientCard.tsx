import React from 'react';
import Meta from 'antd/lib/card/Meta';
import { Helmet } from 'react-helmet';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { Ingredient } from '../../interfaces/Ingredient';

import './IngredientCard.sass';

const IngredientCard: React.FC<Ingredient> = ({
  strIngredient,
  strDescription,
}) => (
  <div style={{ borderRadius: 6 }}>
    <Helmet>
      <meta name="ingredient" content={strDescription} />
    </Helmet>
    <Link to={`/ingredient/${strIngredient}`}>
      <Card
        style={{ paddingTop: 24 }}
        hoverable={true}
        className="ingredient-card"
        cover={
          <img
            alt={strIngredient}
            src={`https://www.thecocktaildb.com/images/ingredients/${strIngredient}.png`}
          />
        }
      >
        <Meta
          style={{ fontSize: 16, whiteSpace: 'pre-wrap' }}
          title={strIngredient}
          description={strDescription}
        />
      </Card>
    </Link>
  </div>
);

export default IngredientCard;
