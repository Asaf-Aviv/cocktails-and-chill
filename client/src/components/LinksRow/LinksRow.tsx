import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

interface LinksRowProps {
  items: string[];
  baseURL: string;
}

const LinksRow: React.FC<LinksRowProps> = ({ items, baseURL }) => (
  <Row>
    {items.map(item => (
      <Col
        key={item}
        style={{ fontSize: 18, marginBottom: 12 }}
        xs={24}
        sm={12}
        lg={8}
        xl={6}
      >
        <Link style={{ padding: '12px 0' }} to={`${baseURL}/${item}`}>{item}</Link>
      </Col>
    ))}
  </Row>
);

export default LinksRow;
