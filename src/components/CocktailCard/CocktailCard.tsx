import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { ShortCocktailSummary } from '../../interfaces/Cocktail';

const { Meta } = Card;

const CocktailCard: React.FC<ShortCocktailSummary> = ({
  idDrink,
  strDrink,
  strDrinkThumb,
}) => (
  <div className="cocktail-card">
    <Link to={`/cocktail/${idDrink}`}>
      <Card
        hoverable={true}
        size="small"
        bodyStyle={{ padding: 12 }}
        cover={<img className="cocktail-card__img" alt={strDrink} src={strDrinkThumb} />}
      >
        <Meta title={strDrink} />
      </Card>
    </Link>
  </div>
);

export default CocktailCard;
