import React, { useState } from 'react';
import { Menu, Layout } from 'antd';
import { useDispatch } from 'react-redux';
import { GeneralState } from '../../store/general/types';
import useShallowEqualSelector from '../../hooks/useShallowEqualSelector';
import {
  fetchCocktailsByAlcoholFilter,
  fetchCocktailsByCategory,
  fetchCocktailsByGlass,
} from '../../store/cocktails/actions';

const { Sider } = Layout;
const { SubMenu } = Menu;

interface RenderSubMenuParams {
  (title: string, items: string[], onItemClick: (v: string) => void): JSX.Element;
}

const renderSubMenu: RenderSubMenuParams = (title, items, onItemClick) => (
  <SubMenu title={title} key={title}>
    {items.map(item => (
      <Menu.Item key={item} onClick={e => onItemClick(e.key)}>
        {item}
      </Menu.Item>
    ))}
  </SubMenu>
);

const SideMenu: React.FC = () => {
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [rootSubMenuKeys] = useState(['Alcoholic', 'Categories', 'Glasses']);
  const dispatch = useDispatch();
  const { glasses, categories }: GeneralState = useShallowEqualSelector(
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
      width={200}
      style={{
        overflow: 'auto',
        position: 'fixed',
        left: 0,
        paddingTop: 64,
      }}
    >
      <Menu
        data-simplebar
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        style={{ height: 'calc(100vh - 64px)' }}
      >
        {renderSubMenu('Alcoholic', ['Alcoholic', 'Non Alcoholic'], alcoholic => (
          dispatch(fetchCocktailsByAlcoholFilter(alcoholic.replace(' ', '_')))
        ))}
        {renderSubMenu('Categories', categories, category => (
          dispatch(fetchCocktailsByCategory(category))))}
        {renderSubMenu('Glasses', glasses, glass => dispatch(fetchCocktailsByGlass(glass)))}
      </Menu>
    </Sider>
  );
};

export default SideMenu;
