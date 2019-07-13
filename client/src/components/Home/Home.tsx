import React from 'react';
import { Helmet } from 'react-helmet';
import { Typography, Row, Col } from 'antd';
import FeatureCard from '../FeatureCard';
import { ReactComponent as LogoIcon } from '../../assets/logo.svg';
import { ReactComponent as LemonIcon } from '../../assets/icons/lemon.svg';
import { ReactComponent as GlassIcon } from '../../assets/icons/glass_1.svg';
import { ReactComponent as RandomIcon } from '../../assets/icons/random.svg';
import { ReactComponent as ChampagneIcon } from '../../assets/icons/champagne.svg';

const { Title } = Typography;

const renderFeatureCol = (
  title: string,
  description: string,
  href: string,
  svg: any,
) => (
  <Col
    style={{ marginBottom: 24 }}
    xs={24}
    sm={12}
    lg={8}
  >
    <FeatureCard
      title={title}
      description={description}
      Svg={svg}
      href={href}
    />
  </Col>
);

const Home: React.FC = () => (
  <>
    <Helmet>
      <title>Cocktails And Chill</title>
      <meta
        name="description"
        // eslint-disable-next-line max-len
        content="Explore the world of Cocktails with ease. Discover cocktail recipes, ingredients, glasses and more."
      />
    </Helmet>
    <div style={{ textAlign: 'center', marginBottom: 24 }}>
      <Title>Cocktails And Chill</Title>
      <Title style={{ fontWeight: 400, marginBottom: 64 }} level={3}>
        Explore the world of Cocktails with ease.
      </Title>
    </div>
    <Row type="flex" justify="center">
      <Col lg={24} xl={20}>
        <Row type="flex" gutter={24}>
          {renderFeatureCol(
            'Explore',
            'Discover new cocktail recipes',
            '/alcohol/Alcoholic',
            LogoIcon
          )}
          {renderFeatureCol(
            'Ingredients',
            'Find new cocktails with the ingredients that you love',
            '/ingredients',
            LemonIcon
          )}
          {renderFeatureCol(
            'Glasses',
            'Find unique cocktail glasses',
            '/glasses',
            GlassIcon
          )}
          {renderFeatureCol(
            'Random',
            'Don\'t have something in mind? explore random cocktails',
            '/random',
            RandomIcon
          )}
          {renderFeatureCol(
            'Drink',
            'Enjoy your fresh cocktail with your friends',
            '/alcohol/Alcoholic',
            ChampagneIcon,
          )}
        </Row>
      </Col>
    </Row>
  </>
);

export default Home;
