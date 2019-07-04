import React from 'react';
import { Menu, Icon, Row, Col } from 'antd';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { ReactComponent as GlassIcon } from '../../assets/icons/glass.svg';
import { ReactComponent as LemonIcon } from '../../assets/icons/lemon.svg';
import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg';
import { ReactComponent as CategoriesIcon } from '../../assets/icons/categories.svg';
import { ReactComponent as RandomIcon } from '../../assets/icons/random.svg';

import './NavBar.sass';

interface MenuItem {
  to: string;
  text: string;
  iconComponent: any;
}

const links: MenuItem[] = [
  { to: '/', text: 'Home', iconComponent: HomeIcon },
  { to: '/categories', text: 'Categories', iconComponent: CategoriesIcon },
  { to: '/ingredients', text: 'Ingredients', iconComponent: LemonIcon },
  { to: '/glasses', text: 'Glasses', iconComponent: GlassIcon },
  { to: '/random', text: 'Random', iconComponent: RandomIcon },
];

const renderMenuItem = ({ to, text, iconComponent }: MenuItem) => (
  <Menu.Item style={{ height: 64, lineHeight: '64px', fontSize: 16 }} key={to}>
    <Link to={to}>
      <Icon
        style={ { fontSize: 24 }}
        component={iconComponent}
      />
      {text}
    </Link>
  </Menu.Item>
);

const NavBar: React.FC<RouteComponentProps> = props => (
  <Row className="navbar" type="flex" justify="end">
    <Col>
      <Menu
        style={{ height: '100%' }}
        selectedKeys={[props.location.pathname]}
        mode="horizontal"
      >
        {links.map(renderMenuItem)}
      </Menu>
    </Col>
  </Row>
);

export default withRouter(NavBar);
