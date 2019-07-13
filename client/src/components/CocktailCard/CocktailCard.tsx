import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { ShortCocktailSummary } from '../../interfaces/Cocktail';

import './CocktailCard.sass';
import Loader from '../Loader';

const { Meta } = Card;

const CocktailCard: React.FC<ShortCocktailSummary> = ({
  idDrink,
  strDrink,
  strDrinkThumb,
}) => {
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: '400px',
    triggerOnce: true,
  });
  const [isImageLoaded, setIsImageLoadedLoaded] = useState(false);

  useEffect(() => {
    if (inView) {
      const image = new Image();
      image.onload = () => setIsImageLoadedLoaded(true);
      image.src = strDrinkThumb;
    }
  }, [inView, strDrinkThumb]);

  useEffect(() => {
    console.log(isImageLoaded, inView);
  });

  return (
    <div style={{ minHeight: 200, height: '100%' }} ref={ref}>
      {!inView || !isImageLoaded && <Loader />}
      {inView && isImageLoaded && (
        <div className="cocktail-card">
          <Link to={`/cocktail/${idDrink}`}>
            <Card
              hoverable={true}
              size="small"
              bodyStyle={{ padding: '24px 0' }}
              cover={(
                <img
                  className="cocktail-card__img"
                  src={strDrinkThumb}
                  alt={strDrink}
                />
              )}
            >
              <Meta title={strDrink} />
            </Card>
          </Link>
        </div>
      )}
    </div>
  );
};

//<ImageLoader src={strDrinkThumb} alt={strDrink} /> */

export default CocktailCard;
