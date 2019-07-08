import React from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

interface RoutesProps {
  to?: string;
  title: string;
}

const Breadcrumbs: React.FC<{ routes: RoutesProps[] }> = ({ routes }) => (
  <Breadcrumb style={{ fontSize: 16, marginBottom: 24 }}>
    {routes.map(r => (
      <Breadcrumb.Item key={r.title}>
        {r.to
          ? <Link to={r.to}>{r.title}</Link>
          : r.title
        }
      </Breadcrumb.Item>
    ))}
  </Breadcrumb>
);

export default Breadcrumbs;
