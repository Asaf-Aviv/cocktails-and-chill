import React, { useState } from 'react';
import { Menu, Layout } from 'antd';
import { Link } from 'react-router-dom';
import { GeneralState } from '../../store/general/types';
import useShallowEqualSelector from '../../hooks/useShallowEqualSelector';

const { Sider } = Layout;
const { SubMenu } = Menu;

interface RenderSubMenuParams {
  (title: string, items: string[], baseURL: string): JSX.Element;
}

const renderSubMenu: RenderSubMenuParams = (title, items, baseURL) => (
  <SubMenu title={title} key={title}>
    {items.map(item => (
      <Menu.Item key={item}>
        <Link to={`${baseURL}/${item}`}>
          {item}
        </Link>
      </Menu.Item>
    ))}
  </SubMenu>
);

const SideMenu: React.FC = () => {
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [rootSubMenuKeys] = useState(['Alcoholic', 'Categories', 'Glasses']);
  const { ingredients, glasses, categories }: GeneralState = useShallowEqualSelector(
    state => state.general
  );

  const onOpenChange = (openedKeys: string[]) => {
    const latestOpenKey = openedKeys.find(key => openKeys.indexOf(key) === -1);

    latestOpenKey && rootSubMenuKeys.indexOf(latestOpenKey) === -1
      ? setOpenKeys(openedKeys)
      : setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
  };

  return (
    <Sider
      width={220}
      style={{
        overflow: 'auto',
        position: 'fixed',
        left: 0,
        paddingTop: 64,
      }}
    >
      <div className="logo" />
      <Menu
        data-simplebar
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        style={{ height: 'calc(100vh - 64px)', overflowX: 'hidden' }}
      >
        {renderSubMenu('Alcoholic', ['Alcoholic', 'Non Alcoholic'], '/alcohol')}
        {renderSubMenu('Categories', categories, '/category')}
        {renderSubMenu('Ingredients', ingredients, '/ingredient')}
        {renderSubMenu('Glasses', glasses, '/glass')}
      </Menu>
    </Sider>
  );
};

export default SideMenu;
