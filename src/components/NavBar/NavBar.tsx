import React from 'react';
import { Menu, Icon, Row, Col } from 'antd';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';

const NavBar: React.FC<RouteComponentProps> = props => (
  <Row type="flex" justify="end">
    <Col>
      <Menu
        style={{ height: '100%' }}
        selectedKeys={[props.location.pathname]}
        mode="horizontal"
      >
        <Menu.Item style={{ height: 64, lineHeight: '64px' }} key="/">
          <Link to="/">
            <Icon type="home" />
            Home
          </Link>
        </Menu.Item>
        <Menu.Item style={{ height: 64, lineHeight: '64px' }} key="/categories">
          <Link to="/categories">
            <Icon type="home" />
            Categories
          </Link>
        </Menu.Item>
        <Menu.Item style={{ height: 64, lineHeight: '64px' }} key="/ingredients">
          <Link to="/ingredients">
            <Icon type="home" />
            Ingredients
          </Link>
        </Menu.Item>
      </Menu>
    </Col>
  </Row>
);

export default withRouter(NavBar);
