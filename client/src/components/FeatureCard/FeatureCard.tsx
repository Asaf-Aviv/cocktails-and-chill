import React from 'react';
import { Typography, Button } from 'antd';
import { Link } from 'react-router-dom';

const { Title, Paragraph } = Typography;

interface FeatureCard {
  title: string;
  description: string;
  href: string;
  Svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const FeatureCard: React.FC<FeatureCard> = ({
  title, description, href, Svg,
}) => (
  <div
    className="feature-card"
    style={{
      borderRadius: 6,
      background: '#FFF',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      height: '100%',
      textAlign: 'center',
      padding: '24px',
      boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)',
    }}
  >
    <div
      className="feature-card__img-container"
      style={{ maxWidth: 100, margin: '0 auto 24px' }}
    >
      <Svg style={{ maxWidth: '100%', height: '100%' }} />
    </div>
    <Title level={4}>{title}</Title>
    <Paragraph style={{ fontSize: 16, margin: '0 auto 24px', maxWidth: 200 }}>
      {description}
    </Paragraph>
    <Link style={{ marginTop: 'auto' }} to={href}>
      <Button
        type="primary"
        size="large"
        style={{
          padding: '0 24px',
          display: 'inline-block',
          border: 0,
          boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)',
        }}
        shape="round"
      >
        Explore
      </Button>
    </Link>
  </div>
);

export default FeatureCard;
